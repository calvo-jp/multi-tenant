import { GraphQLClient } from "graphql-request";

const hygraphContentApi =
  "https://api-ap-northeast-1.hygraph.com/v2/clbdh25vy1rlo01ujgtr649sr/master";

const client = new GraphQLClient(hygraphContentApi);

export default client;
