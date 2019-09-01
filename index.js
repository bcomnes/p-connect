// CB -> async

// Promise based connect
exports.pMiddleware = function pMiddleware (middleware) {
  return (req, res) => {
    return new Promise((resolve, reject) => {
      middleware(req, res, (err) => {
        if (err) reject(err)
        else resolve()
      })
    })
  }
}

// Promise based hashrouter
exports.pHashMiddleware = function pHashMiddleware (hashMiddleware) {
  return (req, res, opts) => {
    return new Promise((resolve, reject) => {
      hashMiddleware(req, res, opts, (err) => {
        if (err) reject(err)
        else resolve()
      })
    })
  }
}

// async -> cb

exports.route = function route (route) {
  return (req, res, next) => {
    route(req, res).then(() => next(null)).catch(next)
  }
}

// For http-hash-router style routes
exports.hashRoute = function hashRoute (hashRoute) {
  return (req, res, opts, done) => {
    hashRoute(req, res, opts).then(() => done(null)).catch(done)
  }
}
