# p-connect

Converts connect style middleware, routes, errorRoutes to a promise.  Also supports `http-hash-route` style routes.

```console
npm install p-connect
```

## Usage

``` js
const { pMiddleware, route, hashRoute } = require('p-connect')
const bodyParser = require('body-parser')
const pJson = pMw(bodyParser.json())

const asyncRoute = async (req, res) => {
   await jsonBp(req, res)
   // req.body is now populated
}

app.use(route(asyncRoute))
```

## API

### `pMiddleware(connectMiddleware)`

Convert a callback style middleware to work inside of an asynchronous environment.  Does not return any value, it will just throw if an error occures inside the middleware.

### `route(connectRoute)`

Converts an async route to a connect style callback route.

### `hashRoute(asyncHashRoute)`

Converts an async route to a `http-hash-router` style callback route.

## License

MIT
