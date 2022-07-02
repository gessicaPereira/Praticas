const pais = document.querySelector("#pais")

let selcionado = pais.options.selectedIndex

console.log(pais.options[selcionado])

const passaporte = document.querySelector("#passaporte")

const padraoPassaporte = new RegExp("[a-zA-Z]{2}[0-9]{12}")

const enviar= document.querySelector("#enviar")

enviar.addEventListener("click", (e) =>{
    e.preventDefault()
    e.stopPropagation(

        alert(padraoPassaporte.test(passaporte.value))
    )
})