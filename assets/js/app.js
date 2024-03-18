import { valida } from "./validacion.js";
const BtnEnvio = document.querySelector(".formcontato__botao")
const inputs = document.querySelectorAll("input");
const textArea =  document.querySelector("textarea");
const info = [];
const Form = document.querySelector(".formcontato__form")


inputs.forEach(input => { 
    input.addEventListener('keyup', (event) => {
        const inputElement = event.target;
        valida(inputElement);
        comprobacion()
    });
});
    

textArea.addEventListener('keyup',validacionTextArea)

function validacionTextArea  () {
    const contenido = textArea.value;
    const errorArea = document.querySelector(".formcontato__textarea__error")
  if(contenido == ""){
    textArea.classList.add("formcontato__textarea--invalid")
    errorArea.textContent = "Este campo no puede quedar vacio";
  }else{
    if(contenido.length < 10){
        textArea.classList.add("formcontato__textarea--invalid")
        errorArea.textContent = "Mensaje demasiado corto al menos debe contener  minimo 20 caracteres y maximo 300 caracteres";
        errorArea.style.display = 'block';
    }else{
        textArea.classList.remove("formcontato__textarea--invalid")
        errorArea.textContent = "";
        errorArea.style.display = 'none';
    }
  }

}
 
function getInfo(){
    inputs.forEach(input=>{
        valida(input)
        info.push(input.value)
    })
    info.push(textArea.value);
}

   //Funcionalidad para que se desbloquee el boton de enviar mensaje



const comprobacion = () => { 
    
    let desabilitar = false;
    if(Form.nombre.value === ""){
        desabilitar= true
    }
    if(Form.email.value === ""){
        desabilitar= true
    }
    if(Form.asunto.value === ""){
        desabilitar= true
    }
    if(Form.mensaje.value === ""){
        desabilitar= true
    }
    if(desabilitar===true){
        BtnEnvio.disabled = true
    }else{
        BtnEnvio.disabled = false
    }


}

Form.addEventListener("keyup",comprobacion)

const submitInfo = (e)=>{
    e.preventDefault();
    getInfo()
    if(info.every((value) => value != '')){
        console.log(info)
        inputs.forEach(input=> input.value = "")
        validacionTextArea();
        textArea.value = "";
        alert("Se ha enviado al informacion (a la consola por el momento)")
    }else{
        
        alert("Por favor, complete todos los campos")
        validacionTextArea();

    }
}


BtnEnvio.addEventListener("click",submitInfo);
