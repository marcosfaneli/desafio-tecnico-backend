import * as jwt from 'jsonwebtoken'
import { Credencial } from '../entity/credencial-request'
import { Token } from '../entity/token'
import { ErrorUserPassword } from '../../domain/error/error-user-password'
import { ConfigRepository } from '../repository/config-repository'

export class LoginUseCase {
  constructor(private repository: ConfigRepository) {}
  async execute(credencial: Credencial): Promise<Token> {
    if (
      credencial.login === this.repository.getDefaultLogin() &&
      credencial.senha === this.repository.getDefaultPassword()
    ) {
      const token = await jwt.sign({}, this.repository.getSecretKey(), {
        expiresIn: this.repository.getExpiresIn(),
      })
      return { type: 'Bearer', token }
    }
    throw new ErrorUserPassword()
  }
}
