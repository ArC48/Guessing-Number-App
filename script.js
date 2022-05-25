'use strict';

//generating random guessing number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//the number of tries to guess the number in
let score = 5;

let highscore = 0;

//handling the [Check!] button click
document.querySelector('.check')
.addEventListener('click', function(){
    const guessNum = Number(document.querySelector('.guess')
    .value);    

    // no input
    if(!guessNum) {

        document.querySelector('.message')
        .textContent = "💤 No number!";

    //player wins!
    }else if(guessNum === secretNumber) {
        
        document.querySelector('.message')
        .textContent = '🎉🍾CONGRATS🍾🎉';

        //displaying the guessed number
        document.querySelector('.number')
        .textContent = secretNumber;

        //styles
        document.querySelector('.number')
        .style.width = '30rem';
        document.querySelector('body')
        .style.backgroundColor = '#60b347';
        
        if(score * 10 > highscore) {
            highscore = score * 10;
            document.querySelector('.highscore')
            .textContent = highscore;
        }

    // input number is higher!
    }else if(guessNum > secretNumber) {

        //check if a player hasn't yet lost
        if(score > 1) {

            document.querySelector('.message')
            .textContent = '🔺 too high!';
            
            score--;
            
            document.querySelector('.score')
            .textContent = score;

            document.querySelector('body').style
            .backgroundColor = '#222';
        } else {
            document.querySelector('.message')
            .textContent = `⛔ You've Lost the Game!`;

            document.querySelector('.number')
            .textContent = secretNumber;

            //styles
            document.querySelector('.number')
            .style.width = '30rem';
            document.querySelector('body')
            .style.backgroundColor = '#d55260';

            document.querySelector('.score')
            .textContent = score - 1;
        }

    // input number is lower!
    }else if(guessNum < secretNumber) {

        //check if a player hasn't yet lost
        if(score > 1) {

            document.querySelector('.message')
            .textContent = '🔻 too low!';
            
            score--;

            document.querySelector('.score')
            .textContent = score;

            document.querySelector('body')
            .style.backgroundColor = '#222';

        } else {
            document.querySelector('.message')
            .textContent = `⛔ You've Lost the Game!`;

            document.querySelector('.number')
            .textContent = secretNumber;

            //styles
            document.querySelector('.number')
            .style.width = '30rem';
            document.querySelector('body')
            .style.backgroundColor = '#d55260';

            document.querySelector('.score')
            .textContent = score - 1;
        }
    }
});


document.querySelector('.again').addEventListener
('click', function(){

    //getting different secret number & restoring scores
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 5;
    document.querySelector('.score')
    .textContent = score;

    document.querySelector('.number')
    .textContent = '?';

    document.querySelector('.guess')
    .value = '';
    document.querySelector('.message')
    .textContent = 'Start guessing...';

    //restoring styles 
    document.querySelector('.number')
    .style.width = '15rem';
    document.querySelector('body')
    .style.backgroundColor = '#222';
});