import { Document } from 'mongoose'

import { Return } from './common'
import { Created } from './Created'

export type User = Document & {
  username: string
  email: string
  avatar?: string
  password?: string
  githubId?: string
  created?: Created
}

export type UserReturn = Return & {
  result?: User
  token?: string
}

export type UsersReturn = Return & {
  result?: User[]
}
