const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cards = [];
let flippedCards = [];
let matchedCards = 0;
const gameBoard = document.getElementById('gameBoard');
const message = document.getElementById('message');

// Shuffle function to randomize the card array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create and display cards on the board
function createBoard() {
    shuffle(cardValues);
    gameBoard.innerHTML = '';
    matchedCards = 0;
    flippedCards = [];
    message.textContent = '';

    cardValues.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-value', value);
        card.setAttribute('data-index', index);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

// Flip the card when clicked
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

// Check if two flipped cards match
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

// Initialize the game
createBoard();
