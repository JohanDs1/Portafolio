
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    const emptyCamp = input.validity.valid;



    if (emptyCamp == false) {
        input.classList.add("formcontato_input--invalid");
        input.parentElement.querySelector(".formcontato__input-error").innerHTML = showErrorMessage(tipoDeInput, input);
        
    } else {
        input.classList.remove("formcontato_input--invalid");
        input.parentElement.querySelector(".formcontato__input-error").innerHTML = showErrorMessage(tipoDeInput, input);
        
    }

}


const listaErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError"
];

const errorMessages = {
    nombre: {
        patternMismatch: "Debe contener mas de 5 caracteres y máximo 50 caracteres. ",
        valueMissing: "Este campo no puede quedar vacío"
    },
    email: {
        valueMissing: "Este campo no puede quedar vacío",
        typeMismatch: "El correo no es válido debe ser asi Ej. mario@mario.com"
    },
    asunto: {
        valueMissing: "Este campo no puede quedar vacío",
        patternMismatch: "Debe contener mas de 10 caracteres y máximo 50 caracteres. "
    }
};

function showErrorMessage(tipoDeInput, input) {
    let mensaje = "";
    listaErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = errorMessages[tipoDeInput][error];
        }
    });
    return mensaje;
}












