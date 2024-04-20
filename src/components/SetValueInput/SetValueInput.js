export default function SetValueInput(dataJson, input){
    if (!dataJson=='' || !dataJson == undefined || !dataJson == null){
        input.value = dataJson;
        input.classList.add('com-valor');
        input.setAttribute('readonly', 'readonly');
        }
}