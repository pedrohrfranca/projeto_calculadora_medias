const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images-2/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images-2/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = []
const notas = []
const spanAprovado = '<spanc class= "Resultado aprovado">Aprovado</span>' ;
const spanReprovado = '<spanc class= "Resultado reprovado">Reprovado</span>' ;
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalLinha();
    atualizaTabela();
    atualizaMediaFinal();
});


function adicionalLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        
    }

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas +=linha;

    inputNotaAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMediaFinal () {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

    
}