class Servicio {
  constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre; 
      this.precio = precio;
      this.img = img;
      this.cantidad = 1; 
  }
}

const paginasWeb = new Servicio(1, "Paginas Web", 80, "../images/website.jpg");
const portfolio = new Servicio(2, "Portfolio", 100, "../images/portfolio.jpg");
const tiendaEcommerse = new Servicio(3, "Tienda Ecommerse", 150, "../images//tiendanube.jpg");
const autoCad = new Servicio(4, "AutoCad Timon",90, "../images/timon.png");
const render = new Servicio(5, "Render 3D", 120, "../images/render.jpg");
const calculos = new Servicio(6, "Calculos", 180, "../images/velero.png");
const servicios = [paginasWeb, portfolio, tiendaEcommerse, autoCad, render, calculos];



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
              <p class="card-text"> USD ${servicio.precio} </p>
              <button class="btn colorBoton" id="boton${servicio.id}"> Agregar al Carrito </button>
              </div>
          </div>
      `
      contenedorServicios.appendChild(card);

      const boton = document.getElementById(`boton${servicio.id}`);
      boton.addEventListener("click", () => {
          agregarAlCarrito(servicio.id);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregaste este servicio al carrito',
            showConfirmButton: false,
            timer: 1000
          })
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
          
          Swal.fire({
            title: 'Estas seguro?',
            text: "Puedes volver a agregar este producto mas tarde si quieres",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              eliminarDelCarrito(servicio.id);
              Swal.fire(
                'Eliminado!',
                'El servicio ha sido elimiado',
                'success'
              )
            }
          })
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
  Swal.fire({
    title: 'Estas seguro de eliminar los servicios del carrito?',
    text: "Esta accion no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarTodoElCarrito();
      Swal.fire(
        'Eliminado!',
        'El carrito ha sido vaciado',
        'Exitoso!!'
      )
    }
  })
  
})

let boton=document.getElementById("finalizarCompra")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
  Swal.fire({
    title: 'Gracias por su confianza!!',
    text: 'Su compra a sido realizada con exito!!!!',
    imageUrl: '../images/logolp.png',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
  
}

const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito();

  //LocalStorage. 
  localStorage.clear();
}


const criptoYa="https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar");
setInterval(()=> {
  fetch(criptoYa)
  .then(response=>response.json())
  .then(({solidario})=>{
    divDolar.innerHTML=`
    <h4>Tipo de cambio</h4>
    <p>Dolar solidario: ${solidario}</p>
    `
  })
  .catch(error=> console.error())
})

const total = document.getElementById("total");

const calcularTotal = () => {
  let totalCompra = 0; 
  carrito.forEach((servicio) => {
      totalCompra += servicio.precio * servicio.cantidad;
  })
  total.innerHTML = ` USD ${totalCompra}`;
}
