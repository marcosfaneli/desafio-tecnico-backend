export class ErrorUserPassword extends Error {
  constructor() {
    super('Usuário ou senha inválidos')
  }
}
