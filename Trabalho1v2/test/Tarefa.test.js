
const { expect } = require('chai');
const { Tarefa, listaTarefas, adicionarTarefa, visualizarLista} = require('../src/Tarefa');

describe('Teste da Lista de Tarefas', () => {
    beforeEach(function(){
        listaTarefas.length = 0; // Limpando a lista de tarefas antes de cada teste
    });

    it('Testando função de adicionar tarefa à lista', function () {

        adicionarTarefa('Titulo de teste', 'Descrição de teste');
        expect(listaTarefas.length).to.equal(1);

    });

    
    it('Testando função de visualizar a lista - Lista Vazia', function() {
        
        const originalConsoleLog = console.log; // Redefinindo a função console.log temporarriamente para capturar a saída
        let consoleOutput = '';
        console.log = function(message) {
            consoleOutput += message + '\n';
        };
        
        visualizarLista();
        
        console.log = originalConsoleLog; // Restaurando a função console.log para o que era
        
        expect(consoleOutput).to.equal('A Lista de Tarefas está vazia!\n');
    });


});