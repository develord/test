export async function getProviderQuery (field) {
  const response = await this.app.apolloProvider.defaultClient.query({
    query: field
  })
  return response
}

export async function getProviderMutate (field, data) {
  const response = await this.app.apolloProvider.defaultClient.mutate({
    mutation: field,
    variables: { ...data }
  })
  return response
}
