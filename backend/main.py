from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import User
from backend.db import users_collection

app = FastAPI()

# Allow Angular frontend to access this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Angular default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/users")
def add_user(user: User):
    users_collection.insert_one(user.dict())
    return {"message": "User added"}

@app.get("/api/users")
def get_users():
    users = list(users_collection.find({}, {"_id": 0}))
    return users
