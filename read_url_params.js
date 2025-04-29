
var url = new URL(window.location.href);
var quizz_type = url.searchParams.get("quizz_type");

var quizz_params = url.searchParams.get("quizz_params");

if (!quizz_type) {
    quizz_type = "default";
}

if (!quizz_params) {
    quizz_type = "default";
}

/**
 * Fonction encodant les paramètres donnés dans l'URL.
 * 1) le nombre de questions sur deux caractères (valeur entre 00 et 99 avec pour la valeur 00 : infini)
 * 2) les opérations possibles (suite de caractères pouvant être +,-,/,*,%)
 * 3) le nombre d'opérandes (entre 2 et ... 4 ?)
 * 4) précision des nombres
 * 5) ensemble de nombre (entier, réels, fractions)
 */
function encode_params(nb_questions, possible_ops, nb_op, nb_precision, ) {
    params_str = ""
    params_str += toString(nb_questions);
    params_str += toString(nb_questions);
    params_str += toString(nb_op);
    params_str += toString(nb_op);

}

/**
 * Fonction décodant les paramètres donnés dans l'URL
 */
function decode_params() {

}




