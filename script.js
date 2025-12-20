let playerScore = 0;
let computerScore = 0;

async function play(choice) {
    try {
        // Disable buttons during request
        disableButtons(true);
        
        // Send request to backend
        const response = await fetch('/play', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ choice: choice })
        });
        
        const data = await response.json();
        
        // Update display
        updateDisplay(data);
        
        // Update scores
        updateScores(data.result);
        
        // Re-enable buttons
        disableButtons(false);
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to server. Make sure the backend is running!');
        disableButtons(false);
    }
}

function updateDisplay(data) {
    // Update choices
    document.getElementById('player-choice-text').textContent = data.player;
    document.getElementById('computer-choice-text').textContent = data.computer;
    
    // Update result area
    const resultArea = document.getElementById('result-area');
    resultArea.innerHTML = `<h2>${data.result}</h2>`;
    
    // Add appropriate styling based on result
    resultArea.classList.remove('win', 'lose', 'tie');
    if (data.result.includes('win')) {
        resultArea.classList.add('win');
    } else if (data.result.includes('lose')) {
        resultArea.classList.add('lose');
    } else if (data.result.includes('Tie')) {
        resultArea.classList.add('tie');
    }
}

function updateScores(result) {
    if (result.includes('win')) {
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if (result.includes('lose')) {
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    }
}

function disableButtons(disabled) {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.disabled = disabled;
        if (disabled) {
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
        } else {
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = '0';
    document.getElementById('computer-score').textContent = '0';
    document.getElementById('player-choice-text').textContent = '-';
    document.getElementById('computer-choice-text').textContent = '-';
    
    const resultArea = document.getElementById('result-area');
    resultArea.innerHTML = '<h2>Make your choice!</h2>';
    resultArea.classList.remove('win', 'lose', 'tie');
}

// Add button click animation
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
});
