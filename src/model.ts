export interface Todo{
  id: number
  todo: string
  isDone: boolean
}

export type Filter = 'all' | 'active' | 'completed';