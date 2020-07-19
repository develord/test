import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloLogger from './ApolloLogger'

export default (ctx) => {
  const loggerLink = process.env.NODE_ENV !== 'production' ? [new ApolloLogger()] : []
  const httpLink = new HttpLink({
    uri: process.env.BASE_URL_GQL
  })

  const authLink = setContext.call(ctx, (_, { headers, ...context }) => {
    const token = ctx.store.state.token
    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: token } : {})
      },
      ...context
    }
  })

  return {
    link: ApolloLink.from([...loggerLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultHttpLink: false
  }
}
