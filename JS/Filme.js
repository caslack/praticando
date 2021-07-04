class Filme{
    
    /*Para definir os atributos de uma classe no JS puro, é necessário definir dentro do construtor
    O contrutor é uma função que gera o objeto na memória e retorna para variável.
    Por se tratar de uma função, o contrutor aceita parametros
    */
    constructor(titulo,ano,genero,diretor,duracao){
      /*Atributos são como variáveis, só que pertencem a uma classe. Para criar um, é bem semelhante
      ao processo de criação de variável, com a adição do 'this.' antes do nome do atributo.
      */
     //Os dados serão passados ao atributos no momento em que estiver estanciando o objeto  
     this.titulo = titulo;
     this.ano = ano;
     this.genero = genero;
     this.diretor = diretor;
     this.duracao = duracao;
     this.atores = [];  
    }

    //Métodos
    Reproduzir(){
        console.log("Reproduzindo...");
    }
    Pausar(){
        console.log("Pausado ||");
    }
    Avancar(){
        console.log("Avançar >>");
    }
    Fechar(){
        console.log("Fechar X");

    }

    Ficha(){
        console.log("Titulo: " + this.titulo);
        console.log("Ano de lançamento :" + this.ano);
        console.log("Gênero :" + this.genero);
        this.Reproduzir();
    }
}
/*Instanciando, criar cópia(objetos) baseado na classe Filme.
Dessa forma é possivel acessar todos os metodos e atributos definidos na classe.
*/
// Passando valores para o objeto. Os valores são salvos nos atributos do constructor
var vingadoes = new Filme("Vingadores 2",2014,"Ação","Alguem","2h");
vingadoes.Ficha();

