export class ErrorNotFound extends Error {
  constructor() {
    super('Card not found')
  }
}
