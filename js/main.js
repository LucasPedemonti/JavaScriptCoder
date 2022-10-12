let nombreUser= prompt("Ingresa tu nombre");
console.log("Bienvenid@ "+ nombreUser);

let mailUser= prompt("Ingresa tu mail", "@gmail.com");
console.log("mail: "+mailUser);

//Array de objetos de los Servicios
const servicios = [
  {
    id: 1,
    nombre: "Página Web",
    precio: 20000,
  },
  {
    id: 2,
    nombre: "Portfolio",
    precio: 25000,
  },
  {
    id: 3,
    nombre: "Ecommerse",
    precio: 40000,
  },
  {
    id: 4,
    nombre: "Planos Autocad",
    precio: 25000,
  },
  {
    id: 5,
    nombre: "Render 3D",
    precio: 30000,
  },
];

//Variables globales
let comenzar = true;
const textoConfirmar = "\nSí (Aceptar)\nNo (Cancelar)";
let confirmarSalir = false;
let confirmarPedido = false;
let numDni;
let mayorEdad;
let eleccion; //variable dinámica - almacena la última elección del cliente sobre el menú
let pedido = []; //Array para almacenar pedido
let totalPedido = 0;

//Funciones

//función opción comenzar o salir
function comenzarApp() {
  comenzar = confirm("¡Hola!\n¿Queres solicitar un servicio?" + textoConfirmar);
  return comenzar;
}

//función genérica para confirmar si el cliente desea salir en distintas instancias del proceso
function salida(volverA) {
  confirmarSalir = confirm("¿Querés salir de la App?" + textoConfirmar);
  if (confirmarSalir) {
    alert("Saludos \nLucas Pedemonti - Desarrollador web");
  } else {
    volverA();
  }
  return confirmarSalir;
}

//función ingresar numero de mesa (Sólo hay numeros de mesas del 1 al 20 inclusive)
function dni() {
  numDni = parseInt(prompt("Por favor indicá el número de tu DNI:"));
  while (numDni > 100000000 || isNaN(numDni) || numDni === 0) {
    numDni = parseInt(
      prompt(
        "El número ingresado es incorrecto.\nPor favor volvé a indicar el número de tu DNI:"
      )
    );
  }
}

//Confirmar numero de Mesa
function confirmarDni() {
  let confirDni = confirm(
    `¿Este es tu numero de DNI ${numDni}?\n${textoConfirmar}`
  );
  while (confirDni == false) {
    dni();
    confirDni = confirm(
      `¿Tu numero de DNI es ${numDni}?\n${textoConfirmar}`
    );
  }
}

//Validar Edad - Se pide porque hay productos que son sólo para mayores de edad
function validarEdad() {
  mayorEdad = confirm("¿Tenés 18 años o más?" + textoConfirmar);
  if (mayorEdad) {
    alert(
      "Indicaste que sos MAYOR de edad.\nPara confirmar selecciona Aceptar"
    );
  } else {
    alert(
      "Indicaste que sos MENOR de edad.\nPara confirmar selecciona Aceptar"
    );
  }
  return mayorEdad;
}

//Menú por prompt obtiene los datos del array de objetos "menu"
function opcionesDeServicio() {
  let textoServicio = "Ingresá el N° de Servicio que te interesa:\n\n";
  for (producto of servicios) {
    textoServicio += `${producto.id} - ${producto.nombre} - $ ${producto.precio}\n`;
  }
  eleccion = prompt(textoServicio);
  return eleccion;
}

//Verifica que la elección de cliente existe y retorna el producto completo
function buscarServicio() {
  const productoCliente = eleccion;
  if (eleccion != null) {
    const productoSeleccionado = servicios.filter(
      (producto) => producto.id == productoCliente
    );
    return productoSeleccionado;
  }
}

//Agrega los productoSeleccionados al pedido
function agregarAlPedido() {
  const agregar = buscarServicio();
  if (eleccion == null) {
    salida(hacerPedido);
  } else if (agregar.length > 0) {
    if (mayorEdad === false && agregar[0].mayorEdad === true) {
      alert(
        `Sos menor de edad, no podés obtener el servicio.`
      );
      if (totalPedido > 0) {
        enviarPedido();
      }
    } else {
      pedido.push(agregar);
      alert(
        `El producto, ${agregar[0].nombre} fue cargado con éxito a tu pedido`
      );
      totalPedido = totalPedido + agregar[0].precio;
      enviarPedido();
    }
  } else {
    alert("El número de producto ingresado no existe");
    if (totalPedido > 0) {
      enviarPedido();
    }
  }
  return totalPedido;
}

//Función que retorna booleano de acuerdo si el cliente quiere finalizar o seguir con el pedido
//Muestra al cliente el detalle de los productos y total
function enviarPedido() {
  let textoPedido =
    "¿Terminaste tu pedido?\nSí, enviar. (Aceptar)\nNo, no terminé mi pedido (Cancelar)\n\nTu pedido hasta ahora:\n";
  for (producto of pedido) {
    let i = 0;
    textoPedido += `${producto[i].nombre} - $ ${producto[i].precio}\n`;
    i++;
  }
  confirmarPedido = confirm(`${textoPedido}\nTotal $ ${totalPedido}`);
  return confirmarPedido;
}

//flujo para seguir agregando productos
function hacerPedido() {
  opcionesDeServicio();
  buscarServicio();
  agregarAlPedido();
}

//Función para concluir pedido y opción de empezar uno nuevo o salir de la App
function terminarPedido() {
  let textoTerminar = confirm(
    `El pedido se realizó con exito!\nEl total es $ ${totalPedido}\nEn breve me pondré en contacto.\n\n¿Querés realizar otro pedido?\n${textoConfirmar}`
  );
  if (textoTerminar) {
    totalPedido = 0;
    pedido = [];
    confirmarPedido = false;
    secuenciaApp();
  } else {
    alert("Saludos \nLucas Pedemonti - Desarrollador web");
  }
}

//Flujo de procesos para que corra la App
function secuenciaApp() {
  comenzarApp();
  if (comenzar === true) {
    dni();
    confirmarDni();
    validarEdad();
    while (confirmarSalir === false && confirmarPedido === false) {
      hacerPedido();
    }
  } else {
    salida(secuenciaApp);
  }
  if (confirmarPedido === true) {
    terminarPedido();
  }
}

/* LLAMADO A FUNCION */
secuenciaApp();
