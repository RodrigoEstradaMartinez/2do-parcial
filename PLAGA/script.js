let numero = 0;

let diapositivas = document.querySelectorAll(".diapositiva");

let botones = document.querySelectorAll(".botones button");

function mostrarDiapositiva() {

    diapositivas.forEach(function(diapositiva) {
        diapositiva.classList.remove("activa");
    });

    diapositivas[numero].classList.add("activa");

    botones[0].disabled = numero === 0;

    botones[1].disabled = numero === diapositivas.length - 1;
}

function siguiente() {

    if (numero < diapositivas.length - 1) {
        numero++;
        mostrarDiapositiva();
    }

}

function anterior() {

    if (numero > 0) {
        numero--;
        mostrarDiapositiva();
    }

}

mostrarDiapositiva();