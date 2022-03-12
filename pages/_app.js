import "../styles/globals.css";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

import { store } from "../store";
import { Provider } from "react-redux";
// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
