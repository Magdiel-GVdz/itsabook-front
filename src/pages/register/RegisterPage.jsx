import React, { useContext } from "react";
import RegisterForm from "./RegisterForm";
import ConfirmAccount from "./ConfirmAccount";
import { AccountContext } from "../../context/Account";

const RegisterPage = () => {
  const { userToConfirm } = useContext(AccountContext);
  return (
    <>
      <RegisterForm />
      <br />
      {userToConfirm && <ConfirmAccount />}
    </>
  );
};

export default RegisterPage;
