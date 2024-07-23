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

## Run Keycloak server locally on Docker

- Install Docker if not yet installed on your local machine
- Run Keycloak image v.25.0.1 in dev mode
```shell
docker run -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -p 8080:8080 quay.io/keycloak/keycloak:25.0.1 start-dev
```
- Login on http://localhost:8080/admin as `admin` with pass `admin`

## Configure Keycloak

#### Creating and configuring realm and client:

- Click on the realm selector to see a list of realms, including a button to create a new realm.
- Click on the `Create realm` button.
- Drug a file `realm-export.json` from project parent directory as Resource file and create prepared realm.

#### Creating a User

- From the left-hand menu, click on `Users`, and then click on `Create new user` button.
- Use name `alice` as Username.
- Optionally add an Email (a@t.c), First Name (Alice) and Last Name (Cooper).
- Click button `Create` to complete the form.

Create password for user
- Click on `Credentials` tab and in this tab `Set password`.
- Enter password you want, optionally turn-off `Temporary` and click `Save` button to complete the form.
- Click `Save Password` on confirmation form.

## Running application

Build and run application with Parcel
```shell
npm run build
npm run start
```
    Server running at http://localhost:1234

