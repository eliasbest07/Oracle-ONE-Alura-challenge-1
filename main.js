const textInput = document.getElementById('inputext').value;
const textShow = document.getElementById('showtext');
const btnEncriptar= document.getElementById('btn-input');
const btnDesencriptar= document.getElementById('btn-desenc');
const btnCopiar= document.getElementById('btncopy'); 
const btnInfo= document.getElementById('btninfo'); 
const btnPasar= document.getElementById('btnpase'); 
const btnClearShow = document.getElementById('btnclearshow'); 
const btnClearInput = document.getElementById('btnclearinput'); 
var entrada="";
var resultado="";
var respuesta="";

document.getElementById('inputext').addEventListener("input",function(){
  entrada=this.value;
});
const claveEncriptar ={
  "a":"ai",
  "e":"enter",
  "i":"imes",
  "o":"ober",
  "u":"ufat",
}
function encriptar(){
   resultado="";
  for (var i=0; i< document.getElementById('inputext').value.length; i++){
    if(claveEncriptar[document.getElementById('inputext').value[i]]===undefined){
      resultado+=document.getElementById('inputext').value[i];
    }else{
      resultado+=claveEncriptar[document.getElementById('inputext').value[i]];
    }
  }
}
/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"` listo
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/
function desencriptar(){
  respuesta="";
  var mensajeenc= document.getElementById('inputext').value; 
  for(var i=0; i< mensajeenc.length;i++){
    if(mensajeenc[i]=="a"){
        if(mensajeenc[i]+mensajeenc[i+1] == "ai"){
          respuesta += "a";
          i=i+1;
          continue;
        }
    }
    if(mensajeenc[i]=="e"){
      if(mensajeenc[i]+mensajeenc[i+1] == "en"){
        if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2] == "ent"){
          if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2]+mensajeenc[i+3] == "ente"){
            if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2]+mensajeenc[i+3]+mensajeenc[i+4] == "enter"){
              respuesta += "e";
              i=i+4;
              continue;
            }
          }
        }
      }
    }
    if(mensajeenc[i]=="i"){
      if(mensajeenc[i]+mensajeenc[i+1] == "im"){
        if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2] == "ime"){
          if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2]+mensajeenc[i+3] == "imes"){
              respuesta += "i";
              i=i+3;
              continue;
          }
        }
      }
    }
    if(mensajeenc[i]=="o"){
      if(mensajeenc[i]+mensajeenc[i+1] == "ob"){
        if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2] == "obe"){
          if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2]+mensajeenc[i+3] == "ober"){
              respuesta += "o";
              i=i+3;
              continue;
          }
        }
      }
    }
    if(mensajeenc[i]=="u"){
      if(mensajeenc[i]+mensajeenc[i+1] == "uf"){
        if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2] == "ufa"){
          if(mensajeenc[i]+mensajeenc[i+1]+mensajeenc[i+2]+mensajeenc[i+3] == "ufat"){
              respuesta += "u";
              i=i+3;
              continue;
          }
        }
      }
    }
    respuesta +=mensajeenc[i];
  }
}

btnDesencriptar.onclick = function(){
  if(document.getElementById('inputext').value!=""){
    document.querySelector("img").style.display = "none";
  }
  desencriptar();
  textShow.innerHTML = respuesta;
  if(textShow.scrollHeight <= textShow.clientHeight ){
    textShow.style.overflow="hidden";  
  }else{
    textShow.style.innerText=this.value; 
    textShow.style.overflow="scroll";  
    textShow.style.overflowX="hidden";   
  }
}
btnEncriptar.onclick = function(){ 
  if(document.getElementById('inputext').value!=""){
    document.querySelector("img").style.display = "none";
  }
  encriptar();
    textShow.innerHTML = resultado;
    if(textShow.scrollHeight <= textShow.clientHeight ){
      textShow.style.overflow="hidden";  
    }else{
      textShow.style.innerText=this.value; 
      textShow.style.overflow="scroll";  
      textShow.style.overflowX="hidden";   
    }
 };
 btnClearInput.onclick = function(){
  
  document.getElementById('inputext').value="";
}

 btnCopiar.onclick = function(){ 
  navigator.clipboard.writeText(document.getElementById('showtext').innerHTML)
  .then(() => {
    copiado();
   // alert("Mensaje copiado al portapapeles Cntr+P para pagar");
   // console.log('Mensaje copiado al portapapeles');
  })
  .catch(err => {
    alert("Error al copiar el mensaje al portapapeles: ", err);
   // console.error('Error al copiar el texto al portapapeles: ', err);
  });
 // textShow.innerHTML ="hola";
};
function copiado(){
  var textinf=document.getElementById('text');
  textinf.style.color = "#cfff21";
  textinf.innerHTML="  Mensaje copiado al portapapeles";
  setInterval(function(){
    textinf.style.color = "white";
    textinf.innerHTML="  Introduce solo letras minúsculas y sin acentos";
}, 2500);
}
btnPasar.onclick = function(){ 
  var pase=textShow.innerHTML;
  
  textShow.innerText=document.getElementById('inputext').value; 

  document.getElementById('inputext').value=pase; 
  
}
btnInfo.onclick = function(){ 
  document.getElementById('inputext').value= "Las 'llaves' de encriptación que utilizaremos son las siguientes: \n -La letra 'e' es convertida para 'enter' \n -La letra 'i' es convertida para 'imes' \n -La letra 'a' es convertida para 'ai' \n-La letra 'o' es convertida para 'ober' \n-La letra 'u' es convertida para 'ufat' \n **Requisitos:** \n- Debe funcionar solo con letras minúsculas \n- No deben ser utilizados letras con acentos ni caracteres especiales \n- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.  \n\nPor ejemplo: \n'gato' => 'gaitober' \n'gaitober' => 'gato'";
  
}
btnClearShow.onclick =  function(){
  document.querySelector("img").style.display = "block";
  document.getElementById('showtext').innerHTML="";
}
function addGradient() {
   // var element = document.querySelector(".titulo");
    textElement.classList.add("gradient");
}

//   function getText(){
//          console.log("press boton");
//     textShow.textContent = textInput.innerText;
//    // textShow//=textInput;
//     //textInput = "<p id='showtext' class='text-gradient-02'>textShow</p>";
//    // textInput.replaceWith(textShow);
// }