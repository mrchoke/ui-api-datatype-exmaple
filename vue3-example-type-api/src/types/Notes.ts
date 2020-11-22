export interface NoteIn {
  text: string
  completed: boolean
}

export interface NoteUp {
  id: number
  completed: boolean
}

export interface NoteDl {
  id: number
}

export interface Note extends NoteIn {
  id: number
}
