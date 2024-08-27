async function sanitizeRequest(yupSchema, body) {
  return await yupSchema.validate(body, { strict: true })
}

module.exports = { sanitizeRequest }
