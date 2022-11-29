import { Card } from '../../domain/card'
import { ErrorNotFound } from '../../domain/error'
import { CardRepository } from '../repository/cards-repository'

export class GetCardByIdUseCase {
  constructor(private repository: CardRepository) {}
  async execute(id: string): Promise<Card> {
    const card = await this.repository.getById(id)
    if (!card) {
      throw new ErrorNotFound()
    }
    return card
  }
}
