import { Card } from '../../domain/card'
import { CardRepository } from '../repository/cards-repository'
import { v4 as uuid } from 'uuid'
import { CardRequest } from '../entity/card-request'

export class CreateCardUseCase {
  constructor(private repository: CardRepository) {}
  async execute(request: CardRequest): Promise<Card> {
    const id = uuid()
    const card = { ...request, id }
    await this.repository.create(card)
    return card
  }
}
