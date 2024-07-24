import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'myrealm',
  clientId: 'myclient'
});

export const authInit = async () => {
  try {
    const authenticated = await keycloak.init({
      onLoad: 'login-required'
    });
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
  } catch (error) {
    console.error('Failed to initialize adapter:', error);
  }
}
