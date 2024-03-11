import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_YuVh3rCjQ",
  ClientId: "4ugu2eg3cndlecr88eoarhajgv",
};

export default new CognitoUserPool(poolData);
