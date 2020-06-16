# p-connect

Converts connect style middleware, routes, errorRoutes to a promise.  Also supports `http-hash-route` style routes.

```console
npm install p-connect
```

## Usage

``` js
const { pMiddleware, route } = require('p-connect')
const bodyParser = require('body-parser')
const pJson = pMiddleware(bodyParser.json())

const asyncRoute = async (req, res) => {
   await pJson(req, res)
   // req.body is now populated
}

app.use(route(asyncRoute))
```

## API

### `pMiddleware(connectMiddleware)`

Convert a callback style middleware to work inside of an asynchronous environment.  Does not return any value, it will just throw if an error occures inside the middleware.

### `route(asyncConnectRoute)`

Converts an async connect route to a callback connect route.

`connectRoute(req, res, next)` should return a promise.  `route(connectRoute) = (req, res, next) => {...}` returns a connect style callback middleware that calls next(err) when asyncConnectRoute throws.  You should still call the `next` callback in async middleware if you want to keep the middleware chain moving.

## License

MIT
