function eightBall() {
    let results = ["In my understanding, yes.", "No.", "Ask again later, I'm occupied.", "Most likely!", "Very doubtful on that.", "I guess so..", "Absolutely not!", "For Sure!", "Very Certain", "I have, no idea."];
    let result = Math.floor(Math.random() * results.length);
    return `${results[result]}`;
}

module.exports = eightBall;