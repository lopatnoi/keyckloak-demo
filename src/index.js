import {authInit, keycloak} from './login.js'

const loginButton = document.getElementById('login-btn');
const logoutButton = document.getElementById('logout-btn');
const refreshButton = document.getElementById('refresh-btn');

const tokenInfoDiv = document.getElementById('token-info');
const usernameH2 = document.getElementById('name');

const outputDiv = document.getElementById('output');
const tokenOutputDiv = document.querySelector('#token-output');
const parseTokenOutputPre = document.querySelector('#parse-token-output pre');

const tokenButton = document.getElementById('token-btn');
const accessTokenButton = document.getElementById('access-token-btn');
const refreshTokenButton = document.getElementById('refresh-token-btn');

const output = (token, tokenParsed) => {
  tokenOutputDiv.textContent = token;
  parseTokenOutputPre.textContent = JSON.stringify(tokenParsed, undefined, 2);

  outputDiv.classList.add('visible');
}

loginButton.addEventListener('click', async () => {
  try {
    await authInit();
    console.log(keycloak);

    tokenInfoDiv.classList.add('visible');
    usernameH2.textContent = `Hi ${keycloak.idTokenParsed.name}`;
  } catch (error) {
    console.error('Failed to login:', error);
  }
});

logoutButton.addEventListener('click', async () => {
  try {
    await keycloak.logout();
  } catch (error) {
    console.error('Failed to logout:', error);
  }
});

refreshButton.addEventListener('click', async () => {
  try {
    const refreshed = await keycloak.updateToken(-1);
    console.log(`Token ${refreshed ? 'was successfully refreshed' : 'is still valid'}`);

    output(keycloak.idToken, keycloak.idTokenParsed);
  } catch (error) {
    console.error('Failed to refresh token:', error);
  }
});

tokenButton.addEventListener('click', () => {
  output(keycloak.token, keycloak.tokenParsed);
});

accessTokenButton.addEventListener('click', () => {
  output(keycloak.idToken, keycloak.idTokenParsed);
});

refreshTokenButton.addEventListener('click', () => {
  output(keycloak.refreshToken, keycloak.refreshTokenParsed);
});
