/** Get the user from the req Cookie */
export default (req) => {
  if (!req || !req.headers.cookie) { return undefined }
  return req.headers.cookie.split(';').find(c => c.trim().startsWith('user='))
}
