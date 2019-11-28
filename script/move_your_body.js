function move(direction, size){
    switch(direction){
    case 37:
        generate = left(size);
        break;
    case 38:
        generate = up(size);
        break;
    case 39:
        generate = right(size);
        break;
    case 40:
        generate = down(size);
        break;
    }
    // genere une case aléatoire si un mouvement a été réalisé
    if(generate){
        generateCell(size);
    }
    win(size);
    loose(size);
}

function up(size){
    let generate = false;
    for(y = 0; y < size; y++){
        for(x = 0; x < size - 1; x++){
            // si la case vaut 0, on va chercher la première case non nulle de la colonne
            if($(`#${x}${y}`).html() === '0'){
                i = x + 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${i}${y}`).html() === '0' && i < size){
                    i++;
                }
                // si on a trouvé une case non nulle, on échange les valeurs
                if(i < size){
                    $(`#${x}${y}`).html($(`#${i}${y}`).html());
                    $(`#${i}${y}`).html('0');
                    generate = true;
                }
            }
            // si la case n'est pas nulle, switch(valeur de la première case non nulle)
            if($(`#${x}${y}`).html() !=='0'){
                i = x + 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${i}${y}`).html() === '0' && i < size){
                    i++;
                }
                // si on a trouvé une case non nulle, on teste les valeurs
                if(i < size){
                    // si elles sont égales, on fusionne les cases 
                    if($(`#${x}${y}`).html() === $(`#${i}${y}`).html()){
                        let double = 2 * $(`#${x}${y}`).html();
                        $(`#${x}${y}`).html(double);
                        $(`#${i}${y}`).html('0');
                        // scoreUpdate(double);
                        generate = true;
                    }
                    // sinon on fait rien
                }
            }
        }
    }
    return generate;
} // fin fonction up

function down(size){
    let generate = false;
    for(y = 0; y < size; y++){
        for(x = size - 1; x >= 0; x--){
            // si la case vaut 0, on va chercher la première case non nulle de la colonne
            if($(`#${x}${y}`).html() === '0'){
                i = x - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${i}${y}`).html() === '0' && i >= 0){
                    i--;
                }
                // si on a trouvé une case non nulle, on échange les valeurs
                if(i >= 0){
                    $(`#${x}${y}`).html($(`#${i}${y}`).html());
                    $(`#${i}${y}`).html('0');
                    generate = true;
                }
            }
            // si la case est non nulle, switch(valeur de la première case non nulle)
            if($(`#${x}${y}`).html() !=='0'){
                i = x - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${i}${y}`).html() === '0' && i >= 0){
                    i--;
                }
                // si on a trouvé une case non nulle, on teste les valeurs
                if(i >= 0){
                    if($(`#${x}${y}`).html() === $(`#${i}${y}`).html()){
                        let double = 2 * $(`#${x}${y}`).html();
                        $(`#${x}${y}`).html(double);
                        $(`#${i}${y}`).html('0');
                        // scoreUpdate(double);
                        generate = true;
                    }
                }
            }
        } 
    }
    return generate;
} // fin fonction down

function left(size){
    let generate = false;
    for(x = 0; x < size; x++){
        for(y = 0; y < size - 1; y++){
            // si la case vaut 0, on va chercher la première case non nulle de la ligne
            if($(`#${x}${y}`).html() === '0'){
                j = y + 1;
                while($(`#${x}${j}`).html() === '0' && j < size){
                    j++;
                }
                if(j < size){
                    $(`#${x}${y}`).html($(`#${x}${j}`).html());
                    $(`#${x}${j}`).html('0');
                    generate = true;
                }
            }
            if($(`#${x}${y}`).html() !== '0'){
                i = x + 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${i}${y}`).html() === '0' && i >= 0){
                    i--;
                }
                // si on a trouvé une case non nulle, on teste les valeurs
                if($(`#${x}${y}`).html() !== '0'){
                    j = y + 1;
                    // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                    while($(`#${x}${j}`).html() === '0' && j < size){
                        j++;
                    }
                    // si on a trouvé une case non nulle, on teste les valeurs
                    if(j < size){
                        if($(`#${x}${y}`).html() === $(`#${x}${j}`).html()){
                            let double = 2 * $(`#${x}${y}`).html();
                            $(`#${x}${y}`).html(double);
                            $(`#${x}${j}`).html('0');
                            // scoreUpdate(double);
                            generate = true;
                        }
                    }
                }
            }
        }
    }
    return generate;
} // fin fonction left

function right(size){
    let generate = false;
    for(x = 0; x < size; x++){
        for(y = size - 1; y >= 0; y--){
            // si la case vaut 0, on va chercher la première case non nulle de la ligne
            if($(`#${x}${y}`).html() === '0'){
                j = y - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${x}${j}`).html() === '0' && j >= 0){
                    j--;
                }
                // si on a trouvé une case non nulle, on échange les valeurs
                if(j >= 0){
                    $(`#${x}${y}`).html($(`#${x}${j}`).html());
                    $(`#${x}${j}`).html('0');
                    generate = true;
                }
            }
            // si la case n'est pas nulle, on va chercher la première case non nulle de la ligne
            if($(`#${x}${y}`).html() !== '0'){
                j = y - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while($(`#${x}${j}`).html() === '0' && j >= 0){
                    j--;
                }
                // si on a trouvé une case non nulle, on fusionne si les valeurs sont égales
                if(j >= 0){
                    if($(`#${x}${y}`).html() === $(`#${x}${j}`).html()){
                        let double = 2 * $(`#${x}${y}`).html();
                        $(`#${x}${y}`).html(double);
                        $(`#${x}${j}`).html('0');
                        // scoreUpdate(double);
                        generate = true;
                    }
                }
            }
        }
    }
    return generate;
} // fin fonction right