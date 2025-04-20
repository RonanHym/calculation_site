

var numpad = new Numpad();

numpad_buttons = document.getElementById("numpad").children;
for (let i = 0 ; i < document.getElementById("numpad").children["length"]-1 ; i++) {
    // -1 car le dernier (bouton entrer)  ne doit pas mettre à jour l'affichage.
    numpad_buttons[i].addEventListener("click", maj_entry);

    /*
    // gérer les clics tactiles
    numpad_buttons[i].addEventListener("touchstart", (event) => {
        numpad_buttons[i].classList.add("touching");
    });
    numpad_buttons[i].addEventListener("touchend", (event) => {
        numpad_buttons[i].classList.remove("touching");
        maj_entry();
    });
    */
}


/** générer un entier aléatoire entre borne_min et born_max */
function randint(borne_min, borne_max) {
    return Math.floor(Math.random() * (borne_max - borne_min + 1)) + borne_min;
}

/** générer un 3-uplet aléatoire [n1, n2, result] tel que n1 * n2 = result */
function create_random_multiplication(borne_min1, borne_max1, borne_min2, borne_max2) {
    var n1 = randint(borne_min1, borne_max1);
    var n2 = randint(borne_min2, borne_max2);
    var result = n1 * n2;
    return [n1, n2, result];
}

function generator_multiplication_table_question() {
    [n1, n2, result] = create_random_multiplication(1, 10, 1, 10);
    return [n1.toString() + " × " + n2.toString(), result];
}


/* valider la réponse (appelé par onclick du bouton ainsi que la touche Entrer) */
function enter() {
    quizz.correct(numpad.get_entry());
    numpad.reset();
}


// // valider la réponse lorsque l'on appuie sur la touche Entrée
// document.addEventListener("keydown", (event) => {
//     if (event.key == "Enter") {
//         enter();
//     }
// })



var quizz = new Quizz()
nb_questions = 10;

// créer les nb_questions questions du quizz
for (let i = 0 ; i < nb_questions ; i++) {
    [text, answer] = generator_multiplication_table_question();
    quizz.add_question(text, answer);
}

display_question();






