
class Numpad {

    entry;
    entry_size;
    negative;
    decimal;
    locked;

    constructor() {
        this.entry = "";
        this.entry_size = 0;
        this.negative = false;
        this.decimal = false;
        this.locked = false;
    }

    lock() {
        this.locked = true;
    }

    unlock() {
        this.locked = false;
    }

    write(car) {
        if (!this.locked && car["length"] == 1 && !(car == '.' && this.decimal)) {
            if (car == '.') {
                this.decimal = true;
            }
            this.entry_size++;
            this.entry += car;
        }
    }

    reset() {
        this.entry = "";
        this.entry_size = 0;
        this.negative = false;
        this.decimal = false;
    }

    toggle_sign() {
        this.negative = !this.negative;
    }

    delete() {
        if (this.entry_size > 0) {
            this.entry_size--;
            if (this.entry.slice(-1) == '.') {
                this.decimal = false;
            }
            this.entry = this.entry.slice(0, this.entry_size);
        }
    }

    // enter() {
    //     console.log("entrée : " + this.get_entry());
    // }

    get_entry() {
        if (this.negative) {
            return '-' + this.entry;
        } else {
            return this.entry;
        }
    }

}



