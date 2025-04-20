
class Question {

    text;
    answer;

    constructor(text, answer) {
        // text : String représentantla question
        // answer : int ou string representant la réponse
        this.text = text;
        this.answer = answer;
    }

    get_answer() {
        return this.answer;
    }

    get_text() {
        return this.text;
    }
}

class Quizz {
    
    score;
    actual_question_index; // numéro de la question actuelle
    nb_questions; // nombre de questions
    questions = []; // tableau des questions

    constructor() {
        this.score = 0;
        this.actual_question_index = 0;
        this.nb_questions = 0;
    }

    
    /** Corriger la réponse de l'utilisateur.
     * Compare la réponse de l'utilisateur à la réponse attendue de la question courante.
     * @param {*} user_answer répoinse de l'utilisateur
     */
    correct(user_answer) {
        if (user_answer == this.questions[this.actual_question_index].get_answer()) {
            this.score++;
            display_correction(true);
            console.log("bonne réponse !");
        } else {
            display_correction(false);
            console.log("mauvaise réponse !");
        }
        this.next_question();
    }

    /** Ajouter une question au quizz.
     * @param {*} text text de la question (ce qui est affiché pour comprendre quelle doit être la question)
     * @param {*} answer réponse attendue à la question.
     */
    add_question(text, answer) {
        this.questions.push(new Question(text, answer));
        this.nb_questions++;
    }

    /**
     * Passer à la prochaine question s'il en reste, à la finn du quizz sinon.
     */
    next_question() {
        this.actual_question_index++;
        if (this.actual_question_index == this.nb_questions) {
            this.end_quizz();
        }
    }

    /**
     * Finir le quizz.
     */
    end_quizz() {
        display_end_quizz();
    }

    get_score() {
        return this.score;
    }

    get_actual_question_nb() {
        return this.actual_question_index + 1;
    }

    get_nb_questions() {
        return this.nb_questions;
    }

}