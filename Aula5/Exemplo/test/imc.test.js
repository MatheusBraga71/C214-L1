const { expect } = require('chai');
const { calcularIMC, calcularTMB, calcularCaloriasTotais } = require('../src/imc');

describe('Calculadora de IMC', () => {

    it('Calculadora deve rodar tranquilo', () => {
      const peso = 80; // 80 kg
      const altura = 180; // 180 cm
  
      const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
      const IMCCalculado = calcularIMC(peso, altura);
  
      expect(IMCCalculado).to.equal(IMEsperado);
    });
  
    it('altura = 0, entrada inadequada', () => {
      const peso = 70; // 70 kg
      const altura = 0; // 0 cm
  
      const IMCCalculado = calcularIMC(peso, altura);
  
      expect(IMCCalculado).to.equal('NaN');
    });
  });

// Teste da calculadora de calorias

describe('Calculadora de Calorias', () => {
   
    it('Cálculo da Taxa de Metabolismo Basal', () => {
        const sexo = 'homem';
        const idade = 21;
        const peso = 80; // peso em kilogramas
        const altura = 178; // altura em cm

        let TMBEsperado = 0;
        if(sexo === 'homem'){
            TMBEsperado = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
        }
        else if (sexo === 'mulher'){
            TMBEsperado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
        }
        const TMBCalculado = calcularTMB(sexo, idade, peso, altura)

        expect(TMBCalculado).to.equal(TMBEsperado);
    });

    it('Cálculo das calorias Totais', () => {
        const sexo = 'homem';
        const idade = 21;
        const peso = 80; // peso em kilogramas
        const altura = 178; // altura em cm
        const nivelAtividade = 'moderado'; // sedentario, leve, moderado, ativo, muitoAtivo

        const TMB = calcularTMB(sexo, idade, peso, altura);

        let fatorAtividade; // Variável que converte o nivel de atividade para o coeficiente que irá alterar o TMB;

        switch (nivelAtividade) {
            case "sedentario":
                fatorAtividade = 1.2;
                break;
            case "leve":
                fatorAtividade = 1.375;
                break;
            case "moderado":
                fatorAtividade = 1.55;
                break;
            case "ativo":
                fatorAtividade = 1.725;
                break;
            case "muitoAtivo":
                fatorAtividade = 1.9;
                break;
        }

        const caloriasTotaisEsperadas = TMB * fatorAtividade;
   
        const caloriasTotaisCalculadas = calcularCaloriasTotais(TMB, nivelAtividade);

        expect(caloriasTotaisEsperadas).to.equal(caloriasTotaisCalculadas);
        
    });
});