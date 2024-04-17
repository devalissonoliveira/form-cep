const inputCep = document.querySelector('#input-cep');
const inputRua = document.querySelector('#input-rua');
const inputBairro = document.querySelector('#input-bairro');
const inputCidade = document.querySelector('#input-cidade');
const inputUf = document.querySelector('#input-uf');

let cepDigitado;

inputCep.addEventListener('input',(e)=>{
    cepDigitado = e.target.value;

    if (cepDigitado.length < 8){
    inputRua.value = '';
    inputRua.classList.remove('com-valor');
    inputRua.removeAttribute('readonly', 'readonly');

    inputBairro.value = '';
    inputBairro.classList.remove('com-valor');
    inputBairro.removeAttribute('readonly', 'readonly');

    inputCidade.value = '';
    inputCidade.classList.remove('com-valor');
    inputCidade.removeAttribute('readonly', 'readonly');

    inputUf.value = '';
    inputUf.classList.remove('com-valor');
    inputUf.removeAttribute('readonly', 'readonly');

    } else {
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(response => response.json())
        .then(json => {        
            if (!json.logradouro=='' || !json.logradouro == undefined || !json.logradouro == null){
            inputRua.value = json.logradouro;
            inputRua.classList.add('com-valor');
            inputRua.setAttribute('readonly', 'readonly');
            }

            if (!json.bairro =='' || !json.bairro == undefined || !json.bairro == null){
            inputBairro.value = json.bairro;
            inputBairro.classList.add('com-valor');
            inputBairro.setAttribute('readonly', 'readonly');
            }

            if (!json.localidade =='' || !json.localidade == undefined || !json.localidade == null){
            inputCidade.value = json.localidade;
            inputCidade.classList.add('com-valor');
            inputCidade.setAttribute('readonly', 'readonly');
            }

            if (!json.uf =='' || !json.uf == undefined || !json.uf == null){
            inputUf.value = json.uf;
            inputUf.classList.add('com-valor');
            inputUf.setAttribute('readonly', 'readonly');
            }    
            })
        }
        
})
