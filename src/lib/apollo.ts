import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/cljy9kkoq049401uk64mw3w41/master',
  cache: new InMemoryCache()
})
