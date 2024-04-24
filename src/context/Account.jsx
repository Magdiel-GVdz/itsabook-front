import React, { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../utils/UserPool";

const AccountContext = createContext();
6
const Account = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userAttributes, setUserAttributes] = useState(null);
  const [userToConfirm, setUserToConfirm] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const setUserConfirmCode = (user) => setUserToConfirm(user);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        await getSession();
        setUserLoggedIn(true);
      } catch (error) {
        setUserLoggedIn(false);
      }
    };
    checkUserSession();
  }, []);

  

  const getUserAttributes = (user) => {
    return new Promise((resolve, reject) => {
      user.getUserAttributes((err, result) => {
        if (err) {
          reject(err);
          return;
        }
        const userAttributes = result.reduce((acc, { Name, Value }) => {
          acc[Name] = Value;
          return acc;
        }, {});
        resolve(userAttributes);
      });
    });
  };

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (!user) {
        reject("No hay usuario activo.");
        return;
      }
      user.getSession((err, session) => {
        if (err) {
          reject(err);
        } else {
          getUserAttributes(user)
          .then((attributes) => {
            setUserAttributes(attributes);
          })
          .catch((err) => {
            console.error(err);
          });
          console.log(session)
          resolve(session);
        }
      });
    });
  };


  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          getUserAttributes(user)
          .then((attributes) => {
            setUserAttributes(attributes);
          })
          .catch((err) => {
            console.error(err);
          });
          resolve(data);
        },
        onFailure: (error) => {
          console.error("onFailure: ", error);
          reject(error);
        },
        newPasswordRequired: (data) => {
          console.log("newPassordRequired: ", data);
          resolve(data);
        },
      });
    });
  };
  const logout = async () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      setUserLoggedIn(false);
      setUserAttributes(null);
    }
  };

  const signUp = (data) => {
    Pool.signUp(data.email, data.password, [], null, (err, result) => {
      if (err) {
        setErrorMessage(err.message);
        return;
      }
      setErrorMessage(null);
      setUserToConfirm(result.user.username);
      console.log("userToConfirm: ", result.user.username);
    });
  };

  const isUserLoggedIn = () => {
    return userLoggedIn;
  };

  const confirmUser = async (Username, ConfirmationCode) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.confirmRegistration(ConfirmationCode, true, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
          setUserToConfirm(null);
          window.location.href = "/login";
        }
      });
    });
  };

  const resendConfirmationCode = async (Username) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.resendConfirmationCode((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  const forgotPassword = async (Username) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.forgotPassword({
        onSuccess: (result) => {
          resolve(result);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  };

  const updateUserAttributes = async (Username, Attributes) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.updateAttributes(Attributes, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  const deleteUser = async (Username) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.deleteUser((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  const confirmForgotPassword = async (
    Username,
    ConfirmationCode,
    Password
  ) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.confirmPassword(ConfirmationCode, Password, {
        onSuccess: (result) => {
          resolve(result);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  };
  const changePassword = async (Username, OldPassword, NewPassword) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.changePassword(OldPassword, NewPassword, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
        isUserLoggedIn,
        setUserLoggedIn,
        signUp,
        confirmUser,
        resendConfirmationCode,
        forgotPassword,
        getUserAttributes,
        updateUserAttributes,
        deleteUser,
        confirmForgotPassword,
        changePassword,
        userToConfirm,
        setUserConfirmCode,
        userAttributes,
        errorMessage
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
