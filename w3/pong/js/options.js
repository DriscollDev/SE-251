/*--------
    Make the Options Button     
    . on click
    . show or hide the `.sides` div
---------*/

var optionButton = document.querySelector(`#options`).querySelector(`h2`);
optionButton.addEventListener(`click`, function(){
    document.querySelector(`.sides`).classList.toggle(`hidden`);
});


/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/



/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/



var powerInputs = document.querySelectorAll(`.pow`);
for(let i=0; i<powerInputs.length; i++)
{
    powerInputs[i].value = player[i].power;
    powerInputs[i].nextSibling.innerText = player[i].power;
    powerInputs[i].addEventListener(`input`, function(){
        player[i].power = this.value;
        powerInputs[i].nextSibling.innerText = player[i].power;
    });
    powerInputs[i].addEventListener(`focus`, function(){
        currentState = `pause`;
    });
}


var colorInputs = document.querySelectorAll(`.colors`);
for(let i=0; i<colorInputs.length; i++){
    if(colorInputs[i].classList.contains(`fill`)){
        let playNum = parseInt(colorInputs[i].parentElement.classList[1]);
        colorInputs[i].value = player[playNum].fill;
        colorInputs[i].nextSibling.style.backgroundColor = colorInputs[i].value;
        colorInputs[i].addEventListener(`input`, function(){
            let playNum = parseInt(colorInputs[i].parentElement.classList[1]);
            player[playNum].fill = this.value;
            player[playNum].pad.fill = this.value;
            colorInputs[i].nextSibling.style.backgroundColor = this.value;
        });
    }
    else{
        let playNum = parseInt(colorInputs[i].parentElement.classList[1]);
        colorInputs[i].value = player[playNum].stroke;
        colorInputs[i].nextSibling.style.backgroundColor = colorInputs[i].value;
        colorInputs[i].addEventListener(`input`, function(){
            let playNum = parseInt(colorInputs[i].parentElement.classList[1]);
            player[playNum].stroke = this.value;
            player[playNum].pad.stroke = this.value;
            colorInputs[i].nextSibling.style.backgroundColor = this.value;
        });
    }
}

var keyInputs = document.querySelectorAll(`.keys`);
for(let i=0; i<keyInputs.length; i++){
    let playNum = parseInt(keyInputs[i].parentElement.classList[1]);
    keyInputs[i].value = player[playNum].keys[keyInputs[i].classList[0]];
    keyInputs[i].nextSibling.innerText = player[playNum].keys[keyInputs[i].classList[0]];
    keyInputs[i].addEventListener(`keydown`, function(event){
        let playNum = parseInt(keyInputs[i].parentElement.classList[1]);
        player[playNum].keys[keyInputs[i].classList[0]] = event.key;
        keyInputs[i].value = player[playNum].keys[keyInputs[i].classList[0]];
        keyInputs[i].nextSibling.innerText = player[playNum].keys[keyInputs[i].classList[0]];
    });
    keyInputs[i].addEventListener(`focus`, function(){
        currentState = `pause`;
    });
}


