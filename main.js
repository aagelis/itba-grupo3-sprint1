var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (menu_visible == false) { //si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}


function loginUsuario(){

    let nombre = document.getElementsById('usuario').value 

    let nombreUsuario = 'itba'
    if (nombre === nombreUsuario){
        alert('Iniciaste Sesion')
    }else{
        alert('Error al Iniciar Sesion')
    }
}    

