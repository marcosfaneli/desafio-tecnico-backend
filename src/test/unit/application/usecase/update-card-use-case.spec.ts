import { ErrorNotFound } from '../../../../domain/error'
import { UpdateCardUseCase } from '../../../../application/usecase'
import { FakeCardRepository } from '../../../../infra/repository/fake-card-repository'
import { logger } from '../../../../application/logger/logger'

describe('UpdateCardUseCase', () => {
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
    const usecase = new UpdateCardUseCase(fakeRepository)
    const request = {
      titulo: 'titulo 1',
      lista: '1,2,3',
      conteudo: 'conteudo 1',
    }
    const mockLogger = jest.spyOn(logger, 'info')
    const received = await usecase.execute('1', request)

    expect(received).toBeDefined()
    expect(received).toEqual({ id: '1', ...request })
    expect(mockLogger).toHaveBeenCalled()
  })

  it('should be throw a exception when card not found', async () => {
    const usecase = new UpdateCardUseCase(fakeRepository)
    const request = {
      titulo: 'titulo 1',
      lista: '1,2,3',
      conteudo: 'conteudo 1',
    }
    await expect(usecase.execute('2', request)).rejects.toEqual(
      new ErrorNotFound(),
    )
  })
})
