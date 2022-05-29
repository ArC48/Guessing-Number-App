'use strict';

//generating random guessing number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//the number of tries to guess the number in
let score = 5;

let highscore = 0;

let messageDisplay = function(message) {
    document.querySelector('.message')
        .textContent = message;
};

let numberDisplay = function(message) {
    document.querySelector('.number')
        .textContent = message;
}

let scoreDisplay = function(message) {
    document.querySelector('.score') 
            .textContent = message;
}

let stylesFunction = function(width, backgroundColor) {
    document.querySelector('.number')
    .style.width = width;
    document.querySelector('body')
    .style.backgroundColor = backgroundColor;

}

//handling the [Check!] button click
document.querySelector('.check')
.addEventListener('click', function(){
    const guessNum = Number(document.querySelector('.guess')
    .value);    

    // no input
    if(!guessNum) {

        messageDisplay("💤 No Number!");

    //player wins!
    }else if(guessNum === secretNumber) {
        
        messageDisplay('🎉🍾CONGRATS🍾🎉');

        //displaying the guessed number
        numberDisplay(secretNumber);

        //styles
        stylesFunction('30rem', '#60b347');
        
        if(score * 10 > highscore) {
            highscore = score * 10;
            document.querySelector('.highscore')
            .textContent = highscore;
        }

        // when guess is wrong
    }else if(guessNum !== secretNumber) {
        // input number is higher!
        if(score > 1) {
            //check if a player hasn't yet lost

            messageDisplay(guessNum >  secretNumber? 
            '🔺 too high!' : 
            '🔻 too low!');
            
            score--;
            
            scoreDisplay(score);

            document.querySelector('body').style
            .backgroundColor = '#222';

        }else {
            messageDisplay(`⛔ You've Lost the Game!`);

            numberDisplay(secretNumber);

            stylesFunction('30rem', '#d55260');

            scoreDisplay(score - 1);
        };
    };
});


document.querySelector('.again').addEventListener
('click', function(){

    //getting different secret number & restoring scores
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 5;
    
    scoreDisplay(score);

    numberDisplay('?');

    document.querySelector('.guess')
    .value = '';
    messageDisplay('Start guessing...');

    //restoring styles 
    stylesFunction('15rem', '#222');
});