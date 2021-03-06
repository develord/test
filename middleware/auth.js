import getUserFromCookie from '../helpers/getUserFromCookie'

export default function ({ store, redirect, req, isServer }) {
  if (process.server) {
    if (!getUserFromCookie(req)) { return redirect('/auth') }
  }

  if (process.client) {
    if (!store.getters['auth/isAuthenticated']) { return redirect('/auth') }
  }
}
