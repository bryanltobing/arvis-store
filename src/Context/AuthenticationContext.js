import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, facebookProvider } from 'firebaseConfig'

const AuthenticationContext = createContext()

const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const register = ({ email, password }) =>
    auth.createUserWithEmailAndPassword(email, password)

  const login = ({ email, password }) =>
    auth.signInWithEmailAndPassword(email, password)

  const logout = () => auth.signOut()

  const authWithFacebook = () => auth.signInWithPopup(facebookProvider)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{ currentUser, authWithFacebook, register, login, logout }}
    >
      {!loading && children}
    </AuthenticationContext.Provider>
  )
}

const useAuthentication = () => useContext(AuthenticationContext)

export { AuthenticationProvider, useAuthentication }
