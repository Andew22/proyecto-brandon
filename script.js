let contenedor = document.querySelector(".contenedor_tabla");
let max_element = 0;
let array_final = [];
let inputBuscar = document.querySelector(".input_buscar");
let array_principal =  [];
let arrays = [1,2,3,4,5,6,7,8,9]

fetch('myfile.json')
    .then(response => response.json())
    .then((data) => {
     array_principal = data.split(",");

});


function buscarRegistros(){
    eliminarElementos();
    let texto = inputBuscar.value;
    const result = array_principal.filter(element => element.split(";")[0].includes(texto,0));
    pintarElementos(result);
}


function limpiarDatos(elemento){
    if(elemento!=undefined){
        let paso1 = elemento.replace("[","");
        let paso2 = paso1.replace("]","");
        let paso3 = paso2.replace(/[ '"]+/g,"");
        return paso3;
    }
}


function pintarElementos(result){
    let maxElement0s = 10;
    let elementos = 0;
    for (var i = 0; i < 10; i++) {
        let elementos = result[i].split(";");
        contenedor.appendChild(crearElemento(limpiarDatos(elementos[0]),limpiarDatos(elementos[1]),limpiarDatos(elementos[2])));


    }

}



function crearElemento(a1,a2,a3){

    let elemento1 = document.createElement("tr");
    elemento1.classList.add("elemento");
    let elemento2 = document.createElement("th");
    elemento2.innerHTML = a1;
    let elemento3 = document.createElement("td");
    elemento3.innerHTML = a2;
    let elemento4 = document.createElement("td");
    elemento4.innerHTML = a3;

    elemento1.appendChild(elemento2);
    elemento1.appendChild(elemento3);
    elemento1.appendChild(elemento4);


    return elemento1;

}

function eliminarElementos(){
    let elementos = document.querySelectorAll(".elemento");
    elementos.forEach(element => {
        element.remove();
    });
}











