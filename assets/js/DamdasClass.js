function randint(x) {
    return Math.floor(Math.random() * len(x))
}

class Damdas {
    constructor(){
        this.pawn()
        this.pos()
    }

    botmove(pos){
        switch (this.pos){
            case 1:
                x = randint([2,7])
            case 2:
                x = randint([1,3,7])
            case 3:
                x = randint([2,7])
            case 4:
                x = randint([5,7])
            case 5:
                x = randint([4,6,7,8,10])
            case 6:
                x = randint([5,8])
            case 7:
                x = randint([1,2,3,4,5,9,10])
            case 8:
                x = randint([5,6,10,11,12,13,14])
            case 9:
                x = randint([7,10])
            case 10:
                x = randint([5,7,8,9,10])
            case 11:
                x = randint([8,10])
            case 12:
                x = randint([8,13])
            case 13:
                x = randint([8,12,14])
            case 14:
                x = randint([8,13])
        }
        this.pos = x
        return this.pos
    }

    botchance() {

    }

    win() {
        return true
    }

    node(pos){
        isLocked = true
        return isLocked
    }
}

export {Damdas}