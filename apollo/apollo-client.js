import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dev-carsforsale.drivemustang.com.au/graphql",
  cache: new InMemoryCache(),
});

export default client;
