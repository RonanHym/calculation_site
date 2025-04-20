
/** Afficher le text d'une question d'un quizz.
 * Consiste à mettre à jour le texte d'un élément html avec le texte de la question courant.
 */
function display_question() {
    document.getElementById("question").textContent = quizz.questions[quizz.actual_question_index].get_text();
}

function display_score() {
    document.getElementById("score").textContent = "score : " + quizz.get_score();
}

function display_question_number() {
    temp = "question n°" + quizz.get_actual_question_nb() + "/" + quizz.get_nb_questions();
    document.getElementById("question_number").textContent = temp;
}

function display_end_quizz() {
    // nothing for the moment
}

function maj_entry() {
    if (!numpad.locked) {
        // console.log("entrée mise à jour.");
        document.getElementById("answer_input").textContent = numpad.get_entry();
    }
}

async function display_correction(correct_answer) {
    // on ajoute "correct_answer" comme classe css à l'objet ou "wrong_answer" si correct_answer est faux
    let style_class_to_add = correct_answer ? "correct_answer" : "wrong_answer";
    document.getElementById("answer_input").classList.add(style_class_to_add);
    display_score();
    numpad.lock();
    await sleep(2000); // Attend 2 secondes
    document.getElementById("answer_input").classList.remove(style_class_to_add);
    display_question_number();
    display_question();
    numpad.unlock();
    maj_entry();
}

