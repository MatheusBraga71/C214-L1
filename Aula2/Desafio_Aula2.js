class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = 'Não';
        this.avaliacao = null;
    }

    exibirInfo(nome){
        console.log('-----------------------');
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao} minutos`);
        console.log(`Já foi assistido? => ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}/10`);
        console.log('-----------------------');
        console.log(''); // Puramente por estética, para os logs ficarem organizados
    }

    assistir(){ // Método que permite definir um filme como assistido.
        this.assistido = 'Sim';
        console.log(`Filme ${this.titulo} marcado como assistido.`);
    }

    avaliar(nota){ // Método que permite definir uma nota para um filme
        if (nota >= 0 && nota <= 10){
            this.avaliacao = nota;
            console.log(`Nota adicionada para o filme ${this.titulo}`);
        } else {
            console.log("Avaliação inválida, deve ser de 0 a 10.")
        }
    }
}

    const listaFilmes = []; // Vetor que armazena a lista de filmes que serão adicionados

    // Inicialização do sistema para a inserção de dados via terminal
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

function exibirMenu() { // Função que exibe o menu, mostra as opções para o usuário
    console.log("--------------------------------");
    console.log(`[1] - Adicionar um novo filme à lista.`);
    console.log(`[2] - Marcar um filme da lista como assistido.`);
    console.log(`[3] - Avaliar um filme da lista.`);
    console.log(`[4] - Exibir a lista de filmes.`);
    console.log(`[5] - Sair do programa`);
    console.log(``); //Puramente por estética
}

function adicionarFilme(){ // função que adiciona o(s) filme(s) na lista de filmes
    rl.question('Titulo do filme: ', (titulo) => {
        rl.question('Ano de lançamento: ', (ano) => {
          rl.question('Gênero: ', (genero) => {
            rl.question('Duração em minutos: ', (duracao) => {
                const filme = new Filme(titulo, ano, genero, duracao); // Instânciando o filme como um objeto da classe Filme
                listaFilmes.push(filme);
                console.log('Filme adicionado com sucesso.');
                console.log('');
                iniciarMenu(); 
            });
          });
        });
    });  
}

function marcarAssistido() { // Função que permite definir um filme como assistido.
    // Exibe na tela os nomes dos filmes, juntamente com o número que o representa (índice)
    for (let i = 0; i < listaFilmes.length; i++) {
        console.log(`${i+1} - ${listaFilmes[i].titulo}`);
      }
    rl.question('Digite o número do filme que deseja marcar como assistido: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < listaFilmes.length) {
        listaFilmes[index].assistir(); // Utilizando o método da classe Filme
        } else {
            console.log('Número de filme inválido.');
        }
        iniciarMenu();
    });
    
  }

function avaliarFilme() { // Função que permite avaliar um filme
    // Exibe na tela os nomes dos filmes, juntamente com o número que o representa (índice)
    for (let i = 0; i < listaFilmes.length; i++) {
        console.log(`${i+1} - ${listaFilmes[i].titulo}`);
    }
    rl.question('Digite o número do filme que deseja avaliar: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < listaFilmes.length) {
        rl.question('Digite a sua avaliação (de 1 a 10): ', (avaliacao) => {
            const nota = parseInt(avaliacao);
            listaFilmes[index].avaliar(nota); // Utilizando o método da classe Filme
            console.log('');
            iniciarMenu();
        });
        } else {
            console.log('Número de filme inválido.');
            console.log('');
            iniciarMenu();
        }
        
    });
    
}

function listarFilmes() { // Função que realiza a exibição da lista de filmes
    console.log('Lista de Filmes:');
    for (let i = 0; i < listaFilmes.length; i++) {
      listaFilmes[i].exibirInfo(); // Utilizando o método da classe Filme
    }
    iniciarMenu();
}

function encerrarPrograma() { // Função para finalizar a execução do programa
    console.log('Programa Finalizado!.');
    rl.close();
}

function iniciarMenu() { // Função que inicializar menu e permite a seleção das funções desejadas
    exibirMenu();
    rl.question('Digite o número da opção desejada: ', (opcao) => {
      switch (opcao) {
        case '1':
          adicionarFilme();
          break;
        case '2':
          marcarAssistido();
          break;
        case '3':
          avaliarFilme();
          break;
        case '4':
          listarFilmes();
          break;
        case '5':
          encerrarPrograma();
          break;
        default:
          console.log('Opção inválida.');
          console.log('');
          iniciarMenu();
      }
    });
}
  
iniciarMenu();
