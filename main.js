console.log(`Inicio E1`)
const pizzas = [
    {
        id: 1,
        nombre: "muzarella",
        ingredientes:["muzarella","aceitunas"],
        precio: 500,
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes:["muzarella","aceitunas","tomate"],
        precio: 600,
    },
    {
        id: 3,
        nombre: "Margarita",
        ingredientes:["muzarella","tomate","albahaca"],
        precio: 1000,
    },
    {
        id: 4,
        nombre: "Cuatro Quesos",
        ingredientes:["muzarella","Gorgonzola","Parmesano","Fontina"],
        precio: 1400,
    },
    {
        id: 5,
        nombre: "Pepperoni",
        ingredientes:["muzarella","tomate","albahaca","pepperoni","oregano"],
        precio: 1200,
    },
    {
        id: 6,
        nombre: "champiñones",
        ingredientes:["muzarella","aceitunas"],
        precio: 1200,
    }
]

/* 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, 
realizar las siguientes actividades, imprimiendo en consola: */

// a)  Las pizzas que tengan un id impar.

const pizzasPares = pizzas.filter ((pizzas) => pizzas.id % 2 === 0)
pizzasPares.forEach((pizzas) =>
console.log (`la ${pizzas.nombre} tiene un id par (${pizzas.id})`));

// b) ¿Hay alguna pizza que valga menos de $600?

const precioRef = 600 // Declaro el valor a buscar

const buscarPrecio = pizzas.filter((pizzas) => pizzas.precio < precioRef)
buscarPrecio.forEach((pizzas) => console.log(`la ${pizzas.nombre} (${pizzas.id}) cuesta: $ ${pizzas.precio}. Cumple con el requisito de precio menor a $ ${precioRef}`));

// c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizzas) => console.log(`la ${pizzas.nombre} (${pizzas.id}) cuesta: $ ${pizzas.precio}`));

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

pizzas.forEach((pizzas) => {
console.log(`La pizza ${pizzas.nombre} tiene como ingredientes:`);
pizzas.ingredientes.forEach((ingredientes) => console.log(ingredientes));
});

/*
 Lo anterior correspondia a la E1 de JavaScript que no habia entregado a tiempo,
 si pueden corregirlo por si hay algo mal estaria genial. Gracias :) 
*/
console.log(`Fin de la E1`)
// Ahora arranca la E2 de Js espero que este bien xD

console.log(`Inicio de la E2`)

const formInput = document.getElementById("formulario");
const inputPizza = document.getElementById("identificador");
const sumbitPizza = document.getElementById("botonSubmit");
const render = document.getElementById("rend");

const mostrarPizza = () => {

    const numberValue = identificador.value.trim(); // asigna el valor del input 

    const buscarPizza = pizzas.find((pizza) => { // busca el valor en el array
        return pizza.id == numberValue;
    })


    if (isEmpty(numberValue)) { // si el input esta vacio
        render.classList.add("hidden");
        showError(inputPizza, "Debe ingresar algún número.");
    } else if (!buscarPizza) { // si el valor no esta en la array
        render.classList.add("hidden");
        showError(inputPizza, "no se encontro esa pizza, intente con otro numero");
    } else if (buscarPizza) { // si no hay errores
        removeError(inputPizza);
        render.classList.remove("hidden"); // quita el class hidden y muestra el contenido
        render.innerHTML = // agrega el sig dato al html
        `<h2>${buscarPizza.nombre}</h2>
        <h3>$${buscarPizza.precio}</h3>`
    }
};

const isEmpty = (value) => !value.length; 

const showError = (input, message) => {
    const div = input.parentElement;
    div.classList.add("error");
    const error = div.querySelector("small");
    error.textContent = message;
};

const removeError = (input) => {
    const div = input.parentElement;
    div.classList.remove("error");
};

formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarPizza();
});

console.log(`fin E2`)