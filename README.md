Rock Paper Scissors - Web Application

A fun Rock Paper Scissors game with a web-based frontend and Flask backend.

Project Structure
Python/
├── app.py              # Flask backend server
├── RPS_game.py         # Original CLI version
├── requirements.txt    # Python dependencies
├── templates/
│   └── index.html      # Frontend HTML
└── static/
    ├── style.css       # Styling
    └── script.js       # JavaScript logic

How to Run
Step 1: Install Dependencies

Open your terminal in this folder and run:

pip install -r requirements.txt

Step 2: Start the Server

Run the Flask application:

python app.py

Step 3: Open in Browser

Once the server starts, open your browser and go to:

http://127.0.0.1:5000

How to Play

Click on Rock, Paper, or Scissors

The computer will make its choice

See who wins

Your scores are tracked automatically

Click "Reset Game" to start over

Technology Stack

Backend: Flask (Python)

Frontend: HTML, CSS, JavaScript

API: RESTful JSON API

Features

Clean and modern UI

Live score tracking

Animated button interactions

Responsive design

Real-time game updates

Troubleshooting

If you get "connection failed", make sure the Flask server is running

Check that you're accessing http://127.0.0.1:5000
 (not localhost:5000 if that doesn't work)

Make sure port 5000 is not being used by another application

Enjoy the game!
