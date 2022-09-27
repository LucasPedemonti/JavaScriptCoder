let nombreUser= prompt("Ingresa tu nombre");
console.log("Bienvenid@ "+ nombreUser);

let mailUser= prompt("Ingresa tu mail", "@gmail.com");
console.log("mail: "+mailUser);

let servicio1;
let confirServ;
function elegirServicio() {
  servicio1 = parseInt(prompt("¿Que servicio te interesa? \n1-Desarrollo Web  \n2-Arquitectura naval"));
  while (servicio1 > 2 || isNaN(servicio1) || servicio1 == 0) { 
    servicio1 = parseInt (prompt("El Servicio que elegiste no existe.\nPor favor volvé a intentarlo: \n1-Desarrollo Web  \n2-Arquitectura naval"));
  }
}
elegirServicio()
//Confirmar
function confirmarServicio() {
  confirServ = prompt("Queres averiguar sobre opcion "+ servicio1+" \n1-Para Confirmar\n2-Para Volver a corregir");
  while (confirServ != 1) {
    switch (confirServ) {
      case "2":
        elegirServicio();
      default:
        confirServ = prompt("Ingresaste un valor no valido \n1-Para Confirmar\n2-Para volver a elegir un servicio");
    }
  }
}
confirmarServicio()

function opciones() {
  producto = prompt("1-Pagina Web \n2-Portfolio\n3-Tienda Ecommerse\n(N) Para cancelar \n(Y) Para enviar pedido");
  return producto;
}
let totalPresupuesto=0;
function opPedido() {
  while (
    producto != "N" &&
    producto != "n" &&
    producto != "Y" &&
    producto != "y" ) {
    switch (producto) {
      case "1":
        alert("Seleccionaste Pagina Web valor $25000");
        totalPresupuesto= totalPresupuesto+25000;
        break;
      case "2":
        alert("Seleccionaste Portfolio valor $20000");
        totalPresupuesto= totalPresupuesto+20000;
        break;
      case "3":
        alert("Seleccionaste Tienda Ecommerce valor $40000")
        totalPresupuesto= totalPresupuesto+4000;
        break;
      default:
        alert("Esta opcion no es valida")
    }
    opciones();
  }
 return totalPresupuesto;
}
function terminarPresupuesto() {
  if ((producto == "y" || producto == "Y") && totalPresupuesto != 0) {
    alert("Cotizacion de servicios enviado con éxito el total es $"+totalPresupuesto+ "\nA la brevedad me estare comunidando con usted");
  } else if ((producto == "y" || producto == "Y") && totalPresupuesto == 0) {
    alert("No cargaste ningún producto");
  }
  if (producto == "n" || producto == "N") {
    alert("Cancelaste el presupuest");
    totalPresupuesto = 0;
  }
  return totalPresupuesto;
}
function enviarPresupuesto() {
  opciones();
  opPedido();
  terminarPresupuesto();
}
enviarPresupuesto();
function salirApp() {
  let salir;
  do {
    salir = prompt("(1) Para nuevo presupuesto\n(2) Para Salir");
    if (salir == "1") {
      totalPresupuesto = 0;
      enviarPresupuesto();
      salirApp();
    } else if (salir == "2") {
      alert("Saludos \nLucas Pedemonti - Desarrollador web");
    } else {
      alert("Opción incorrecta!");
    }
  } while (salir != "2" && salir != "1");
  return salir;
}
salirApp();
