function generateMap(size){
// Génération de la table
    $(".Games").append('<table id="tab" value="0"></table>');

// Génération automatique des lignes
    for(x = 0; x < size; x++){
        $("#tab").append(`<tr id='${x}'></tr>`);
        for(y = 0; y < size; y++){
            $(`#${x}`).append(`<td class="td" id="${x}${y}">0</td>`);
        }
    }

// Affichage du score
    $("header").append('<div id="score"></div>');
    displayScore();
    } // fin de la fonction generateMap
    
function generateCell(size){
        i = false;
        while(!i){
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);
        
        // test si la case est vide
            test = $(`#${x}${y}`);
    
            if(test.html() === '0'){
                tirage = Math.random();
                if(tirage < 0.9){
                    test.html('2');
                }
                else{
                    test.html('4');
                }
                i = true;
            }
        }
    } // fin de la fonction generateCell