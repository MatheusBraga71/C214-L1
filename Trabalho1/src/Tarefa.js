class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = "A fazer";
    }

    exibirLista() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Status: ${this.status}`);
        console.log('-------------------------');
    }

    atualizaStatus(estado) {
        this.status = estado;
        console.log("Status da tarefa atualizado!")
        console.log("");
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
    iniciarMenu();
}

function atualizarStatus() {
    // Exibindo somente os títulos das tarefas com índices para seleção
    console.log("Lista de Tarefas:")
    for (let i = 0; i < listaTarefas.length; i++) {
        console.log(`${i + 1} - ${listaTarefas[i].titulo}`);
    }
    console.log("");
    rl.question('Digite o número da tarefa que deseja atualizar o status: ', (numero) => {
        const index = parseInt(numero) - 1; // Alterando o tipo da resposta do usuário para Int e adequando às posições do vetor listaTarefas

        if (index >= 0 && index < listaTarefas.length) {
            console.log("");
            console.log("[1] - A fazer.");
            console.log("[2] - Em andamento.");
            console.log("[3] - Concluída.");
            console.log("");

            rl.question('Digite o número do status que deseja adicionar à tarefa: ', (numStatus) => {
                let flagOk = 0; // Variável para detecção de entrada errada
                switch (numStatus) {
                    case '1':
                        listaTarefas[index].atualizaStatus('A fazer');
                        flagOk = 1;
                        break;
                    case '2':
                        listaTarefas[index].atualizaStatus('Em andamento');
                        flagOk = 1;
                        break;
                    case '3':
                        listaTarefas[index].atualizaStatus('Concluída');
                        flagOk = 1;
                        break;
                    default:
                        console.log("Opção Inválida, selecione a tarefa novamente!");
                        console.log("");
                }
                if (flagOk === 1) { // Se entrada estiver correta, retorna para o menu
                    iniciarMenu();
                }
                else {
                    atualizarStatus(); // Se entrada for inválida retorna para a seleção de tarefa
                }
            });
        }
        else {
            console.log('Número de tarefa Inválido, tente novamente!');
            console.log("");
            atualizarStatus();
        }
    });
}

function excluirTarefa() {
    console.log("Lista de Tarefas:")
    for (let i = 0; i < listaTarefas.length; i++) {
        console.log(`${i + 1} - ${listaTarefas[i].titulo}`);
    }
    console.log("");

    rl.question('Digite o número da tarefa que deseja excluir: ', (numExcluir) => {
        const index2 = parseInt(numExcluir) - 1;
        if (index2 >= 0 && index2 < listaTarefas.length) {
            listaTarefas.splice(index2, 1);
            console.log('Tarefa excluída com sucesso!')
            iniciarMenu();
        }
        else {
            console.log('Número de tarefa Inválido, tente novamente!');
            console.log("");
            excluirTarefa();
        }
    });
}

function encerrarPrograma() {
    console.log('Programa Finalizado!');
    rl.close();
}

function iniciarMenu() {
    console.log('=====================================');
    console.log("[1] - Adicionar nova tarefa.");
    console.log("[2] - Visualizar a lista de Tarefas.");
    console.log("[3] - Atualizar o status de uma tarefa.");
    console.log("[4] - Excluir uma tarefa.");
    console.log("[5] - Encerrar o programa.")
    console.log('=====================================');
    console.log("");

    rl.question('Digite o número referente à opção desejada: ', (opcao) => {
        console.log("");
        switch (opcao) {
            case '1':
                adicionarTarefa();
                break;
            case '2':
                visualizarLista();
                break;
            case '3':
                atualizarStatus();
                break;
            case '4':
                excluirTarefa();
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
module.exports = {Tarefa, adicionarTarefa};
