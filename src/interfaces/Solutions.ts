import type { User } from './user'

export interface Solution {
  id: number | string
  title: string
  content: string
  user: User
}
