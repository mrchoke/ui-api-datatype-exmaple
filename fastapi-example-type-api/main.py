from fastapi import FastAPI
from typing import List, Optional
from db import database, notes
from models import Note, NoteIn, NoteDl, NoteUp

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.post("/notes/", response_model=Note)
async def create_note(note: NoteIn):
    '''Create Note'''
    query = notes.insert().values(text=note.text, completed=note.completed)
    last_record_id = await database.execute(query)
    return {**note.dict(), "id": last_record_id}

@app.put("/notes/")
async def update_note(note: NoteUp):
    '''Update Note'''
    query = notes.update().values(completed=note.completed).where(notes.c.id == note.id)
    id = await database.execute(query)
    return id

@app.delete("/notes/")
async def delete_note(note: NoteDl):
    '''Delete Note'''
    print(note,flush=True)
    query = notes.delete().where(notes.c.id == note.id)
    id = await database.execute(query)
    return id

@app.get("/notes/", response_model=List[Note])
async def read_notes(showCompleted: Optional[bool] = False):
    '''Get Note'''
    query = notes.select()
    if not showCompleted:
        query = query.where(notes.c.completed == False)
    return await database.fetch_all(query)