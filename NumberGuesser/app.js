 let min = 1 , 
     max = 10 , 
     winningNum = 2,
     guessesLeft = 3;


     const game = document.getElementById('game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessBtn = document.querySelector('#guess-btn'),
     guessInput = document.querySelector('#guess-input'),
     message = document.querySelector('.message') ;

    minNum.textContent = min;
    maxNum.textContent = max;

    guessBtn.addEventListener('click',function play(){
          
        let guess = parseInt(guessInput.value);

         if( isNaN(guess) || guess<min || guess>max){
         
             setMessage(`Please enter a number between ${min} and ${max}`,'red');
         }

         if(guess===winningNum){
             guessInput.disabled = true;
             guessInput.style.borderColor = 'green';
             setMessage(`${winningNum} is correct! YOU WIN` , 'green');
             
         }

         else{
             guessesLeft -=1;
             if(guessesLeft === 0){
                guessInput.disabled = true;
                guessInput.style.borderColor = 'red';
                setMessage(`Game over, correct answer was ${winningNum} ` , 'red');
                
             }

             else{
                 setMessage(`Incorrect! ${guessesLeft} guesses left `,'red');
                 guessInput.style.borderColor = 'red';
                 guessInput.value = '';
             }

             
         }

    })



    function setMessage(msg,color){
        message.textContent = msg;
        message.style.color = color;
        setTimeout(setMessage,3000);
    }

    
