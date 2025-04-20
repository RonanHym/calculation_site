

/* valider la réponse lorsque l'on appuie sur la touche Entrée*/
document.addEventListener("keydown", (event) => {
    // console.log(event.key);
    switch (event.key) {
        case "Enter":
            enter();
            break;
        case "1":
            numpad.write('1');
            maj_entry();
            break;
        case "2":
            numpad.write('2');
            maj_entry();
            break;
        case "3":
            numpad.write('3');
            maj_entry();
            break;
        case "4":
            numpad.write('4');
            maj_entry();
            break;
        case "5":
            numpad.write('5');
            maj_entry();
            break;
        case "6":
            numpad.write('6');
            maj_entry();
            break;
        case "7":
            numpad.write('7');
            maj_entry();
            break;
        case "8":
            numpad.write('8');
            maj_entry();
            break;
        case "9":
            numpad.write('9');
            maj_entry();
            break;
        case "0":
            numpad.write('0');
            maj_entry();
            break;
        case "Backspace":
            numpad.delete();
            maj_entry();
            break;
        case ",":
        case ".":
            numpad.write('.');
            maj_entry();
            break;
        default:
            // do nothing
    }
})





