from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

# Initialize FastAPI app
app = FastAPI()

# Allow CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL database connection
connection = mysql.connector.connect(
    host="localhost",
    user="root",  # Replace with your MySQL username
    password="your_password",  # Replace with your MySQL password
    database="capstone_db"
)

# Define a model for results
class Result(BaseModel):
    id: int
    result: str

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Simulate processing and store result in MySQL
    result = "Processed Result"  # Replace with actual processing logic
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO results (filename, result) VALUES (%s, %s)",
        (file.filename, result)
    )
    connection.commit()
    result_id = cursor.lastrowid
    cursor.close()
    return {"id": result_id, "filename": file.filename}

@app.get("/results/{id}")
async def get_results(id: int):
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM results WHERE id = %s", (id,))
    result = cursor.fetchone()
    cursor.close()
    if result:
        return result
    return {"error": "Result not found"}