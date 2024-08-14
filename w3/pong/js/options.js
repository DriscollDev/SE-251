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

var fillInputs = document.querySelectorAll(`.fill`);
for(let i=0; i<fillInputs.length; i++)
{
    fillInputs[i].value = player[i].fill;
    fillInputs[i].nextSibling.style.backgroundColor = fillInputs[i].value;
    player[i].pad.fill = fillInputs[i].value;
    fillInputs[i].addEventListener(`input`, function(){
        player[i].pad.fill = this.value;
        fillInputs[i].nextSibling.style.backgroundColor = this.value;
    });
}


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/



var upInputs = document.querySelectorAll(`.u`);
for(let i=0; i<upInputs.length; i++)
{
    upInputs[i].value = player[i].keys.u;
    upInputs[i].nextSibling.innerText = player[i].keys.u;
    upInputs[i].addEventListener(`keydown`, function(event){
        player[i].keys.u = event.key;
        upInputs[i].value = player[i].keys.u;
        upInputs[i].nextSibling.innerText = player[i].keys.u;
    });
    upInputs[i].addEventListener(`focus`, function(){
        currentState = `pause`;
    });
}
