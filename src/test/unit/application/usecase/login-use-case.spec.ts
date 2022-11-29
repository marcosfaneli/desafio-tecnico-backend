import { ErrorUserPassword } from '../../../../domain/error'
import { LoginUseCase } from '../../../../application/usecase'
import { ConfigRepositoryEnv } from '../../../../infra/repository'
import jwt from 'jsonwebtoken'

describe('LoginUseCase', () => {
  beforeEach(() => {
    process.env.USER = '1'
    process.env.PASSWORD = '1'
    process.env.SECRET = '1'
    process.env.EXPIRES = '1'
  })

  it('should be return token when user and password is valid', async () => {
    const repository = new ConfigRepositoryEnv()
    const usecase = new LoginUseCase(repository)
    const credential = {
      login: '1',
      senha: '1',
    }
    const token = { type: 'Bearer', token: 'valid_token' }
    jest.mock('jsonwebtoken')
    const sign = jest.spyOn(jwt, 'sign')
    sign.mockImplementation(() => 'valid_token')

    const received = await usecase.execute(credential)

    expect(received).toEqual(token)
  })

  it('should be throw a exception when user or password invalid', async () => {
    const repository = new ConfigRepositoryEnv()
    const usecase = new LoginUseCase(repository)
    const credential = {
      login: 'invalid',
      senha: 'invalid',
    }
    await expect(usecase.execute(credential)).rejects.toEqual(
      new ErrorUserPassword(),
    )
  })
})
