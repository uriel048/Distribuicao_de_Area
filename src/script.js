function calcular() {
	var quantidadeUnidades = parseInt(document.getElementById('quantidadeUnidades').value);
	var areaTotal = parseFloat(document.getElementById('areaTotal').value);
	var unidades = [];

	for (var i = 0; i < quantidadeUnidades; i++) {
		var tamanhoUnidade = parseFloat(document.getElementById('tamanhoUnidade' + i).value);
		unidades.push(tamanhoUnidade);
	}
	
	var proporcao = [];
	var somaTotal = unidades.reduce((a, b) => a + b, 0);
	for (var i = 0; i < quantidadeUnidades; i++) {
		proporcao.push((unidades[i] / somaTotal) * areaTotal);
	}

	var resultadoTable = document.getElementById('resultadoTable').getElementsByTagName('tbody')[0];
	resultadoTable.innerHTML = '';

	for (var i = 0; i < quantidadeUnidades; i++) {
		var areaTotalUnidade = unidades[i] + proporcao[i];
		resultadoTable.innerHTML += '<tr>' +
									 '<td>Unidade ' + (i+1) + '</td>' +
									 '<td>' + unidades[i].toFixed(2) + ' m²</td>' +
									 '<td>' + proporcao[i].toFixed(2) + ' m²</td>' +
									 '<td>' + areaTotalUnidade.toFixed(2) + ' m²</td>' +
									 '</tr>';
	}
}

document.getElementById('quantidadeUnidades').addEventListener('input', function() {
	var quantidadeUnidades = parseInt(this.value);
	var unidadesInputsDiv = document.getElementById('unidadesInputs');
	unidadesInputsDiv.innerHTML = '';

	for (var i = 0; i < quantidadeUnidades; i++) {
		var inputHtml = '<label for="tamanhoUnidade' + i + '">Unidade ' + (i+1) + ':</label>' +
						'<input type="number" id="tamanhoUnidade' + i + '" step="0.01" required><br>';
		unidadesInputsDiv.innerHTML += inputHtml;
	}
});