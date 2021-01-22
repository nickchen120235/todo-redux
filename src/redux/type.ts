export interface TodoState {
  ID: number[]
  todo: {
    [id: number]: {
      content?: string,
      completed: boolean
    }
  }
}