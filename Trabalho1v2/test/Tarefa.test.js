
const { expect } = require('chai');
const { Tarefa, listaTarefas, adicionarTarefa, visualizarLista, atualizarStatus } = require('../src/Tarefa');

describe('Teste da Lista de Tarefas', () => {
    beforeEach(function () {
        listaTarefas.length = 0; // Limpando a lista de tarefas antes de cada teste
    });

    it('Testando função de adicionar tarefa à lista', function () {

        adicionarTarefa('Titulo de teste', 'Descrição de teste');
        expect(listaTarefas.length).to.equal(1);

    });


    it('Testando função de visualizar a lista - Lista Vazia', function () {

        const originalConsoleLog = console.log; // Redefinindo a função console.log temporarriamente para capturar a saída
        let consoleOutput = '';
        console.log = function (message) {
            consoleOutput += message + '\n';
        };

        visualizarLista();

        console.log = originalConsoleLog; // Restaurando a função console.log original

        expect(consoleOutput).to.equal('A Lista de Tarefas está vazia!\n');
    });

    it('Testando função de visualizar a lista - Lista com Elementos', function () {
        // Inserindo elementos na lista 
        const tarefa1 = new Tarefa('Tarefa 1', 'Descrição da Tarefa 1');
        const tarefa2 = new Tarefa('Tarefa 2', 'Descrição da Tarefa 2');
        listaTarefas.push(tarefa1);
        listaTarefas.push(tarefa2);

        const originalConsoleLog = console.log; // Redefinindo a função console.log temporarriamente para capturar a saída
        let consoleOutput = '';
        console.log = function(message) {
            consoleOutput += message + '\n';
        };

        visualizarLista();
        
        console.log = originalConsoleLog; // Restaurando a função console.log original

        // Verifique se a saída esperada foi gerada
        expect(consoleOutput).to.contain('Lista de Tarefas:');
        expect(consoleOutput).to.contain('Titulo: Tarefa 1');
        expect(consoleOutput).to.contain('Descrição: Descrição da Tarefa 1');
        expect(consoleOutput).to.contain('Status: A fazer');
        expect(consoleOutput).to.contain('-------------------------');
        expect(consoleOutput).to.contain('Titulo: Tarefa 2');
        expect(consoleOutput).to.contain('Descrição: Descrição da Tarefa 2');
        expect(consoleOutput).to.contain('Status: A fazer');
        expect(consoleOutput).to.contain('-------------------------');

    });


});