# Rock Paper Scissors - Web Application A fun Rock Paper Scissors game with a web-based frontend and Flask backend! 
##  Project Structure
Python/
├── app.py              # Flask backend server
├── RPS_game.py         # Original CLI version
├── requirements.txt    # Python dependencies
├── templates/
│   └── index.html     # Frontend HTML
└── static/
    ├── style.css      # Styling
    └── script.js      # JavaScript logic
##  How to Run
### Step 1: Install Dependencies Open your terminal in this folder and run:
powershell
pip install -r requirements.txt
### Step 2: Start the Server Run the Flask application:
powershell
python app.py
### Step 3: Open in Browser Once the server starts, open your browser and go to:
http://127.0.0.1:5000
##  How to Play 
1. Click on Rock, Paper, or Scissors
2. 2. The computer will make its choice
3. See who wins!
4. Your scores are tracked automatically
5. Click "Reset Game" to start over

##  Technology Stack 
- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **API**: RESTful JSON API

##  Features -  Beautiful gradient UI 
- Live score tracking
- Animated button interactions
- Responsive design
- Real-time game updates
  
  ##  Troubleshooting
  - If you get "connection failed", make sure the Flask server is running
  - Check that you're accessing http://127.0.0.1:5000 (not localhost:5000 if that doesn't work) 
  - Make sure port 5000 is not being used by another application
    Enjoy the game! 
