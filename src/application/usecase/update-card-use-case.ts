import { Card } from '../../domain/card'
import { logger } from '../logger/logger'
import { CardRequest } from '../entity/card-request'
import { ErrorNotFound } from '../../domain/error'
import { CardRepository } from '../repository/cards-repository'

export class UpdateCardUseCase {
  constructor(private repository: CardRepository) {}
  async execute(id: string, request: CardRequest): Promise<Card> {
    const finded = await this.repository.getById(id)
    if (!finded) {
      throw new ErrorNotFound()
    }
    const card = { id: finded.id, ...request }
    await this.repository.update(card)
    logger.info(`Card ${card.id} - ${card.titulo} - Alterado`)
    return card
  }
}
