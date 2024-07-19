const loginButton = document.getElementById('login-btn');

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'myrealm',
  clientId: 'myclient'
});

async function initKeycloak() {
  try {
    const authenticated = await keycloak.init({
      onLoad: 'login-required'
    });
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
  } catch (error) {
    console.error('Failed to initialize adapter:', error);
  }
}

// Works with window.onload
// window.onload = function () {
//   initKeycloak();
// }

// Partially works with event listener because reload the page
loginButton.addEventListener('click', initKeycloak);
