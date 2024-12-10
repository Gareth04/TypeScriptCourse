//Definir una variable con let
//Tipos de datos en TypeScrypt: string, any, number, boolean, Date
let fecha = new Date();
let texto: string = "Bryan";
let numero: number = 12;
let boolean: boolean = true;
let cualquierCosa: any = "Cualquier cosa";
console.log(fecha.getDate() + "/" +(fecha.getMonth()+1) +"/" + fecha.getFullYear());


//Arrays

let persona: string[] = ["bryan","nestor","christopher","kone"]

//Que tipo de dato tiene un elemento HTML, es de tipo HTMLELEMENT
let div_personas:HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>";
persona.map((persona)=>{
    div_personas.innerHTML += `<li> ${persona} </li>`; //Igualar  el tipo de dato de persona de string al valor que va dentro de un innerHTML
})
div_personas.innerHTML += "<ul>";
