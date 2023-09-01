<script>
	import Jogador from "./Jogador.svelte";

	function marcaGol(){
		console.log("Marcou ' GOL");
	}
</script>

<main>
	<h1> Exibe a informação quando marca GOL </h1>
	<Jogador acao = {marcaGol} />
</main>