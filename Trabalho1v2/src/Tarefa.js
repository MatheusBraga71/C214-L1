class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = "A fazer";
    }

    exibirTarefa() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Status: ${this.status}`);
        console.log('-------------------------');
    }

    atualizaStatus(estado) {
        this.status = estado;
        //console.log("Status da tarefa atualizado!")
        //console.log("");
    }
}

const listaTarefas = [];

function adicionarTarefa(tituloTarefa, descricaoTarefa) {
    const tarefa = new Tarefa(tituloTarefa, descricaoTarefa);
    listaTarefas.push(tarefa);
    //console.log('Tarefa adicionada com sucesso!');
    //console.log('');
}

function visualizarLista() {
    if (listaTarefas.length === 0) {
        console.log('A Lista de Tarefas está vazia!');
    }
    else {
        console.log('Lista de Tarefas: ')
        for (let i = 0; i < listaTarefas.length; i++) {
            listaTarefas[i].exibirTarefa();
        }
    }
}

function atualizarStatus(indice, statusAtualizado) {
    listaTarefas[indice].atualizaStatus(statusAtualizado);
}

function excluirTarefa(indice) {
    listaTarefas.splice(indice, 1);
    //console.log('Tarefa excluída com sucesso!');
}

module.exports = { Tarefa, listaTarefas, adicionarTarefa, visualizarLista, atualizarStatus, excluirTarefa };