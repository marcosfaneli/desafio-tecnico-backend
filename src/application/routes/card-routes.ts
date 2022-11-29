import { Router } from 'express'
import {
  CreateCardUseCase,
  DeleteCardUseCase,
  GetCardByIdUseCase,
  ListAllCardsUseCase,
  UpdateCardUseCase,
} from '../usecase'
import { FakeCardRepository } from '../../infra/repository'
import { Joi, validate } from 'express-validation'

const cardSchema = {
  body: Joi.object({
    titulo: Joi.string().required(),
    conteudo: Joi.string().required(),
    lista: Joi.string().required(),
  }),
}

const routes = Router()

const repository = new FakeCardRepository()

routes.get('/', async (_request, response) => {
  const cards = await new ListAllCardsUseCase(repository).execute()
  response.json(cards)
})

routes.get('/:id', async (request, response) => {
  const card = await new GetCardByIdUseCase(repository).execute(
    request.params.id,
  )
  response.json(card)
})

routes.post('/', validate(cardSchema), async (request, response) => {
  const card = await new CreateCardUseCase(repository).execute(request.body)
  response.status(201).json(card)
})

routes.put('/:id', validate(cardSchema), async (request, response) => {
  const card = await new UpdateCardUseCase(repository).execute(
    request.params.id,
    request.body,
  )
  response.json(card)
})

routes.delete('/:id', async (request, response) => {
  await new DeleteCardUseCase(repository).execute(request.params.id)
  response.status(204).json()
})

export { routes }
