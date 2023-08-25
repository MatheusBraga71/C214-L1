<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário -> let porque é um valor que será alterado
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classeIMC = "IMC não classificado!"; // Classificação do IMC

	// Variáveis para a funcionalidade de meta de peso
	let pesoMeta = 0; // Peso meta
	let imcMeta = 0; // Índice de Massa Corporal referente à meta de peso
	let ClasseIMCMeta = "IMC da meta não classificado!" // Classificação do IMC da meta de peso
  
	// Função para calcular o IMC
	function calcularIMC() {
		if (peso > 0 && altura > 0) {
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
			classificarIMC();
	  	} else {
			imc = 0;
	  	}
	}

	function calcularIMC_Meta() {
		if (pesoMeta > 0 && altura > 0) {
			imcMeta = (pesoMeta / Math.pow(altura, 2)).toFixed(2);
			classificarIMC_Meta();
	  	} else {
			imcMeta = 0;
	  	}
	}

	function classificarIMC(){
		if (imc <= 18.5) {
			classeIMC = "Você está abaixo do peso!";
		}
		else if (imc >= 18.6 && imc <= 24.9) {
			classeIMC = "Você está no seu peso ideal (Parabéns)!";
		}
		else if (imc >= 25.0 && imc <= 29.9) {
			classeIMC = "Você está levemente acima do peso!";
		}
		else if (imc >= 30.0 && imc <= 34.9) {
			classeIMC = "Você está com Obesidade grau I";
		}
		else if (imc >= 35.0 && imc <= 39.9) {
			classeIMC = "Você está com Obesidade grau II (severa)!";
		}
		else {
			classeIMC = "Você está com Obesidade grau III (mórbida)!";
		}
	}

	function classificarIMC_Meta (){
		if (imcMeta <= 18.5) {
			ClasseIMCMeta = "você estará abaixo do peso!";
		}
		else if (imcMeta >= 18.6 && imcMeta <= 24.9) {
			ClasseIMCMeta = "você estará com seu peso ideal!";
		}
		else if (imcMeta >= 25.0 && imcMeta <= 29.9) {
			ClasseIMCMeta = "você estará acima do peso!";
		}
		else if (imcMeta >= 30.0 && imcMeta <= 34.9) {
			ClasseIMCMeta = "você estará com Obesidade grau I";
		}
		else if (imcMeta >= 35.0 && imcMeta <= 39.9) {
			ClasseIMCMeta = "você estará com Obesidade grau II (severa)!";
		}
		else {
			ClasseIMCMeta = "você estará com Obesidade grau III (mórbida)!";
		}
	}

	</script>
  
  	<main>
		<h1>Calculadora de IMC</h1>
		<label>
			Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
		</label>
		<label>
	  		Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
		</label>
		<label>
			Peso Meta (kg): <input type="number" bind:value={pesoMeta} on:input={calcularIMC_Meta} />
	  	</label>
		{#if imc > 0}
		  	<p>Seu IMC é {imc}</p>
		  	<p> {classeIMC} </p>
		{/if}
		{#if imcMeta > 0}
		  	<p>Se atingir a meta de peso, seu IMC será {imcMeta} e {ClasseIMCMeta} </p>
		{/if}
 	</main>
  
 	<style>
		main{
			display: flex;
    		flex-direction: column;
    		justify-content: center;
    		align-items: center;
    		height: 100vh;
			background-image: url('/light.jpeg'); /* Substitua pelo caminho correto da sua imagem */
    		background-size: cover;

			font-family: 'Times New Roman', Times, serif;
			text-align: center;
			padding: 2rem;
		}
  
		h1 {
			font-size: 3rem;
		  	margin-bottom: 1rem;
		}
  
		label {
		  	display: block;
			font-size: 1.5rem;
		  	margin-bottom: 0.5rem;
		}
  
		input {
		  	padding: 0.25rem;
		}
  	</style>
  