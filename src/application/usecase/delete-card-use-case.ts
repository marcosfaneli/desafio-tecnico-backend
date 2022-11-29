import { logger } from '../logger/logger'
import { ErrorNotFound } from '../../domain/error'
import { CardRepository } from '../repository/cards-repository'

export class DeleteCardUseCase {
  constructor(private repository: CardRepository) {}
  async execute(id: string): Promise<boolean> {
    const card = await this.repository.getById(id)
    if (!card) {
      throw new ErrorNotFound()
    }
    await this.repository.remove(id)
    logger.info(`Card ${card.id} - ${card.titulo} - Removido`)
    return true
  }
}
