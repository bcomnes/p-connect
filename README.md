# p-connect

Converts connect style middleware, routes, errorRoutes to a promise.  Also supports `http-hash-route` style routes.

```console
npm install p-connect
```

## Usage

``` js
const { pMiddleware, route, hashRoute } = require('p-connect')
const bodyParser = require('body-parser')
const pJson = pMiddleware(bodyParser.json())

const asyncRoute = async (req, res) => {
   await jsonBp(req, res)
   // req.body is now populated
}

app.use(route(asyncRoute))
```

## API

### `pMiddleware(connectMiddleware)`

Convert a callback style middleware to work inside of an asynchronous environment.  Does not return any value, it will just throw if an error occures inside the middleware.

### `route(asyncConnectRoute)`

Converts an async connect route to a callback connect route.

`connectRoute(req, res)` should return a promise.  `route(connectRoute) = (req, res, next) => {...}` returns a connet style callback middleware 

### `hashRoute(asyncHashRoute)`

Converts an async route to a `http-hash-router` style callback route.

## License

MIT
