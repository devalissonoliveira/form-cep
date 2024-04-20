import FormCep from "./src/components/FormCep/FormCep.js";
import ResetValueInput from "./src/components/ResetValueInput/ResetValueInput.js";
import SetValueInput from "./src/components/SetValueInput/SetValueInput.js";
const body = document.querySelector('body');

body.innerHTML = FormCep();
const inputCep = document.querySelector('#input-cep');
const inputRua = document.querySelector('#input-rua');
const inputBairro = document.querySelector('#input-bairro');
const inputCidade = document.querySelector('#input-cidade');
const inputUf = document.querySelector('#input-uf');

inputCep.addEventListener('input',(e)=>{
    let cepDigitado = e.target.value;
    const arrayInputs = [inputRua, inputBairro, inputCidade, inputUf];

    arrayInputs.map(input => {ResetValueInput(input)});

    if (cepDigitado.length === 8 ){
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
            .then(response => response.json())
                .then(json => {
                    SetValueInput(json.logradouro, inputRua);        
                    SetValueInput(json.bairro, inputBairro);    
                    SetValueInput(json.localidade, inputCidade);
                    SetValueInput(json.uf, inputUf); 
                })
    }
        
})