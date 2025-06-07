from pymongo import MongoClient

# For local DB: "mongodb://localhost:27017"
client = MongoClient("mongodb://localhost:27017")
db = client["career_counselor_db"]
users_collection = db["users"]
