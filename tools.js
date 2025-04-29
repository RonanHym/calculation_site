// tools.js : util tools for the application

/** générer un entier aléatoire entre borne_min et born_max */
function randint(borne_min, borne_max) {
    return Math.floor(Math.random() * (borne_max - borne_min + 1)) + borne_min;
}