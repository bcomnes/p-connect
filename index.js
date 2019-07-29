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

exports.route = function route (route) {
  return (req, res, next) => {
    route(req, res).then(() => done(null)).catch(next)
  }
}

// For http-hash-router style routes
exports.hashRoute = function route (hashRoute) {
  return (req, res, opts, done) => {
    hashRoute(req, res, opts).then(() => done(null)).catch(done)
  }
}
