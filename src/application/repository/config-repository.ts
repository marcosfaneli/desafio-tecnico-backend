export interface ConfigRepository {
  getDefaultPassword(): string
  getDefaultLogin(): string
  getExpiresIn(): number
  getSecretKey(): string
}
