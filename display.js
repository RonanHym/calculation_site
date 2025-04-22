
let display_correction_time = 1500; // in ms.

/** Afficher le text d'une question d'un quizz.
 * Consiste à mettre à jour le texte d'un élément html avec le texte de la question courant.
 */
function display_question() {
    document.getElementById("question").textContent = quizz.questions[quizz.actual_question_index].get_text();
}

function display_score() {
    document.getElementById("score_value").textContent = quizz.get_score();
}

function display_question_number() {
    temp = "question n°" + quizz.get_actual_question_nb() + "/" + quizz.get_nb_questions();
    document.getElementById("question_number_value").textContent = quizz.get_actual_question_nb();
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
    let commentary_text = correct_answer ? "bonne réponse !" : "tu dois faire mieuuuux..."
    
    document.getElementById("answer_input").classList.add(style_class_to_add);
    display_score();
    document.getElementById("correction_container").style.display = "block";
    document.getElementById("correction_text").textContent = commentary_text;

    numpad.lock();

    // attendre le temps choisi pour la correction
    await sleep(display_correction_time);
    
    // on met à jour après le temps "temps de correction"
    document.getElementById("answer_input").classList.remove(style_class_to_add);
    document.getElementById("correction_container").style.display = "none";
    display_question_number();
    display_question();
    numpad.unlock();
    maj_entry();
}

