function notas(){

    let nameUno =document.getElementById("name");

    let lista=document.getElementById("listaUno");

    let nombre = document.getElementById("t1").value;
    console.log(nombre);
    inicio:
    if (nombre=="Jonathan"){

        nameUno.textContent=nombre;
        let miArray = [10, 5, 6];
        for(let cal of miArray){

            let itemLista = document.createElement("li");

            itemLista.innerText= cal;
    
            lista.appendChild(itemLista);  
            // document.write("<p> "+cal+" </p>");

            if(cal<6){

                console.log(cal);
                console.log("Reprobada")

            }else{
                console.log(cal);
                console.log("Aprobada");
                continue;
            }
        }
    }else if(nombre=="Carlos") {

        let miArray = [8, 9, 4];
        nameUno.textContent=nombre;
        for(let cal of miArray){

            let itemLista = document.createElement("li");

            itemLista.innerText= cal;
    
            lista.appendChild(itemLista);  

            if(cal<6){

                console.log(cal);
                console.log("Reprobada")

            }else{
                console.log(cal);
                console.log("Aprobada");
                continue;
            }
        }
    }else{
        alert("ingrese un nombre correcto");
        nombre.value="";
    }
    
}
function recargar(){
    document.getElementById("t1").value = "";
    location.reload();
}
function promedio(){
    let prom = 0;
    let etiquetaPromedio = document.getElementById("etiquetaPromedio");

    let nameUno =document.getElementById("name");

    let lista=document.getElementById("listaUno");

    let nombre = document.getElementById("t1").value;



    if (nombre=="Jonathan"){
        let miArray = [10, 5, 6];
        for (i=0; i<5; i++){
            prom += miArray[1];
            
        }
        let promedioFinal = (prom/3);
        etiquetaPromedio.textContent= promedioFinal;

       
    
    }else if(nombre=="Carlos") {

        let miArray = [8, 9, 4];
        prom += miArray[1];
        for (i=0; i<5; i++){
            prom += miArray[1];
            
        }
        let promedioFinal = (prom/3);
        etiquetaPromedio.textContent= promedioFinal;
      
        }else{
        document.getElementById("t1").value = "";
        nombre.value = "";
        alert("ingrese un nombre correcto");
        

    
}
}
