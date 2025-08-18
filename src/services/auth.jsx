export const AUTH_TOKEN = '516fb57b-f2c5-4985-95e1-e3e4836d8bd4';

export const doLogin = (email, password) => {
  if (email === 'admin' && password === '12345') {
    console.log('Login successful');
    localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
    localStorage.setItem('USER_EMAIL', email);
    return true;
  } else {
    console.log('Login failed');
    return false;
  }
}