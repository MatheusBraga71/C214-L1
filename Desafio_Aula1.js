class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = "Não";
        this.avaliacao = 0;
    }

    exibirInfo(nome){
        console.log(`Título: ${this.titulo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Gênero: ${this.genero}`)
        console.log(`Duração: ${this.duracao} minutos`)
        console.log(`Já foi assistido? => ${this.assistido}`)
        console.log(`Avaliação: ${this.avaliacao}`)
        console.log('') // Puramente por estética, para os logs ficarem organizados
    }

    assistir(){
        this.assistido = "Sim";
        console.log(`Filme ${this.titulo} marcado como assistido.`)
    }

    avaliar(nota){
        this.avaliacao = nota;
        console.log(`Nota adicionada para o filme ${this.titulo}`)
    }
}

    // Criando 3 objetos 
    const filme1 = new Filme ('O Planeta do Tesouro', 2003, 'Aventura', 95)
    const filme2 = new Filme ('A Nova Onda do Imperador', 2000, 'Aventura', 78)
    const filme3 = new Filme ('Spider-Man 3', 2007, 'Ação', 148)

    // Exibir informações antes de realizar avaliação e assisir
    console.log('Exibindo as informações antes de avaliar e assisir')
    filme1.exibirInfo();
    filme2.exibirInfo();
    filme3.exibirInfo();
    console.log('') // Puramente por estética, para os logs ficarem organizados

    // Marcando os filmes como assistidos
    filme1.assistir();
    filme2.assistir();
    filme3.assistir();
    console.log('') // Puramente por estética, para os logs ficarem organizados

    // Definindo uma nota para os filmes
    filme1.avaliar(10);
    filme2.avaliar(7);
    filme3.avaliar(9);
    console.log('') // Puramente por estética, para os logs ficarem organizados

    // Exibir informações após avaliar e assistir
    console.log('Exibindo as informações depois de avaliar e assisir')
    filme1.exibirInfo();
    filme2.exibirInfo();
    filme3.exibirInfo();