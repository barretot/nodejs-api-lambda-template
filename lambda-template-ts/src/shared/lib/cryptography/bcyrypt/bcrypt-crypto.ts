import bcrypt from 'bcrypt'

import { CryptographyAdapter } from '@/user/core/adapters/cryptography/cryptography-adapter'

import { Config } from '../../env/get-env'

export class BcryptHasher implements CryptographyAdapter {
  constructor(private config: Config) {}

  async hash(password: string): Promise<string> {
    const saltRounds = Number(this.config.get('BCRYPT_SALT_ROUNDS')) || 10

    const passwordHash = await bcrypt.hash(password, saltRounds)

    return passwordHash
  }

  async compare(dbPassword: string, loginPassword: string): Promise<boolean> {
    return bcrypt.compare(loginPassword, dbPassword)
  }
}
