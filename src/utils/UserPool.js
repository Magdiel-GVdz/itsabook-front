import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_sOnPABtSa",
  ClientId: "4stsd2iholfthtl623e4ot9uug",
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
