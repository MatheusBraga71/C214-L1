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
        console.log("Status da tarefa atualizado!")
        console.log("");
    }
}