import "../styles/globals.css";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
