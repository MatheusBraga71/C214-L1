const assert = require('chai').assert;
const readline = require('readline');
const sinon = require('sinon');

const Tarefa = require('../src/Tarefa'); // Importe a classe Tarefa aqui
const {
    adicionarTarefa
} = require('../src/Tarefa'); // Importe as funções principais aqui

describe('Funções de Tarefa', function () {
    describe('adicionarTarefa', function () {
        it('deve adicionar uma tarefa à lista', function () {
            const listaTarefas = [];
            const novaTarefa = new Tarefa('Título da Tarefa', 'Descrição da Tarefa');

            adicionarTarefa(listaTarefas, novaTarefa);

            assert.equal(listaTarefas.length, 1);
            assert.deepEqual(listaTarefas[0], novaTarefa);
        });
    });

    // Você pode criar testes similares para as outras funções
});

describe('Menu', function () {
    let rl;
    let rlQuestionStub;

    before(function () {
        // Configuração do stub para readline.question
        rl = sinon.createStubInstance(readline.Interface);
        rlQuestionStub = sinon.stub(rl, 'question');

        // Substituir readline.createInterface com o stub
        sinon.stub(readline, 'createInterface').returns(rl);
    });

    after(function () {
        // Restaurar os stubs após todos os testes
        sinon.restore();
    });

    it('deve chamar a função adicionarTarefa quando a opção 1 for selecionada', function () {
        rlQuestionStub.onCall(0).callsArgWith(1, '1'); // Simula a entrada '1' para a pergunta do menu
        rlQuestionStub.onCall(1).callsArgWith(1, 'Título da Tarefa');
        rlQuestionStub.onCall(2).callsArgWith(1, 'Descrição da Tarefa');

        const listaTarefas = [];
        adicionarTarefa(listaTarefas);

        // Verifique se adicionarTarefa foi chamada corretamente
        assert.equal(listaTarefas.length, 1);
    });

    // Você pode criar testes similares para as outras opções do menu
});
