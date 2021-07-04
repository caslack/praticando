/* Sistema de cassino
- varios tipos de dados
- rolar dados
*/
class Dado{
    constructor(faces){
        this.faces = faces;

    }


    Rolar(){
       console.log("Resultado do dado: " + this.GetRandomIntInclusive(1,this.faces));
    }

    GetRandomIntInclusive(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);

    }

}

var Face6 = new Dado(6);
var Face12 = new Dado(12);
var Face100 = new Dado(100);
Face6.Rolar();
Face12.Rolar();
Face100.Rolar();