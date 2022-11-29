import { Router } from 'express'
import { LoginUseCase } from '../usecase'
import { ConfigRepositoryEnv } from '../../infra/repository'

const routes = Router()
const repository = new ConfigRepositoryEnv()

routes.post('/', async (request, response) => {
  const bearer = await new LoginUseCase(repository).execute(request.body)
  response.json(bearer)
})

export { routes }
