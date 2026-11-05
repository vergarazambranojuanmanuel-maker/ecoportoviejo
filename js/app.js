"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var preguntas = document.querySelectorAll(".pregunta");
  preguntas.forEach(function (boton) {
    var panel = document.getElementById("r" + boton.id.slice(1));
    panel.style.display = "none";
    boton.addEventListener("click", function () {
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  var form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      var nombre = document.getElementById("nombre");
      var correo = document.getElementById("correo");
      var error = document.getElementById("error");
      var ok = true;
      nombre.className = "";
      correo.className = "";
      if (nombre.value.trim() === "") { nombre.className = "error-campo"; ok = false; }
      if (correo.value.indexOf("@") === -1) { correo.className = "error-campo"; ok = false; }
      error.textContent = ok ? "" : "Error: revisa el nombre y el correo electrónico.";
      if (ok) { alert("Mensaje enviado"); }
    });
  }
});
