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

#### Creating and configuring new realm:

- Click on the realm selector to see a list of realms, including a button to create a new realm.
- Click on the `Create realm` button.
- On the next page, enter a name for the Realm name: `myrealm`
- Click button `Create` to save it.

#### Creating a User

- From the left-hand menu, click on `Users`, and then click on `Create new user` button.
- Use name `alice` as Username.
- Optionally add an Email (a@t.c), First Name (Alice) and Last Name (Cooper).
- Click button `Create` to complete the form.

Create password for user
- Click on `Credentials` tab and in this tab `Set password`.
- Enter password you want, optionally turn-off `Temporary` and click `Save` button to complete the form.
- Click `Save Password` on confirmation form.

#### Creating a new group

- From the left-hand menu, click on `Groups`, and then click `Create group` button.
- Use name `mygroup` as Name.
- Click button `Create` to complete the form.

Add the user `alice` to the group
- Go back to the `Users` page and select the user `alice` created previously
- Next, click on `Groups` tab and in this tab, click `Join Group`, select the group `mygroup` and click on `Join` to add the user to the group

#### Creating a global role

- Click on `Realm roles` in the menu on the left-hand side and then `Create role`.
- Enter a role name `myrole` and click on `Save` button.

Add the user `alice` to the role
- Go back to the Users page and select the user `alice` created previously
- Next, click on `Role mapping` tab and in this tab, click `Assign role`
- Filter roles by `Filter by realms roles` and choose `myrole` to add it.
- Click `Assign` button to finish the form

#### Register client for Keycloak server

- Click on `Clients` in the menu on the left-hand side and then `Create client`.
- Enter Client ID `myclient` and go `Next`
- In `Capability Context` tab left all by default and click `Next` to go on next tab.
- In `Login Settings` fill `Valid redirect URIs` and `Web origins` fields
  - Valid redirect URIs should contain redirected page after successful login.
  As the demo page (index.html) starting from IDE, in my case it will be: http://localhost:63342/keyckloak-demo/index.html
  - Web origins for this demo may have `*` wildcard for simplicity to permit all origins. Or it should contain specific URIs that you want to allow.
- Click `Save` button to finish the form.

## Running application

As it is demo, use IDE (in my case it's IntelliJIDEA) to start index.html in chrome.
The URI example: http://localhost:63342/keyckloak-demo/index.html

After authentication, Keycloak redirect back to the application with same URI + query params but reload the `index.html` and all objects in `app.js`

```text
http://localhost:63342/keyckloak-demo/index.html#
state=47f1b89b-495d-4ef6-be62-1b2b7b2cebfc
&session_state=4f67eaf9-335c-49bb-9c2e-015b40d61827
&iss=http%3A%2F%2Flocalhost%3A8080%2Frealms%2Fmyrealm
&code=d95dc500-e648-4f5d-81a3-cc2e32edaa3c.4f67eaf9-335c-49bb-9c2e-015b40d61827.39a51660-bc66-4d0f-8888-d09a2d534d21
```

## Problem

If use `window.onload` to init keycloak - it works, keycloak instance will be authorized but it make authorization on the very beginning
If to use `button.addEventListener` - it authorize successfully, but reload the page and as result reload objects in `app.js`
