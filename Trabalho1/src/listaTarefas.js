class listaTarefas {
    constructor(titulo, data, status) {
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





function iniciarMenu() {
    console.log("[1] - Adicionar nova tarefa.");
    console.log("[2] - Visualizar a lista de Tarefas.");
    console.log("[3] - Atualizar o status de uma tarefa.");
    console.log("[4] - Excluir uma tarefa.");
    console.log("");

    rl.question('Digite o número referente à opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1':

                break;
            case '2':

                break;
            case '3':

                break;
            case '4':

                break;
            case '5':

                break;
            default:
                console.log('Opção inválida.');
                console.log('');
                iniciarMenu();
        }
    });
}

iniciarMenu(); // Inicia o loop para o menu
