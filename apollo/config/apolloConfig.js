import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { BatchHttpLink } from 'apollo-link-batch-http'
import ApolloLogger from './ApolloLogger'

export default (ctx) => {
  const loggerLink = process.env.NODE_ENV !== 'production' ? [new ApolloLogger()] : []
  const httpOptions = {
    uri: (process.browser || process.static) ?  'https://api.bus-world.fr/graphql' : 'http://localhost:4000/graphql'
  }

  const httpLink = ApolloLink.split(
    operation => operation.getContext().hasUpload,
    createUploadLink(httpOptions),
    new BatchHttpLink(httpOptions)
  )

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
    link: ApolloLink.from([
      ...loggerLink,
      authLink,
      httpLink
    ]),
    // persisting: true,
    cache: new InMemoryCache(),
    defaultHttpLink: false
  }
}
