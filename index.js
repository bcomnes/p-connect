// CB -> async

// Promise based connect
exports.pMiddleware = function pMiddleware (middleware) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      middleware(...args, (err) => {
        if (err) reject(err)
        else resolve()
      })
    })
  }
}

// async -> cb
exports.route = function route (route) {
  return (...args) => {
    var next = args[args.length - 1]
    route(...args).catch(next)
  }
}
