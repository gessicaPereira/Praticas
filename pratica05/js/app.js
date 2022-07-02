const lista= document.querySelector("ul");

const itensLista1 = lista.querySelectorAll("li");

for(let i = 0; i < itensLista1.length; i++) {
    if((i % 2) === 0){
        itensLista1[i].style.fontVariantCaps = 900;
    }
}


//V2
const itensLista2 = document.querySelectorAll("ol li")