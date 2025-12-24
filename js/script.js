 
 // ⏳ FECHA DEL REGALO
const fechaRegalo = new Date(Date.now() + 5000);
const CONTRASENA = "070325";

// CONTADOR
function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaRegalo - ahora;

  if (diferencia <= 0) {
    document.getElementById("contador").style.display = "none";
    document.getElementById("login").style.display = "block";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("tiempo").textContent =
    `${dias} días ${horas} h ${minutos} m ${segundos} s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// 🔒 VERIFICAR CONTRASEÑA
function verificar() {
  const pass = document.getElementById("password").value;

  if (pass === CONTRASENA) {
    document.getElementById("login").style.display = "none";
    document.getElementById("pantalla-carta").style.display = "block";
  } else {
    document.getElementById("error").textContent =
      "Contraseña incorrecta, mi amor 💔";
  }
}

/* ❤️ JS DE LA CARTA NUEVA */
const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".sobre") ||
    e.target.matches(".solapa-derecha") ||
    e.target.matches(".solapa-izquierda") ||
    e.target.matches(".corazon")
  ) {
    envoltura.classList.toggle("abierto");
    envoltura.classList.add("desactivar-sobre");

    if (!carta.classList.contains("abierta")) {
      setTimeout(() => {
        carta.classList.add("mostrar-carta");

        setTimeout(() => {
          carta.classList.remove("mostrar-carta");
          carta.classList.add("abierta");
        }, 500);
      }, 1000);
    }
  } else if (e.target.matches(".envoltura-sobre *")) {
    envoltura.classList.remove("abierto");
    envoltura.classList.remove("desactivar-sobre");

    if (carta.classList.contains("abierta")) {
      carta.classList.add("cerrando-carta");

      setTimeout(() => {
        carta.classList.remove("cerrando-carta");
        carta.classList.remove("abierta");
      }, 500);
    }
  }
});
