(function($){ // début du pluggin
    $.fn.game2048 = function(){ // function game2048 du pluggin
        // chargement des fonctions
        $("head").append("<script src='script/matrix_reloaded.js'> </script>");
        $("head").append("<script src='script/avengers_endgame.js'> </script>");
        $("head").append("<script src='script/move_your_body.js'> </script>");
        $("head").append("<script src='script/display.js'> </script>");

        // Choix de la taille de grille de jeu
        $(this).append('<header class="header" value ="true"></header>');
        $("header").append('<button id="4x4">4x4</button>');
        $("header").append('<button id="6x6">6x6</button>');
    
        // Génération de la table
        var size = 4;
        generateMap(size);

        // $("#4x4").on("click", function(){
        //     generateMap(4);
        // });

        // var size = $("#6x6").click() = function(){
        //     generateMap(6);}

        generateCell(size);
        generateCell(size);

        // détection d'une action sur les flèches
        document.addEventListener("keydown", function(event) {
            move(event.which, size);
        }); // fin de game2048
    } // fin du pluggin
}
)(jQuery); // fin du pluggin