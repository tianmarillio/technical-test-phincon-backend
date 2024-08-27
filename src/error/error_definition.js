class GeneralError {
  static badRequest() {
    return {
      name: "badRequest",
      status: 401,
      message: "Bad request",
    };
  }

  static unauthorized() {
    return {
      name: "unauthorized",
      status: 401,
      message: "Unauthorized",
    };
  }

  static notFound() {
    return {
      name: "notFound",
      status: 404,
      message: "Record not found",
    };
  }

  static internalServerError() {
    return {
      name: "internalServerError",
      status: 500,
      message: "Internal server error",
    };
  }
}

module.exports = { GeneralError };
