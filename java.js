document.getElementById("imcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let idade = parseInt(document.getElementById("idade").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    
    // Verifica se os valores são válidos
    if (isNaN(idade) || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Converte altura de cm para metros
    altura = altura / 100;

    // Cálculo do IMC
    let imc = (peso / (altura * altura)).toFixed(2);

    // Categoria do IMC conforme o resultado
    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    // Faixa etária
    let faixaEtaria = idade >= 60 ? "Atenção: IMC para idosos pode variar" : "";

    // Exibe o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        Seu IMC é <strong>${imc}</strong><br>
        Categoria: <strong>${categoria}</strong><br>
        ${faixaEtaria}
    `;
    resultado.classList.remove("hidden");
});
