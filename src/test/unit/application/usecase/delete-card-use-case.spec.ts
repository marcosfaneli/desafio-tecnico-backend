import { ErrorNotFound } from '../../../../domain/error'
import { DeleteCardUseCase } from '../../../../application/usecase'
import { FakeCardRepository } from '../../../../infra/repository/fake-card-repository'
import { logger } from '../../../../application/logger/logger'

describe('DeleteCardUseCase', () => {
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

  it('should be return true when card found', async () => {
    const mockLogger = jest.spyOn(logger, 'info')
    const usecase = new DeleteCardUseCase(fakeRepository)
    const received = await usecase.execute('1')

    expect(received).toBe(true)
    expect(mockLogger).toHaveBeenCalled()
  })

  it('should be throw a exception when card not found', async () => {
    const usecase = new DeleteCardUseCase(fakeRepository)
    await expect(usecase.execute('2')).rejects.toEqual(new ErrorNotFound())
  })
})
