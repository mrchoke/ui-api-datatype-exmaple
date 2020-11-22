
from pydantic import BaseModel


class NoteIn(BaseModel):
    """ Insert """
    text: str
    completed: bool

class NoteUp(BaseModel):
    """ Update """
    id: int
    completed: bool

class NoteDl(BaseModel):
    """ Delete """
    id: int

class Note(NoteIn):
    """ Get """
    id: int
