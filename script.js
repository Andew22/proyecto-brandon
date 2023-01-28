function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("myfile.json", function(text){
    var data = JSON.parse(text);

    var new_datos = data.split(",");

    var contador = 1;

    var base = document.querySelector(".contenedor_tabla");


    var contenidO = `     
    `;

    while(contador!=200){

        var elemento = new_datos[contador];
        var elementos = elemento.split(";");

        var elemento1 = elementos[0].replace("[","");
        var elemento2 = elemento1.replace(/["']/g,'');
        var elemento3 = elemento2.replace("]","");

        var elemento4 = elementos[1].replace("[","");
        var elemento5 = elemento4.replace(/["']/g,'');
        var elemento6 = elemento5.replace("]","");


        var elemento7 = elementos[2].replace("[","");
        var elemento8 = elemento7.replace(/["']/g,'');
        var elemento9 = elemento8.replace("]","");



        var parte1 = document.createElement("tr");
        var parte2 = document.createElement("th");
        var parte3 = document.createElement("td");
        parte3.innerText = elemento3;
        var parte4 = document.createElement("td");
        parte4.innerText = elemento6;
        var parte5 = document.createElement("td");
        parte5.innerText = elemento9;


        parte1.appendChild(parte3);
        parte1.appendChild(parte4);
        parte1.appendChild(parte5);
        


        base.appendChild(parte1);


        contador++;
    }


 
  
     
     
        
   


    
    

    
 


});











