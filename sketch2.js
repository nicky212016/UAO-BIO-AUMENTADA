/* eslint-disable no-undef, no-unused-vars */
//DECLARACIONES

// Variable donde se almacena el contenedor del mensaje
let snackbarContainer;
let canvas;

// FUNCIÓN DE CONFIGURACIÓN
function goBack() {
  window.history.back();
}

function cargarModelo() {
  // Crea un nuevo elemento model-viewer
  var modelViewer = document.createElement("model-viewer");
  // Configura los atributos del modelo 3D
  console.log("Mostrando modelo 3D"); // Mensaje de depuración
  modelViewer.src = "exportado/LA TERCERA ES LA VENCIDA.gltf";
  modelViewer.setAttribute("ar", "");
  modelViewer.setAttribute("ar-modes", "scene-viewer webxr quick-look");
  modelViewer.setAttribute("camera-controls", "");
  modelViewer.style.width = "500px";
  modelViewer.style.height = "500px";
  // Agrega el modelo 3D al contenedor en tu página
  document.getElementById("modelo3D").appendChild(modelViewer);
}
