class GeneralError {
  static badRequest() {
    return {
      name: 'BadRequest',
      status: 401,
      message: 'Bad request',
    }
  }

  static unauthorized() {
    return {
      name: 'Unauthorized',
      status: 401,
      message: 'Unauthorized',
    }
  }

  static notFound() {
    return {
      name: 'NotFound',
      status: 404,
      message: 'Record not found',
    }
  }

  static internalServerError() {
    return {
      name: 'InternalServerError',
      status: 500,
      message: 'Internal server error',
    }
  }

  static validationError(details = null) {
    return {
      name: 'ValidationError',
      status: 400,
      message: 'Internal server error',
      details,
    }
  }
}

module.exports = { GeneralError }
