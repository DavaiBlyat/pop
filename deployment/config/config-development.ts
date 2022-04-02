/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = "https://main.d6mwilw381o4x.amplifyapp.com/";

const configDevelopment = {
  HOSTED_URL,
  MODE: "DEVELOPMENT",
  REGION: "eu-west-2",
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: "AWS_IAM" as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */

  //  appSyncID       : "amplify codegen add -apiId 5ar7bezwnrgh3ffptmy5wyw4n4"
  //   dynamoID        : "users-61f5d5b"

  USER_POOL_CLIENT_ID: "33rkvug2jbiek2kjliob7d19ej",
  USER_POOL_ID: "us-west-2_h5i3sastS",
  IDENTITY_POOL_ID: "us-west-2:57801f10-6532-4b27-8a49-6a1b32162552",
  GRAPHQL_ENDPOINT:
    "https://yfnn2uetcrhw5drlcu77e37fti.appsync-api.us-west-2.amazonaws.com/graphql",
};

export default configDevelopment;
