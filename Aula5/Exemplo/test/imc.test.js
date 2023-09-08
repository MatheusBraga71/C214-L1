const { expect } = require('chai');
const { calcularIMC, calcularCalorias } = require('../src/imc');

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
        const nivelAtividade = 'moderado'; // sedentario, leve, moderado, ativo, muitoAtivo
        const objetivo = 'perderPeso'; // perderPeso ou ganharPeso

        if(sexo === 'homem'){
            const TMBEsperado = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
        }
        else if (sexo === 'mulher'){
            const TMBEsperado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
        }
        const TMBCalculado = calcularCalorias(sexo, idade, peso, altura, nivelAtividade, objetivo)

        expect()
    });

    
    it('Cálculo das calorias Totais', () => {



    });
    

});

