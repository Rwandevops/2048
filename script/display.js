function setValue(x, y, n){
    $(`#${x}${y}`).attr('value', n);
    displayCell(x, y, n);
}

function getValue(x, y){
    return $(`#${x}${y}`).attr('value');
}

function displayScore(){
    $("#score").html(`Score : ${$("#tab").attr('value')}`);
} // fin fonction displayscore

function displayCell(x, y, nb){
    $(`#${x}${y}`).html(`<img src="image/${nb}.png">`);
}
