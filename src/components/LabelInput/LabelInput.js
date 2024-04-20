export default function LabelInput(props){
    return `
        <div class="${props.Class}">
            <label for="${props.labelFor}">${props.labelValue}</label>
            <input type="${props.inputType}" name="${props.inputName}" id="${props.inputId}">
        </div>
    `
}