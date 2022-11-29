import { CreateCardUseCase } from '../../../../application/usecase'
import { FakeCardRepository } from '../../../../infra/repository/fake-card-repository'

jest.mock('uuid', () => ({ v4: () => 'uahca' }))

describe('CreateCardUseCase', () => {
  let fakeRepository: FakeCardRepository

  beforeEach(() => {
    fakeRepository = new FakeCardRepository()
  })

  it('should be return create a card', async () => {
    const usecase = new CreateCardUseCase(fakeRepository)
    const request = {
      titulo: 'titulo 1',
      lista: '1,2,3',
      conteudo: 'conteudo 1',
    }
    const received = await usecase.execute(request)

    expect(received).toBeDefined()
    expect(received).toEqual({ id: 'uahca', ...request })
  })
})
