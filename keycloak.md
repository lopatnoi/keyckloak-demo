## Run Keycloak server locally on Docker

- Run Keycloak image `v.25.0.1` in dev mode
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
