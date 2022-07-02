const formExemplo = document.querySelector("#form-exempo")
const 

const isEmpty = form => {
    let status = false
    for(let field of form){
        if(!field.value && !field instanceof HTMLButtonElement){
            status = true
        }
    }
    return status
}

const isAccedpted = () => {
   return document.querySelector("#invalidCcheck").checked === "checked"
}

const desabilitar = () => {
    if(isEmpty(formExemplo)){
        document.querySelector("#btn-enviar").classList.add("disabled")
    }else {
        document.querySelector("#btn-enviar").classList.remove("disabled")
    }
}

//validação do envio
formExemplo.addEventListener("submit", evento => {
    if(isEmpty(formExemplo)) {
    evento.preventDefault
    }
})

formExemplo.addEventListener("change", desabilitar, null, formExemplo)

desabilitar()

