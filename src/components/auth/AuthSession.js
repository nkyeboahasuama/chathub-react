// Function to set the authentication state in session storage
const setAuthState = (authState) => {
  sessionStorage.setItem("authState", JSON.stringify(authState));
};

// Function to get the authentication state from session storage
const getAuthState = () => {
  const authState = sessionStorage.getItem("authState");
  return authState ? JSON.parse(authState) : null;
};

// Function to clear the authentication state from session storage
const clearAuthState = () => {
  sessionStorage.removeItem("authState");
};

export { setAuthState, getAuthState, clearAuthState };
