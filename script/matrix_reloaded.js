function generateMap(size){
// Génération de la table
    $(".Games").append('<table id="tab" value="0"></table>');

// Génération automatique des lignes
    for(x = 0; x < size; x++){
        $("#tab").append(`<tr id='${x}'></tr>`);
        for(y = 0; y < size; y++){
            $(`#${x}`).append(`<td class="td" id="${x}${y}" value="0"><img src="image/0.png"></td>`);
        }
    }

// Affichage du score
    $("header").append('<div class="score" id="score"></div>');
    displayScore();
    } // fin de la fonction generateMap
    
function generateCell(size){
        i = false;
        while(!i){
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);
        
        // test si la case est vide
            test = $(`#${x}${y}`);
    
            if(test.attr('value') === '0'){
                tirage = Math.random();
                if(tirage < 0.9){
                    test.attr('value', '2');
                    test.html(`<img src="image/2.png">`);

                }
                else{
                    test.attr('value', '4');
                    test.html(`<img src="image/4.png">`);
                }
                i = true;
            }
        }
    } // fin de la fonction generateCell