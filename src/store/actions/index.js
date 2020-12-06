export const loggedIn = () => {
  return {
    type: "LOGIN",
  }
}

export const loggedOut = () => {
  return {
    type: "LOGOUT",
  }
}

export const setUserInformation = (userInfo) => {
  return {
    type: "SET USER",
    payload: userInfo,
  }
}

export const removeUserInformation = () => {
  return {
    type: "REMOVE USER",
  }
}