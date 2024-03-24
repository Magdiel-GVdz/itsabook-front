import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../utils/UserPool";

const AccountContext = createContext();

const Account = (props) => {
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
          console.log("onSuccess: ", data);
          resolve(data);
        },
        onFailure: (error) => {
          console.error("onFailure: ", error);
          reject(error);
          setError("El usuario o la contraseña son incorrectos.");
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
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
