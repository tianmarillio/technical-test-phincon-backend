const { GeneralError } = require('./error_definition')

function errorHandler(err, req, res, next) {
  switch (err.name) {
    case GeneralError.validationError().name:
      return res
        .status(400)
        .json(serializeError(GeneralError.validationError(err.errors)))
    case GeneralError.badRequest().name:
      return res.status(400).json(serializeError(err))
    case GeneralError.unauthorized().name:
      return res.status(401).json(serializeError(err))
    case GeneralError.notFound().name:
      return res.status(404).json(serializeError(err))
    default:
      return res
        .status(500)
        .json(serializeError(err ?? GeneralError.internalServerError()))
  }
}

function serializeError(err) {
  return {
    isError: true,
    error: err,
  }
}

module.exports = { errorHandler }
