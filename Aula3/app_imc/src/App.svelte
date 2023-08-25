<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário -> let porque é um valor que será alterado
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classeIMC = "IMC não classificado!";
  
	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		classificarIMC();
	  } else {
		imc = 0;
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

  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é {imc}</p>
	  <p> {classeIMC} </p>
	{/if}
	
	
  </main>
  
  <style>
	main {
		font-family: 'Times New Roman', Times, serif;
		text-align: center;
		padding: 2rem;
	}
  
	h1 {
		font-size: 2rem;
	  	margin-bottom: 1rem;
	}
  
	label {
	  	display: block;
	  	margin-bottom: 1rem;
	}
  
	input {
	  	padding: 0.5rem;
	}
  </style>
  