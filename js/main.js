//función tradicional
/*function saludo(param) {
    //codigo a ejecutar
  }// palabra reservada function, dsp el nombre de la funcion, y si requiere o no parametro
  //función anónima
  const saludo1 = function (param) {
    //codigo a ejecutar
  }// guardamos en una constante y le asignamos un nombre, tmb puede recibir parametros
  //función flecha
  const saludo2 = (param, param2) => {
    //codigo a ejecutar
    return "Hola " + param + " " + param2;
  };//se comparta igual que las otras dos funciones,pero se escribe diferente,es una funcion anonima, no tiene valor asignado, la diferencia es que la palabra reservada function se reemplaza por la flecha => , para JS esta flecha hace que se convierta en una funcion, la flecha es el remplazo de la palabra reservada, si es un solo parametro puede ir sin parentesis, si son mas de un parametro van entre parentesis y separados por coma como las otras funciones
    console.log(saludo2("Lucas","Pedemonti"));
*/
  //objetos literal
  //Para declarar objeors, lo hacemos a travez de constantes

  const persona = {//Objeto persona
    nombre: "Daniel",//1er atributo nombre, valor danil, string
    apellido: "Riv",//2do atributo nombre, valor Riv, string
    edad: 39,//3er atributo nombre, valor 39, tambien puede recibir numero
  };
  const persona1 = {
    nombre: "Eduardo",
    apellido: "Malbert",
    edad: 30,
    direccion: "calle falsa 123",
    casado: true,//booleano
  };
 console.log(persona); //imprimo variable, persona o persona
 
 
//  //Notacion de punto (.) Es la mas usada
// //  console.log(persona.nombre); //Notacion de punto, me da la informacion de esa propiedad/atributo
// //  console.log(persona.apellido); //Notacion de punto, me da la informacion de esa propiedad/atributo
// //  console.log(persona.edad); //Notacion de punto, me da la informacion de esa propiedad//atributo
// //  console.log(persona.nombre+" "+persona.apellido+" "+persona.edad+ " años"); //Para que me de junta la informacion
// //  console.log(persona1); //imprimo variable, persona o persona1

// // Notacion de corchetes []
// console.log(persona["nombre"]);
// console.log(persona["edad"]);

// //Podemos reacignarle una propiedad
// persona.nombre="Julian";
// console.log(persona.nombre);//ahora como le reasigne un valor nombre a persona, aparecera el nuevo valor, ya el el codigo se lee de arriba hacia abajo,por lo tanto toma lo ultimo
// //Tambien puedo agregarle una propiedad que no tenia
// persona.direccion="calle Roca 134"
// console.log(persona);   // y ahi me muestra la direccion que previamente no le habia asigado, se lo asigne en la linea anterior
// //o
// console.log(persona["direccion"]);//Me muestra la direccion
// persona1["casado"]=false;
// console.log(persona1.casado);


//Funcion Constructora
//Se declara como una funcion comun y corriente
// function Auto(modelo,marca,año,color){  //Se declara con la primer letra mayuscula
//     this.modelo=modelo; //Esto significa, este atributo modelo, que es perteneciente al objeto auto, va a ser igual al modelo que yo reciba por parametro. Hace referencia a "esto" al propio atributo o propiedad, tiene muchos usos, cuando declaramos una funcion constructpra, es una palabra reservada
//     this.marca=marca; //Esta marca va a ser igual, a la marca que yo reciba por parametro a la hora de llamar a la funcion, aca la estamos declarando
//     this.año=año; //Este atributo que estoy declarando va a ser igual a este otro que tengo recibido por parametro
//     this.color=color; //todos estos THIS. son los atributos de este objeto, y va a ser igual a lo que reciba por parametreto, se recomiendo usar los mismos nombres para atributos que para los parametros recibidos
// }
// //ya temenos maqueta molde para construir autos en JS
// //Recordar que habiamos declarado funciones y con el return nos devolvian un resultado que los guardabamos en una variable
// //Esto es lo mismo, simplemente que una funcion constructora necesito declarar primero la palabra reservada NEW y a continuacion de la palabra NEW, llamar al objeto constructor o a la funcion constructora, dentro de los parentesis van a ir los parametros
// //let marca=prompt("Ingresa la marca")
// const auto1= new Auto("gold","volkswagen","2012","negro") // Constante En funcion constructora primero necesito declarar la palabra reservada NEW
// const auto2= new Auto("Clio","Renault","2005","Negro") //const auto2= new Auto("Clio",marca,"2005","Negro") para que me aparezca con lo que se ingresa en el prompt, sin comillas
// console.log(auto2);
// console.log(auto2.marca);
// console.log(auto2.marca="Ferrari");
// console.log(auto2);//ahora sigue apareciendo Ferrari porque todo lo que este abajo de la linea anterior la marca del auto2 va a ser ferrari porque le cambie el valor, y como es lo ultimo que lee aparece eso
// let mensaje="Hola como estas?";//aca estoy declarando un string, JS lo declara como un objeto a los strings, es nativo de JS, los objetos tienen propiedades, una propiedad es length

