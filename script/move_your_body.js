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
            if(getValue(x, y) === '0'){
                i = x + 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(i, y) === '0' && i < size){
                    i++;
                }
                // si on a trouvé une case non nulle, on échange les valeurs
                if(i < size){
                    nb = getValue(i, y);
                    setValue(x, y, nb);
                    setValue(i, y, 0);
                    generate = true;
                }
            }
            // si la case n'est pas nulle, switch(valeur de la première case non nulle)
            if(getValue(x, y) !=='0'){
                i = x + 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(i, y) === '0' && i < size){
                    i++;
                }
                // si on a trouvé une case non nulle, on teste les valeurs
                if(i < size){
                    // si elles sont égales, on fusionne les cases 
                    if(getValue(x, y) === getValue(i, y)){
                        let double = 2 * getValue(x, y);
                        setValue(x, y, double);
                        setValue(i, y, 0);
                        scoreUpdate(double);
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
            if(getValue(x, y) === '0'){
                i = x - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(i, y) === '0' && i >= 0){
                    i--;
                }
                // si on a trouvé une case non nulle, on échange les valeurs
                if(i >= 0){
                    nb = getValue(i, y);
                    setValue(x, y, nb);
                    setValue(i, y, 0);
                    generate = true;
                }
            }
            // si la case est non nulle, switch(valeur de la première case non nulle)
            if(getValue(x, y) !== '0'){
                i = x - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(i, y) === '0' && i >= 0){
                    i--;
                }
                // si on a trouvé une case non nulle, on teste les valeurs
                if(i >= 0){
                    if(getValue(x, y) === getValue(i, y)){
                        let double = 2 * getValue(x, y);
                        setValue(x, y, double);
                        setValue(i, y, 0);
                        scoreUpdate(double);
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
            if(getValue(x, y) === '0'){
                j = y + 1;
                while(getValue(x, j) === '0' && j < size){
                    j++;
                }
                if(j < size){
                    nb = getValue(x, j);
                    setValue(x, y, nb);
                    setValue(x, j, 0);
                    generate = true;
                }
            }
            if(getValue(x, y) !== '0'){
                i = x + 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(i, y) === '0' && i >= 0){
                    i--;
                }
                // si on a trouvé une case non nulle, on teste les valeurs
                if(getValue(x, y) !== '0'){
                    j = y + 1;
                    // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                    while(getValue(x, j) === '0' && j < size){
                        j++;
                    }
                    // si on a trouvé une case non nulle, on teste les valeurs
                    if(j < size){
                        if(getValue(x, y) === getValue(x, j)){
                            let double = 2 * getValue(x, y);
                            setValue(x, y, double);
                            setValue(x, j, 0);
                            scoreUpdate(double);
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
            if(getValue(x, y) === '0'){
                j = y - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(x, j) === '0' && j >= 0){
                    j--;
                }
                // si on a trouvé une case non nulle, on échange les valeurs
                if(j >= 0){
                    nb = getValue(x, j);
                    setValue(x, y, nb);
                    setValue(x, j, 0);
                    generate = true;
                }
            }
            // si la case n'est pas nulle, on va chercher la première case non nulle de la ligne
            if(getValue(x, y) !== '0'){
                j = y - 1;
                // tant que les cases sont vides et qu'on n'est pas sorti de la grille
                while(getValue(x, j) === '0' && j >= 0){
                    j--;
                }
                // si on a trouvé une case non nulle, on fusionne si les valeurs sont égales
                if(j >= 0){
                    if(getValue(x, y) === getValue(x, j)){
                        let double = 2 * getValue(x, y);
                        setValue(x, y, double);
                        setValue(x, j, 0);
                        scoreUpdate(double);
                        generate = true;
                    }
                }
            }
        }
    }
    return generate;
} // fin fonction right