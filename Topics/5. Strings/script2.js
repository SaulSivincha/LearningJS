// "admin juan perez invitado "
// Trabajador: Juan Perez

let entrada1 = "admin juan perez invitado ";
let entrada2 = "   maria lopez   ";
let entrada3 = "ADMIN maria LOPEZ invitado";
let entrada4 = "   admin   lopez   invitado   ";
let entrada5 = "   invitado   pedro   ";
let entrada6 = "admin admin juan perez invitado invitado";
let entrada7 = "   ";
let entrada8 = "luis";
let entrada9 = "   admin   juan   carlos   perez   invitado   ";
let entrada10 = "maria del carmen lopez invitado";

function formatearInvitaciones(...nombres) {
  for (let nombre of nombres) {
    if (nombre.trim().length === 0) continue;
    else {
      try {
        nombre = nombre
          .trim()
          .split(" ")
          .filter((palabra) => {
            return (
              palabra !== "" &&
              palabra.toLowerCase() !== "admin" &&
              palabra.toLowerCase() !== "usuario" &&
              palabra.toLowerCase() !== "invitado"
            );
          })
          .map((palabra) => {
            return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
          })
          .join(" ");

        if (nombre.length > 0) {
          console.log("Trabajador: " + nombre);
        }
      } catch (e) {
        console.log("ocurrio un error");
      }
    }
  }
}

// llamadas de prueba
formatearInvitaciones(
  entrada1,
  entrada2,
  entrada3,
  entrada4,
  entrada5,
  entrada6,
  entrada7,
  entrada8,
  entrada9,
  entrada10,
);