// console.log(mensaje);
// console.log(mensaje.length);//Cuenta los caracteres del mensaje, incluidos espacios.
// console.log(mensaje.toLowerCase());//Es un metodo, lo que hace es poner todos los caracteres en minuscula
// console.log(mensaje.toUpperCase());//Hace lo contrario, para todo a mayuscula
// //Cuando llamamos al metodo necesitamos ponerle parentesis, solamente estos metodos pueden ser llamados solo si hay un objeto creado
// console.count();//Este ya conocido, es una funcion o un metodo del objeto console, que son nativos de JS

//Funciones Personalizadas
//podemos crear dentro de nuestras funciones contructoras, no podemos hacerlos con los literales. Que van a pasar a ser metodos de ese objeto, para poder hacer funciones personalizados tengo que primero usar la palabra reservada new, le ponemos la funciones constructora y le damos todos los atributos
function Auto(modelo,marca,año,color){  
    this.modelo=modelo; 
    this.marca=marca; 
    this.año=año; 
    this.color=color; 
    this.arrancar=function () {//esta es una funcion que esta adentro de mi objeto
      //console.log("Estoy en marcha");  //En la consola
      //alert("Estoy en marcha")//Aparece una alerta
      return "estoy en marcha";//Para poder usar el return, o que me de una respuesta tengo que hacer un console.log(auto1.arrancar());
    }
    this.frenar=()=>{
        return "estoy detenido";
    }
}
const auto1= new Auto("gol","volkswagen","2012","negro") 
const auto2= new Auto("Clio","Renault","2005","Negro") 
auto1.arrancar()
auto2.arrancar()//Los metodos son accesibles solo cuando los objetos estan creados, no se los puede llamar a los metodos solos, primero el objeto creado y dsp el metodo
console.log(auto1.arrancar());
console.log(auto1.frenar());
//De esta manera podemos crear diferecntes metodos para nuestros objetos, metodos personalizados

console.log("marca" in auto1);//Me pregunta, marca exite en auto1? me devuelve true
console.log("cilindo" in auto1);//me pregunta, cilindro existe en auto1? me devuelve false

//iterador , es un bucle, operador FOR IN, me permite traer todos los atributos e imprimirlos todos de una, y poder trabajar con ellos

// for (const key in auto1) {
//     console.log(key);//me va a imprimir todo lo que existe en auto1, nos sirve para iterar las propiedades del objeto
// }
for (const key in auto1) {
    console.log(key + ":"+ auto1[key]);//Me trae los valores de cada una de las propiedades, esta palbra key se puede llamar de cualquier manera, es un nombre de una constante, tambien le podemos poner propiedad que es lo que estamos
}
for (const propiedad in auto2) {
    console.log(propiedad + ":"+ auto2[propiedad]);//Me trae los valores de cada una de las propiedades, esta palbra key se puede llamar de cualquier manera, es un nombre de una constante, tambien le podemos poner propiedad que es lo que estamos, es un bucle que nos trae todas las propiedades del objeto
}
console.log("marca" in auto1);
console.log(auto1.marca);