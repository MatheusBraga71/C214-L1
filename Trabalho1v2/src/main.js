const readline = require('readline');
const {
    Tarefa,
    listaTarefas,
    adicionarTarefa,
    visualizarLista,
    atualizarStatus,
    excluirTarefa,
} = require('../src/Tarefa');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function exibirMenu() {
    console.log('\nMenu:');
    console.log('[1] - Adicionar Tarefa');
    console.log('[2] - Visualizar Lista de Tarefas');
    console.log('[3] - Atualizar Status de Tarefa');
    console.log('[4] - Excluir Tarefa');
    console.log('[5] - Sair \n');
}

function main() {
    exibirMenu();

    rl.question('Selecione uma opção: ', function (opcao) {
        switch (opcao) {
            case '1':
                rl.question('Digite o título da tarefa: ', function (titulo) {
                    rl.question('Digite a descrição da tarefa: ', function (descricao) {
                        adicionarTarefa(titulo, descricao);
                        console.log('Tarefa adicionada com sucesso!');
                        main();
                    });
                });

                break;
            case '2':
                visualizarLista();
                main();

                break;
            case '3':

                if (listaTarefas.length > 0) {

                    console.log("Lista de Tarefas:")
                    for (let i = 0; i < listaTarefas.length; i++) {
                        console.log(`${i + 1} - ${listaTarefas[i].titulo}`);
                    }
                    console.log("");

                    rl.question('Digite o número da tarefa que deseja atualizar o status: ', function (numTarefa) {
                        const index = parseInt(numTarefa) - 1;  // Alterando o tipo da resposta do usuário para Int e adequando às posições do vetor listaTarefas

                        if (index >= 0 && index < listaTarefas.length) {
                            console.log('\n[1] - A fazer');
                            console.log('[2] - Em andamento');
                            console.log('[3] - Concluída\n');

                            rl.question('Digite o número do status que deseja adicionar à tarefa: ', function (numStatus) {

                                switch (numStatus) {
                                    case '1':
                                        listaTarefas[index].atualizaStatus('A fazer');
                                        console.log('Status Atualizado com sucesso!\n');                          
                                        break;
                                    case '2':
                                        listaTarefas[index].atualizaStatus('Em andamento');
                                        console.log('Status Atualizado com sucesso!\n'); 
                                        break;
                                    case '3':
                                        listaTarefas[index].atualizaStatus('Concluída');
                                        console.log('Status Atualizado com sucesso!\n'); 
                                        break;
                                    default:
                                        console.log("Opção Inválida!\n");
                                }
                                main();
                            });
                        }
                    });                   
                }
                else {
                    console.log('Não há tarefas na lista!');
                    main();
                }

                break;
            case '4':
                rl.question('Digite o índice da tarefa a ser excluída: ', function (indice) {
                    excluirTarefa(indice);
                    main();
                });

                break;
            case '5':
                rl.close();
                
                break;
            default:
                console.log('Opção inválida! Por favor, selecione uma opção válida.');
                main();
                break;
        }
    });
}

main();

rl.on('close', function () {
    console.log('Programa encerrado.');
    process.exit(0);
});
