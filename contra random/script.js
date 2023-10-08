const botonRandom = document.getElementById("boton")
const botonContra1 = document.getElementById("botonpass1") 
const botonContra2 = document.getElementById("botonpass2") 
const botonContra3 = document.getElementById("botonpass3") 
const botonContra4 = document.getElementById("botonpass4")
const botones = document.getElementsByClassName("button-pass")

const caracteres = ["A","a","B","b","c","C","d","D","E","e","F","f","g","G","H","h","i","I","j","J","k","K","M","m","N","n","o","O","p","P","Q","q","R","r","S","s","t","T","u","U","V","v","X","x","Y","y","z","Z","@","$","!","%","1","2","3","4","5","6","7","8","9","0"]

botonRandom.addEventListener("click", function(){
  generar()
  resetear()
})


function copy(id){
let copia = document.getElementById(id)
copia.focus()
navigator.clipboard.writeText(copia.innerText).then(() => {
    resetear()
    copia.style.backgroundColor="#1c232b"
  })
  .catch(() => {
    alert("something went wrong");
  });;    
}

function random(){
  pintar()
  let resultado ="" 
  for(let i = 0; i<16; i++){
    resultado +=caracteres[ Math.floor(Math.random() * caracteres.length)]
  }
  return resultado 
    
}
function resetear(){
  botonContra4.style.backgroundColor= "#273549" 
  botonContra3.style.backgroundColor= "#273549"
  botonContra2.style.backgroundColor= "#273549"
  botonContra1.style.backgroundColor= "#273549"

}
function pintar(){
  botonContra1.style.color="#10B981"
  botonContra2.style.color="#10B981"
  botonContra3.style.color="#10B981"
  botonContra4.style.color="#10B981"
}

function generar(){
  botonContra1.innerText = random()  
  botonContra2.innerText = random()   
  botonContra3.innerText = random()   
  botonContra4.innerText = random()
}
