import getUserFromCookie from '../helpers/getUserFromCookie'

export default function ({ store, redirect, req }) {
  if (process.client) {
    if (store.state.auth.loggedIn) {
      redirect('/ad-admin')
    }
  }
  if (process.server) {
    if (getUserFromCookie(req)) {
      redirect('/ad-admin')
    }
  }
}
