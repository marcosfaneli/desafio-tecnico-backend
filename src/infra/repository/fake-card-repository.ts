import { Card } from '../../domain/card'
import { CardRepository } from '../../application/repository/cards-repository'

let data: Card[] = []

export class FakeCardRepository implements CardRepository {
  getAll(): Promise<Card[]> {
    return new Promise((resolve) => resolve(data))
  }
  create(card: Card): Promise<void> {
    data.push(card)
    return new Promise((resolve) => resolve())
  }
  update(card: Card): Promise<void> {
    data = data.filter((c) => c.id !== card.id)
    data.push(card)
    return new Promise((resolve) => resolve())
  }
  getById(id: string): Promise<Card | undefined> {
    const card = data.find((card) => card.id === id)
    if (card) {
      return new Promise((resolve) => resolve(card))
    }
    return new Promise((resolve) => resolve(undefined))
  }
  remove(id: string): Promise<void> {
    data = data.filter((card) => card.id !== id)
    return new Promise((resolve) => resolve())
  }
}
