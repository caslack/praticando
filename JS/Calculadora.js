class Calculadora{

/*Metodo estatico, permite acesso a metodo de uma classe 
    sem que precise criar um objeto antes
    */

    static Somar(a,b){
        console.log(a+b);
    }

    static Sub(a,b){
        console.log(a-b);

    }

    
}

Calculadora.Somar(31,11);
Calculadora.Sub(87,2);