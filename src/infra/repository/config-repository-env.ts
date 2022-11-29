import * as dotenv from 'dotenv'
import { ConfigRepository } from '../../application/repository/config-repository'

dotenv.config()
export class ConfigRepositoryEnv implements ConfigRepository {
  getDefaultPassword(): string {
    return process.env.PASSWORD as string
  }

  getDefaultLogin(): string {
    return process.env.LOGIN as string
  }

  getExpiresIn(): number {
    return Number(process.env.EXPIRES)
  }

  getSecretKey(): string {
    return process.env.SECRET as string
  }
}
