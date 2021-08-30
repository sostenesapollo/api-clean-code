module.exports = class MissingParamError extends Error {
  constructor () {
    super('Internal Error')
    this.name = 'UnauthorizedError'
  }
}
