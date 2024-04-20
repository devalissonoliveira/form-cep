export default function Form(props){
    return `
        <form id=${props.id}>
            <h1>${props.titulo}</h1>
            ${props.children.join('')}
        </form>
    `
}