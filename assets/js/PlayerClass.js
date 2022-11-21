import {Damdas} from "./DamdasClass"
import {Soal} from "./SoalClass"

class Player {
    constructor(){
        this.p1 = Damdas(p1, 1)
        this.p2 = Damdas(p2, 2)
        this.p3 = Damdas(p3, 3)
    }

    move(node,bidak){
        if (Damdas.node(node).isLocked == false){
            //ngerjain soal lah intinya
            if (Soal.answer(node) == true){
                bidak.pos = node
            } else{
                //turn nya keskip
            }
        } else {
            bidak.pos = node
        }
    }
}