class Soal{
    constructor() {
        this.soal
        this.a
        this.b
        this.c
        this.d
        this.cor
    }

    answer(x){
        if (x == cor){
            return true
        } else { return false }
    }
}

let mySoal = new Soal
mySoal = [
    [
        "Siapa nama bapakkau?",
        "Angga",
        "Gatau",
        "Elah",
        "Siapa aja kek",
        "Elah"
    ]
]

export {Soal, mySoal}