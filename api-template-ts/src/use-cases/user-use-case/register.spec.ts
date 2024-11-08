import { expect, it, describe } from 'vitest'

import { UserRepositoryAdapter } from '@/infrastructure/adapters/user-repository-adapter'

import { CreateUserUseCase } from './register'

describe('Register Use Case', () => {
  it('should register user', async () => {
    const userRepository = new UserRepositoryAdapter()
    const registerUseCase = new CreateUserUseCase(userRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
