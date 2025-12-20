from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

def check_win(player, computer):
    if player == computer:
        return "It's a Tie !!"
    elif player == "rock":
        if computer == "scissor":
            return "You win !!"
        else:
            return "You lose."
    elif player == "paper":
        if computer == "rock":
            return "You win !!"
        else:
            return "You lose."
    elif player == "scissor":
        if computer == "paper":
            return "You win !!"
        else:
            return "You lose."
    else:
        return "Invalid choice"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/play', methods=['POST'])
def play():
    data = request.get_json()
    
    if not data or 'choice' not in data:
        return jsonify({'error': 'Invalid request. Please provide a choice.'}), 400
    
    player_choice = data.get('choice', '').lower()
    
    valid_options = ["rock", "paper", "scissor"]
    if player_choice not in valid_options:
        return jsonify({'error': 'Invalid choice. Choose rock, paper, or scissor.'}), 400
    
    computer_choice = random.choice(valid_options)
    result = check_win(player_choice, computer_choice)
    
    return jsonify({
        'player': player_choice,
        'computer': computer_choice,
        'result': result
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
