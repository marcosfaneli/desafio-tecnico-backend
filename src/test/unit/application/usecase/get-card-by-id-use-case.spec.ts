import { ErrorNotFound } from '../../../../domain/error'
import { GetCardByIdUseCase } from '../../../../application/usecase'
import { FakeCardRepository } from '../../../../infra/repository/fake-card-repository'

describe('GetCardByIdUseCase', () => {
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

  it('should be return a cards when card found', async () => {
    const usecase = new GetCardByIdUseCase(fakeRepository)
    const received = await usecase.execute('1')

    expect(received).toBeDefined()
  })

  it('should be throw a exception when card not found', async () => {
    const usecase = new GetCardByIdUseCase(fakeRepository)

    await expect(usecase.execute('2')).rejects.toEqual(new ErrorNotFound())
  })
})
