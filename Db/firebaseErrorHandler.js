export const authCodeErrorToMessage = (error) => {

    let errorMessage = ''
  
    switch (error.code) {
      case 'auth/invalid-email':
          errorMessage = 'Email invalid'
          break
      case 'auth/user-not-found':
          errorMessage = 'Email ou mot de passe incorrect'
          break
      case 'auth/wrong-password':
          errorMessage = 'Email ou mot de passe incorrect'
          break
      default:
          errorMessage = 'Email ou mot de passe incorrect'
          break
    }
  
    return errorMessage
  }