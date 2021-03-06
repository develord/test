import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { BatchHttpLink } from 'apollo-link-batch-http'
import ApolloLogger from './ApolloLogger'

export default (ctx) => {
  const loggerLink = process.env.NODE_ENV !== 'production' ? [new ApolloLogger()] : []

  const httpOptions = {
    uri: '0.0.0.0:8080/graphql'
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
    cache: new InMemoryCache(),
    defaultHttpLink: false
  }
}
