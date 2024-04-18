/* eslint-disable no-undef, no-unused-vars */
//DECLARACIONES

// Variable donde se almacena el contenedor del mensaje
let snackbarContainer;
let canvas;
let tarjeta1 = document.getElementById("consejo1");
let tarjeta2 = document.getElementById("consejo2");
let tarjeta3 = document.getElementById("consejo3");
let tarjeta4 = document.getElementById("consejo4");
let tarjeta5 = document.getElementById("consejo5");
let tarjeta6 = document.getElementById("consejo6");

let consejo_abierto1 = false;
let consejo_abierto2 = false;
let consejo_abierto3 = false;
let consejo_abierto4 = false;
let consejo_abierto5 = false;
let consejo_abierto6 = false;

var tarjeta = document.getElementById("consejo");

var btn_anadir = document.getElementById("botonConsejo");
var btn_Salir = document.getElementById("salirConsejo");

// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  select("#salir").mouseClicked(cerrarTarjeta);
}

function abrirTarjeta(id) {
  switch (id) {
    case "consejo1":
      if (!consejo_abierto1) {
        document.getElementById("consejo1").style.display = "flex";
        consejo_abierto1 = true;
      }
      break;
    case "consejo2":
      if (!consejo_abierto2) {
        document.getElementById("consejo2").style.display = "flex";
        consejo_abierto2 = true;
      }
      break;
    case "consejo3":
      if (!consejo_abierto3) {
        document.getElementById("consejo3").style.display = "flex";
        consejo_abierto3 = true;
      }
      break;
    case "consejo4":
      if (!consejo_abierto4) {
        document.getElementById("consejo4").style.display = "flex";
        consejo_abierto4 = true;
      }
      break;
    case "consejo5":
      if (!consejo_abierto5) {
        document.getElementById("consejo5").style.display = "flex";
        consejo_abierto5 = true;
      }
      break;
    case "consejo6":
      if (!consejo_abierto6) {
        document.getElementById("consejo6").style.display = "flex";
        consejo_abierto6 = true;
      }
      break;
    default:
      break;
  }
}

function cerrarTarjeta(id) {
  switch (id) {
    case "consejo1":
      document.getElementById("consejo1").style.display = "none";
      consejo_abierto1 = false;
      break;
    case "consejo2":
      document.getElementById("consejo2").style.display = "none";
      consejo_abierto2 = false;
      break;
    case "consejo3":
      document.getElementById("consejo3").style.display = "none";
      consejo_abierto3 = false;
      break;
    case "consejo4":
      document.getElementById("consejo4").style.display = "none";
      consejo_abierto4 = false;
      break;
    case "consejo5":
      document.getElementById("consejo5").style.display = "none";
      consejo_abierto5 = false;
      break;
    case "consejo6":
      document.getElementById("consejo6").style.display = "none";
      consejo_abierto6 = false;
      break;
    default:
      break;
  }
}
