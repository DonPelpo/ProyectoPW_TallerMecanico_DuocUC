const nombre= document.getElementById("name")
const email= document.getElementById("email")
const pass= document.getElementById("password")
const form = document.getElementById ("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("enviar", e => 
{
    e.preventDefault()
    if (nombre.Value.length < 6){
        alert("nombtr muy cortos")
    }
} )
