class Tarefa {
    constructor(titulo, data) {
        this.titulo = titulo;
        this.data = data;
        this.status = "A fazer";
    }

    exibirLista() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Entrgar em: ${this.data}`);
        console.log(`Satus: ${this.status}`);
        console.log('-------------------------');
    }

    atualizaStatus(estado) {
        this.status = estado;
        console.log("Status da tarefa atualizado!")
    }
}

const listaTarefas = [];
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function adicionarTarefa() {
    rl.question('Titulo da tarefa: ', (titulo) => {
        rl.question('Descrição: ', (descricao) => {
            const tarefa = new Tarefa(titulo, descricao); // Instanciando uma tarefa
            listaTarefas.push(tarefa);
            console.log('Tarefa adicionada com sucesso');
            console.log('');
            iniciarMenu();
        }); 
    });
}

function visualizarLista() {
    console.log('Lista de Tarefas: ')
    for (let i = 0; i < listaTarefas.length; i++) {
        listaTarefas[i].exibirLista();
    }
}



function encerrarPrograma() {
    console.log('Programa Finalizado!');
    rl.close();
}

function iniciarMenu() {
    console.log("[1] - Adicionar nova tarefa.");
    console.log("[2] - Visualizar a lista de Tarefas.");
    console.log("[3] - Atualizar o status de uma tarefa.");
    console.log("[4] - Excluir uma tarefa.");
    console.log("");

    rl.question('Digite o número referente à opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1': 
                adicionarTarefa();
                break;
            case '2':
                visualizarLista();
                break;
            case '3': // Atualizar status

                break;
            case '4': // Excluir tarefa

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

iniciarMenu(); // Inicia o loop para o menu
