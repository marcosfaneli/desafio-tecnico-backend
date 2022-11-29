import { Card } from '../../domain/card'

export interface CardRepository {
  getAll(): Promise<Card[]>
  create(card: Card): Promise<void>
  update(card: Card): Promise<void>
  getById(id: string): Promise<Card | undefined>
  remove(id: string): Promise<void>
}
