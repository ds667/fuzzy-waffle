# fuzzy-waffle
Memory Card Game
This is a simple yet visually appealing Memory Card Game built using HTML, CSS, and JavaScript. The game involves flipping over cards and matching pairs. The goal is to match all the pairs as quickly as possible. It's a fun and engaging game that tests your memory!

Features
Card Matching: Flip two cards at a time and match the pairs.
Responsive Design: Optimized for both desktop and mobile devices.
Smooth Animations: Cards flip with a smooth transition effect.
Game Status: Displays a win message when all pairs are matched.
Colorful UI: Modern and engaging design using CSS.
How to Play
Start the Game: The game starts with a shuffled set of cards hidden face down.
Flip Cards: Click on any card to flip it and reveal its value. A maximum of two cards can be flipped at once.
Match Cards: If the values on the two flipped cards are the same, they will stay face up. If they do not match, they will flip back over.
Win Condition: The game ends when all pairs are matched, and a message will appear stating that you’ve won.
Project Structure
The project consists of three main files:

index.html: The main HTML structure for the game.
styles.css: The CSS file for styling the game layout, cards, and animations.
script.js: The JavaScript file that contains the game logic, such as card flipping, shuffling, matching, and checking the win condition.
File Breakdown
HTML (index.html):

Contains the game title, the main game board container, and a placeholder for the win message.
It also links to the CSS for styling and the JavaScript file for functionality.
CSS (styles.css):

Defines the visual appearance of the game.
Includes styles for the game container, cards, and transitions.
Ensures the game is responsive and looks good on different screen sizes.
JavaScript (script.js):

Manages the core logic of the game.
Handles card shuffling, flipping, and checking for matches.
Updates the game status and displays the win message when all pairs are matched.
How to Use
Download/Clone the repository:
To get started, you can clone this repository or download the project files.

bash
Copy code
git clone https://github.com/yourusername/memory-card-game.git
Open the game in your browser:
After downloading the files, open the index.html file in any modern web browser (Chrome, Firefox, etc.).

Play the game:
Start flipping the cards and try to match all pairs. Once all pairs are matched, a message will appear congratulating you for completing the game.

Technologies Used
HTML: Used for the basic structure and content of the game.
CSS: Used for styling the game and making it responsive.
JavaScript: Used to add functionality, such as card flipping, shuffling, and checking matches.
Code Explanation
1. Shuffling the Cards
The shuffle function randomizes the order of the cards before they are placed on the game board. It uses the Fisher-Yates algorithm, which is an efficient and reliable way to shuffle an array.

javascript
Copy code
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
2. Card Flipping Logic
When a player clicks on a card, it is flipped and its value is revealed. If two cards are flipped, the game checks if they match. If they do, they remain face up; if not, they are flipped back over.

javascript
Copy code
function flipCard() {
    const card = this;

    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        card.textContent = card.getAttribute('data-value');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 600);
        }
    }
}
3. Checking for a Match
After two cards are flipped, the checkMatch function checks whether the values of the two flipped cards are the same. If they are, they are marked as "matched" and remain face up. If they don't match, they are flipped back.

javascript
Copy code
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.getAttribute('data-value') === card2.getAttribute('data-value')) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards += 2;

        if (matchedCards === cardValues.length) {
            message.textContent = 'You won! Refresh to play again.';
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
    }

    flippedCards = [];
}
4. Game Over (Win Condition)
The game tracks the number of matched pairs. Once all pairs are matched, the message You won! Refresh to play again. is displayed.

Customization
Feel free to customize this game by:

Changing the number of cards (e.g., making the game easier or harder).
Updating the CSS styles to suit your preferences (colors, fonts, etc.).
Adding more features like a timer or a score tracker.
License
This project is open-source and free to use. Feel free to fork and modify the project as needed
