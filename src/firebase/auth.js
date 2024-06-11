import { getAuth } from 'firebase/auth'
import { app } from './app'

export const auth = getAuth(app)


export const getErrorMessage = (error) => {
  const isError = error instanceof Error

  if (!isError) {
    return null
  }
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'このメールアドレスはすでに使用されています。'
    case 'auth/user-not-found':
      return 'メールアドレスかパスワードが正しくありません。'
    case 'auth/wrong-password':
      return 'メールアドレスかパスワードが正しくありません。'
    default:
      return error.message
  }
}