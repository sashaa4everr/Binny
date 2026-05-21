// DATOS FAKE TEMPORALES

let peso = 24;
let botellas = 82;
let puntos = 777;


// ACTUALIZAR HTML

document.getElementById("peso-total").innerHTML = peso + "kg";

document.getElementById("botellas").innerHTML = botellas;

document.getElementById("puntos").innerHTML = puntos;


// GRÁFICA

const ctx = document.getElementById('grafica');

new Chart(ctx, {

    type: 'line',

    data: {

        labels: [
            'Lun',
            'Mar',
            'Mie',
            'Jue',
            'Vie',
            'Sab',
            'Dom'
        ],

        datasets: [{

            label: 'kg reciclados',

            data: [2,4,3,6,5,7,4],

            borderWidth: 3

        }]
    },

    options: {

        responsive:true

    }

});