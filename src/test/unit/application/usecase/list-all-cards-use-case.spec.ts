import { ListAllCardsUseCase } from '../../../../application/usecase'
import { FakeCardRepository } from '../../../../infra/repository/fake-card-repository'

describe('ListAllCardsUseCase', () => {
  let fakeRepository: FakeCardRepository

  beforeEach(() => {
    fakeRepository = new FakeCardRepository()
    fakeRepository.create({
      id: '1',
      titulo: 'titulo',
      conteudo: 'conteudo',
      lista: 'lista',
    })
  })

  it('should be return a list of cards', async () => {
    const usecase = new ListAllCardsUseCase(fakeRepository)
    const received = await usecase.execute()

    expect(received).toBeDefined()
    expect(received.length).toBeGreaterThan(0)
  })
})
