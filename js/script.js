// first input query selectors
let box = document.querySelector('.box');
let firstinput = document.querySelector('.firstinput');
let firstinputbtn = document.querySelector('.firstinputbtn');
let error = document.querySelector('.error');
let heading = document.querySelector('.heading');
// player one query selectors
let box1 = document.querySelector('.box-1');
let playoneinput = document.querySelector('.playoneinput');
let playoneinputbtn = document.querySelector('.playoneinputbtn');
let playoneinputerror = document.querySelector('.playoneinputerror');
// player two query selectors
let box2 = document.querySelector('.box-2');
let playtwoinput = document.querySelector('.playtwoinput');
let playtwoinputbtn = document.querySelector('.playtwoinputbtn');
let playtwoinputerror = document.querySelector('.playtwoinputerror');
let count = 5;
let chance = document.querySelector('.chance');
let chances = document.querySelector('.chances')


// first input event listener
firstinputbtn.addEventListener( 'click', function(){
    if(firstinput.value == '') {
        error.innerHTML = 'required';
        error.style.display = 'block'
    } else {
        heading.innerHTML = 'player:-1'
        playoneinput.style.display = 'block'
        playoneinputbtn.style.display = 'block'
        box.style.display = 'none'
    }
})
// player one event listener
playoneinputbtn.addEventListener( 'click', function () {

    if (playoneinput.value < 1 || playoneinput.value > 10 ){
       playoneinputerror.innerHTML = "please enter a number between 1-10"
       playoneinputerror.style.display = 'block'
       
    } else{ 
        if (playoneinput.value - 15){ 
            heading.innerHTML = 'player:-2'
            playtwoinput.style.display = 'block'
            playtwoinputbtn.style.display = 'block'
            chance.innerHTML = 'chance: 5'
            box1.style.display = 'none'
           
        }else {
           playoneinputerror.innerHTML = "please type a number";
           playoneinputerror.style.display = 'block'
        }
    }

})

playtwoinputbtn.addEventListener('click', function() {
    
    if (playtwoinput.value < 1 || playtwoinput.value > 10 ){
        playtwoinputerror.innerHTML = "please enter a number between 1-10"
        playtwoinputerror.style.display = 'block'
        
    } else{ 
        if (playtwoinput.value == playoneinput.value){
            heading.innerHTML = "player:2 **win**"
            chance.style.display = 'none'
            box2.style.display = 'none'

        } else {
            count--
            chance.innerHTML = 'chance: ' + count ;
            if (count == 0){
                heading.innerHTML = 'Game over: player:1 **win**'
                box2.style.display = 'none'
            }
        }
    }

})
