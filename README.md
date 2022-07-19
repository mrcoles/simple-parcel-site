# Simple Parcel Site

A simple test of getting HMR to work with parcel and docker compose.

To test:

- ✅ HMR works if you run it locally: `yarn install && yarn start` (yarn 1.22.4)
- ❌ HMR fails if you run it through docker: `docker compose up` (docker compose v2.6.1)

For the docker variation:

- Port 1239 is exposed in [docker-compose.yml](docker-compose.yml)
- The `--hmr-port` is set to 1239 in [package.json](package.json)

but when you load localhost:1234 in a browser, the developer console shows the message:

```
WebSocket connection to 'ws://localhost:1239/' failed:
undefined
[parcel] 🚨 Connection to the HMR server was lost
```
