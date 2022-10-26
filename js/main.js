class Servicio {
  constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre; 
      this.precio = precio;
      this.img = img;
      this.cantidad = 1; 
  }
}

const paginasWeb = new Servicio(1, "Paginas Web", 20000, "../images/website.jpg");
const portfolio = new Servicio(2, "Portfolio", 25000, "../images/portfolio.jpg");
const tiendaEcommerse = new Servicio(3, "Tienda Ecommerse", 40000, "../images//tiendanube.jpg");
const autoCad = new Servicio(4, "AutoCad Timon", 25000, "../images/timon.png");
const render = new Servicio(5, "Render 3D", 30000, "../images/render.jpg");
const calculos = new Servicio(6, "Calculos", 45000, "../images/velero.png");



const servicios = [paginasWeb, portfolio, tiendaEcommerse, autoCad, render, calculos];

//Creamos el array carrito 

let carrito = [];

if(localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}


const contenedorServicios = document.getElementById("contenedorServicios");


const mostrarServicios = () => {
  servicios.forEach((servicio) => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
      card.innerHTML = `
          <div class="card">
              <img src="${servicio.img}" class="card-img-top imgServicios" alt="${servicio.nombre}">
              <div class="card-body">
              <h5 class="card-title"> ${servicio.nombre} </h5>
              <p class="card-text"> ${servicio.precio} </p>
              <button class="btn colorBoton" id="boton${servicio.id}"> Agregar al Carrito </button>
              </div>
          </div>
      `
      contenedorServicios.appendChild(card);

      const boton = document.getElementById(`boton${servicio.id}`);
      boton.addEventListener("click", () => {
          agregarAlCarrito(servicio.id)
      })
  })
}

const agregarAlCarrito = (id) => {
  const servicio = servicios.find((servicio) => servicio.id === id);
  const servicioEnCarrito = carrito.find((servicio) => servicio.id === id);
  if(servicioEnCarrito){
    servicioEnCarrito.cantidad++;
  }else {
      carrito.push(servicio);
      localStorage.setItem("carrito",JSON.stringify(carrito));
  }
  calcularTotal();
}

mostrarServicios();

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML="";
  carrito.forEach((servicio) => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
      card.innerHTML = `
          <div class="card">
              <img src="${servicio.img}" class="card-img-top imgServicios" alt="${servicio.nombre}">
              <div class="card-body">
              <h5 class="card-title"> ${servicio.nombre} </h5>
              <p class="card-text"> ${servicio.precio} </p>
              <p class="card-text"> ${servicio.cantidad} </p>
              <button class="btn colorBoton" id="eliminar${servicio.id}"> Eliminar Servicio </button>
              </div>
          </div>
      `
      contenedorCarrito.appendChild(card);

      //Eliminar productos del carrito: 
      const boton = document.getElementById(`eliminar${servicio.id}`);
      boton.addEventListener("click", () => {
          eliminarDelCarrito(servicio.id);
      })
  })
  calcularTotal();
}

const eliminarDelCarrito = (id) => {
  const servicio = carrito.find((servicio) => servicio.id === id);
  const indice = carrito.indexOf(servicio);
  carrito.splice(indice, 1);
  mostrarCarrito();

  //LocalStorage:
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
  eliminarTodoElCarrito();
})

let boton=document.getElementById("finalizarCompra")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
  alert("Su compra a sido realizada con exito!!!!");
}

const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito();

  //LocalStorage. 
  localStorage.clear();
}


const total = document.getElementById("total");

const calcularTotal = () => {
  let totalCompra = 0; 
  carrito.forEach((servicio) => {
      totalCompra += servicio.precio * servicio.cantidad;
  })
  total.innerHTML = ` $${totalCompra}`;
}
