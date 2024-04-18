/* eslint-disable no-undef, no-unused-vars */
//DECLARACIONES

// Variable donde se almacena el contenedor del mensaje
let snackbarContainer;
let canvas;
let actividad = document.getElementById("nombreActividad");
let descrito = document.getElementById("descripcion");
let hora = document.getElementById("fechaLimite");
let dic = [];
let filas = 0;
let tabla = document.getElementById("tabla");

let checkboxEstado = [];
// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  //localStorage.setItem("tareas", JSON.stringify(dic));
  //localStorage.setItem("checkbox", JSON.stringify(checkboxEstado));
  load();
  imprimirTabla();
  // Se obtiene el elemento HTML con id "mensaje-interactivo"
  snackbarContainer = select("#mensaje-interactivo").elt;
  // Se agrega el evento mouseClicked al elemento con id "enlace-interactivo"
  //select("#agregar").mouseClicked(guardarActividad);
}
function eliminarfila(i) {
  dic.splice(i, 1);
  checkboxEstado.splice(i, 1);
  imprimirTabla();
  salvame();
}
// FUNCIÓN QUE SE LLAMA AL PRESIONAR CLIC EN EL ENLACE
function guardarActividad() {
  if (actividad.value == "" || hora.value == "" || descrito.value == "") {
    //console.log("rellene");
    snackbarContainer.MaterialSnackbar.showSnackbar({
      message: "Por favor, rellene todos los campos",
    });
    return;
  } else {
    snackbarContainer.MaterialSnackbar.showSnackbar({
      message: "Actividad guardada",
    });
    //console.log("guardo");
    console.log(filas);
    dic[filas] = [actividad.value, descrito.value, hora.value];
    imprimirTabla();
    salvame();
  }
}

function imprimirTabla() {
  filas = dic.length;
  let rowCount = tabla.rows.length;

  // Eliminar filas desde abajo hacia arriba
  for (var i = rowCount - 1; i > 0; i--) {
    tabla.deleteRow(i);
  }
  for (var i = 0; i < filas; i++) {
    let hilera = document.createElement("tr");
    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");

    celda = document.createElement("td");
    celda.innerHTML = Object.values(dic)[i][0];
    hilera.appendChild(celda);
    celda = document.createElement("td");
    celda.innerHTML = Object.values(dic)[i][1];
    hilera.appendChild(celda);
    celda = document.createElement("td");
    celda.innerHTML = Object.values(dic)[i][2];
    hilera.appendChild(celda);
    celda2.innerHTML =
      "<label for='chkbox" +
      i +
      "' class='mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'> <input type='checkbox' id='chkbox" +
      i +
      "' class='mdl-checkbox__input'onchange='salvame()'> <span class='mdl-checkbox__label'>¿Completada?</span></label>";
    hilera.appendChild(celda2);
    celda3.innerHTML =
      "<button class='delete' onclick='eliminarfila(" +
      i +
      ")'>Eliminar</button>";
    hilera.appendChild(celda3);
    tabla.appendChild(hilera);
    document.getElementById("chkbox" + i).checked = checkboxEstado[i];
  }
  componentHandler.upgradeDom();
  //actualiza estilos
}

function salvame() {
  localStorage.setItem("tareas", JSON.stringify(dic));
  for (var i = 0; i < filas; i++) {
    checkboxEstado[i] = document.getElementById("chkbox" + i).checked;
  }
  localStorage.setItem("checkbox", JSON.stringify(checkboxEstado));
  console.log(checkboxEstado);
  console.log(JSON.stringify(dic));
}
function load() {
  var objeto = localStorage.getItem("tareas");
  if (objeto != null) {
    dic = JSON.parse(objeto);
  }
  var objeto2 = localStorage.getItem("checkbox");
  if (objeto2 != null) {
    checkboxEstado = JSON.parse(objeto2);
  }
}
