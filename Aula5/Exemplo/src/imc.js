function calcularIMC (peso, altura){
    if (altura === 0){
        return 'NaN'; // Retorna caso a altura seja zero, não preenchida
    }

    const alturaMetros = altura/100;
    
    return (peso / (alturaMetros * alturaMetros)).toFixed(2);
}

module.exports = {calcularIMC}; // Módulo responsável pela exportação da função para coleta no teste.
