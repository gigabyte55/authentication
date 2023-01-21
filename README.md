# authentication

## node 16.x

## npm 8.x

The easiest way is to use nvm. See more:

-   https://github.com/nvm-sh/nvm
-   https://content.breatheco.de/en/how-to/nvm-install-windows

### Mongodb

-   https://www.mongodb.com/

## Run locally

```
npm install
npm run start
```

## Register endpoint example

```
curl -X POST \
  'http://localhost:3000/api/auth/register' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "username": "YOUR_USERNAME",
    "password1": "YOUR_PASSWORD",
    "password2": "YOUR_PASSWORD_CONFIRMATION"
}'
```

## Login endpoint example

```
curl -X POST \
  'http://localhost:3000/api/auth/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "username": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD"
}'
```
