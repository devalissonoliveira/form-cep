import Form from "../Form/Form.js";
import LabelInput from "../LabelInput/LabelInput.js";

export default function FormCep (){
    return Form({
        titulo: "Preencha seu CEP",
        id: "form-cep",
        children: [
            LabelInput({Class:"input-group",
             labelFor:"input-cep", labelValue:"CEP", inputType:"number", inputName:"cep", inputId:"input-cep",}),

            LabelInput({Class:"input-group", labelFor:"input-ru", labelValue:"Rua", inputType:"text", inputName:"rua", inputId:"input-rua"}),

            LabelInput({Class:"input-group", labelFor:"input-bairro", labelValue:"Bairro", inputType:"text", inputName:"bairro", inputId:"input-bairro"}),

            LabelInput({Class:"input-group", labelFor:"input-cidade", labelValue:"Cidade", inputType:"text", inputName:"cidade", inputId:"input-cidade"}),

            LabelInput({Class:"input-group", labelFor:"input-uf", labelValue:"UF", inputType:"text", inputName:"uf", inputId:"input-uf"}),
        ]
    })
}