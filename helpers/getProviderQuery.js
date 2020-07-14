export async function getProviderQuery (field) {
  const response = await this.app.apolloProvider.defaultClient.query({
    query: field
  })
  return response
}
