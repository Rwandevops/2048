function displayScore(){
    $("#score").html(`Score : ${$("#tab").attr('value')}`);
} // fin fonction displayscore

function scoreUpdate(value){
    scoreActuel = parseInt($("#tab").attr('value'));
    score = value + scoreActuel;
    $("#tab").attr('value', score);
    displayScore();
} // fin fonction scoreupdate

function win(size){
    if($("header").attr("value")){
        for(x = 0; x < size; x++){
            for(y = 0; y < size; y++){
                // if($(`#${x}${y}`).html() === '2048'){
                //     confirm('You win!');
                //     $("header").attr("value", "false");
                // }
            }
        }
    }
} // fin fonction win

function loose(size){
    let loose = true;
    // test si toutes les cases sont remplies
    for(x = 0; x < size; x++){
        for(y = 0; y < size; y++){
            if($(`#${x}${y}`).html() === '0'){
                loose = false;
            }
        }
    }
    // sinon on regarde les valeurs des cases à droite
    for(x = 0; x < size; x++){
        for(y = 0; y < size - 1; y++){
            if($(`#${x}${y}`).html() === $(`#${x}${y + 1}`).html()){
                loose = false;
            }
        }
    }
    // sinon on regarde les valeurs des cases en dessous
    for(x = 0; x < size - 1; x++){
        for(y = 0; y < size; y++){
            if($(`#${x}${y}`).html() === $(`#${x + 1}${y}`).html()){
                loose =  false;
            }
        }
    }
    // si toutes les cases sont non nulles et que leurs voisines ont des valeurs différentes, on doit avoir loose = true
    if(loose){
        alert('You lose!')
    }
} // fin fonction loose