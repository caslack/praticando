
/* Composição, construir uma classe com outras classes
A grande vantagem da composição é a reutilização de código
*/
class Leitor{
    Ler(caminho){
        return "Conteudo do arquivo";

    }
}
class Escritor{
    Escrever(arquivo,conteudo){
         console.log("Conteudo escrito");
    }
}
class Criador{
    Criar(nome){
        console.log("Arquivo criado!");
    }
}
class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!");
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();

    }

}

class GerenciadorDeUsuario{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();
    }
    SalvarListaDeUsuario(Lista){
        this.criador.Criar("usuario.txt");
        this.escritor.Escrever("usuario.txt",lista);
    }
}

var manipular = new ManipuladorDeArquivo("meuarquivo.txt");
ManipuladorDeArquivo.leitor.Ler();