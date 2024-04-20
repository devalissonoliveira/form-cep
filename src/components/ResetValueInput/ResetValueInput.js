export default function ResetValueInput(input){    
        input.value = '';
        input.classList.remove('com-valor');
        input.removeAttribute('readonly', 'readonly');    
}