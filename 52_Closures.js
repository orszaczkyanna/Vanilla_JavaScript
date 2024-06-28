// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular

function outer() {

    const message = "Hello!"

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// ------------------------------------------------------

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    // return { increment: increment }
    // return an object
    // property: increment
    // associated value: reference to increment

    // shorthand version: return { increment }

    return { increment, getCount }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

// console.log(counter.count); //!! undefined

console.log(`The current count is ${counter.getCount()}`);

// ------------------------------------------------------

function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decraseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decraseScore, getScore }
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decraseScore(3);

console.log(`The final score is ${game.getScore()}pts`);