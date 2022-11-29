import { Card } from '../../domain/card'
import { CardRepository } from '../repository/cards-repository'

export class ListAllCardsUseCase {
  constructor(private repository: CardRepository) {}
  async execute(): Promise<Card[]> {
    return await this.repository.getAll()
  }
}
