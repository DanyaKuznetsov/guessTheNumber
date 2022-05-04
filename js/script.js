let input = document.querySelector('input');
let secretNumber = getRandomNumber();  
let interpreterSpan = document.querySelector('#interpreter');
let trySpan = document.querySelector('#try');
let tryNumber = 3;
let newGameButton = document.querySelector('#newGame')
trySpan.innerHTML = tryNumber;
newGameButton.onclick = function (){
        tryNumber = 3; 
        trySpan.innerHTML = tryNumber;
        checkButton.disabled = false;
        interpreterSpan.innerHTML = '';
        secretNumber = getRandomNumber();
}
function getRandomNumber(){
    return Math.floor(Math.random() * (15 - 5 + 1) + 5); 
}
console.log(secretNumber) 
let checkButton = document.querySelector('#check');
checkButton.onclick = function (){
    let userNumber = input.value;
    if (secretNumber == userNumber){
        interpreterSpan.innerHTML = "Ты угадал!";
    }
    else{
        if (secretNumber > userNumber){
            interpreterSpan.innerHTML = 'Нужно больше!';
        }
        if (secretNumber < userNumber){
            interpreterSpan.innerHTML = 'Нужно меньше!';
        }
        tryNumber = tryNumber - 1;
        trySpan.innerHTML = tryNumber;
        input.value = '';
        if (tryNumber == 0){
            checkButton.disabled = true;
            trySpan.innerHTML = 'Ты истратил все попытки, попробуй заново!';
            interpreterSpan.innerHTML = "Компьютер загадал " + secretNumber;
        }
    }    
}