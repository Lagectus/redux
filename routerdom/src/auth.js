let isAuthenticated = false;

export function login() {
  isAuthenticated = true;
  console.log("User logged in");
}

export function logout() {
  isAuthenticated = false;
  console.log("User logged out");
}

export function checkAuth() {
  return isAuthenticated;
}