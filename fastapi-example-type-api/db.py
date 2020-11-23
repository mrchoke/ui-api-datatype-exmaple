import databases
import sqlalchemy

#DATABASE_URL = "mysql://user:passwd@sever/db?charset=utf8mb4"
DATABASE_URL = "sqlite:///./todos.db"

database = databases.Database(DATABASE_URL)

metadata = sqlalchemy.MetaData()

notes = sqlalchemy.Table(
    "notes",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("text", sqlalchemy.String(255)),
    sqlalchemy.Column("completed", sqlalchemy.Boolean),
)


engine = sqlalchemy.create_engine(
    DATABASE_URL,connect_args={"check_same_thread": False}
)
metadata.create_all(engine)
