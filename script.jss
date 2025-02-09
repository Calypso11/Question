     const loveQuotes = [
    "Every time I see you, I fall in love all over again.",
    "You're the missing piece to my puzzle.",
    "My heart skips a beat when I think of you.",
    "You make my heart smile.",
    "Life is better with you in it.",
    "You're my favorite notification.",
    "You're the best part of my day.",
    "I'm crazy about you.",
    "You're my perfect match.",
    "You had me at hello.",
    "You're my sunshine on a cloudy day.",
    "We go together like copy and paste.",
    "You're the CSS to my HTML.",
    "You complete my code.",
    "You're the semicolon to my JavaScript."
];

let noCount = 0;
const maxNos = 15;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const quoteContainer = document.getElementById('quoteContainer');

// Make the Yes button grow with each No
const initialYesFontSize = 1.2;
let currentYesSize = initialYesFontSize;

noBtn.addEventListener('click', () => {
    if (noCount < maxNos) {
        noCount++;
        // Increase Yes button size
        currentYesSize += 0.2;
        yesBtn.style.fontSize = `${currentYesSize}rem`;
        
        // Add a new love quote
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote-block';
        quoteDiv.textContent = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        quoteContainer.prepend(quoteDiv);
        
        // Random position for No button
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // If reached max nos, disable the button
        if (noCount === maxNos) {
            noBtn.disabled = true;
            noBtn.style.opacity = '0.5';
            noBtn.style.cursor = 'not-allowed';
        }
    }
});

yesBtn.addEventListener('click', () => {
    // Clear existing content
    document.querySelector('.container').innerHTML = `
        <h1>Yay! You said Yes! ❤️</h1>
        <div style="font-size: 5rem; margin: 2rem;">💑</div>
        <p style="font-size: 1.5rem; color: #ff4d4d;">Thank you for making me the happiest person!</p>
    `;
});
