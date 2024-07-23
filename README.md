# JavaScript client with Keycloak server demo

**The idea of the demo:**

When the user clicks on the login button in the frontend application, the browser is redirected to the Keycloak login page.
The user then authenticates with Keycloak, before the browser is redirected back to the application.
The application then invokes Keycloak for ID token, Access token and Refresh token.

1. Login
2. Redirect to Keycloak
3. Open login page
4. Submit login page
5. Get Authorization Code
6. Retrieve tokens
7. Authenticated

## Running application locally

* [Run Keycloak Server](./keycloak#run-keycloak-server-locally-on-docker)
* [Configure Keycloak Server](./keycloak#configure-keycloak)

Install dependencies from `package.json`
```shell
npm install
```

Build and run application with Parcel
```shell
npm run build
npm run start
```
    Server running at http://localhost:1234

