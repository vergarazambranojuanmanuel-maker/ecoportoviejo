function irGuia() {
  window.location = "guia.html";
}

function mostrar(n) {
  var r = document.getElementById("r" + n);
  if (r.style.display == "block") {
    r.style.display = "none";
  } else {
    r.style.display = "block";
  }
}

function validar() {
  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");
  var error = document.getElementById("error");
  var ok = true;
  nombre.className = "";
  correo.className = "";
  if (nombre.value == "") {
    nombre.className = "error-campo";
    ok = false;
  }
  if (correo.value.indexOf("@") == -1) {
    correo.className = "error-campo";
    ok = false;
  }
  if (!ok) {
    error.innerHTML = "Revisa los campos";
    return false;
  }
  alert("Mensaje enviado");
  return false;
}
