
const btnCargaUsuarios= document.getElementById('btn_cargar_usuarios');
const loader= document.getElementById('loader');

btnCargaUsuarios.addEventListener('click',function(){

    //instancia de peticion para obtener json
    var peticion= new XMLHttpRequest();
    peticion.open('GET','http://www.json-generator.com/api/json/get/bPHomVMFki?indent=2');

    //añadir un clase al elemento loader
    loader.classList.add('active');

    //cuando la peticion este cargada obtengo la data
    peticion.onload= function(){
        //devuelve texto puro, pero lo convierto en un JSON
        //console.log(JSON.parse(peticion.responseText)[0].id);
        var datos= JSON.parse(peticion.responseText);

        //metodo1: mostrar data en HTML
        for (let i = 0; i < datos.length; i++) {
        var elemento= document.createElement('tr');
        elemento.innerHTML+= ("<td>" + datos[i].id + "</td>");
        elemento.innerHTML+= ("<td>" + datos[i].nombre + "</td>");
        elemento.innerHTML+= ("<td>" + datos[i].edad + "</td>");
        elemento.innerHTML+= ("<td>" + datos[i].pais + "</td>");
        elemento.innerHTML+= ("<td>" + datos[i].correo + "</td>");
        elemento.innerHTML+=("</tr>");
        document.getElementById('tabla').appendChild(elemento);
        }

        //metodo2
        // datos.forEach(persona => {
        //     var elemento= document.createElement('tr');
        //     elemento.innerHTML+= ("<td>" + persona.id + "</td>");
        //     elemento.innerHTML+= ("<td>" + persona.nombre + "</td>");
        //     elemento.innerHTML+= ("<td>" + persona.edad + "</td>");
        //     elemento.innerHTML+= ("<td>" + persona.pais + "</td>");
        //     elemento.innerHTML+= ("<td>" + persona.correo + "</td>");
        //     elemento.innerHTML+=("</tr>");
        //     document.getElementById('tabla').appendChild(elemento);
        // });
    }
    /*vericando que la peticion ha cambiado de estado
    readyState=verificando estado de peticion(devuelve-->2=peti recibida,3=peti siendo procesada o 4=peticion lista y con respuesta)
    status = 200--> todo esta CORRECTO
    */
    peticion.onreadystatechange= function(){
        //console.log(peticion.readyState);
        //console.log(peticion.status);
        if(peticion.readyState == 4 && peticion.status == 200){
        //remover un clase al elemento loader
        loader.classList.remove('active');
        }
    }
    peticion.send();
    btnCargaUsuarios.disabled=true;
})