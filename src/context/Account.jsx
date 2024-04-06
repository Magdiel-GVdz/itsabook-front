import React, { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../utils/UserPool";

const AccountContext = createContext();

const Account = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const [userToConfirm, setUserToConfirm] = useState(null);

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

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject("No hay usuario activo.");
      }
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
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
    }
  };

  const signUp = (data) => {
    Pool.signUp(data.email, data.password, [], null, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      setUserToConfirm(result.user.username);
      console.log("userToConfirm: ",result.user.username);
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
          window.location.href = '/login';
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

  const getUserAttributes = async (Username) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      user.getUserAttributes((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
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
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
