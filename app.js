let listaAmigos = [];
function agregarAmigo() {
        // si el nombre está incluido, lo agregamos, si no ponemos alert.
    if(listaAmigos.includes(document.getElementById(`amigo`).value)){
        alert("ese nombre ya existe");
    } else {
        listaAmigos.push(document.getElementById(`amigo`).value);
        console.log(listaAmigos);
        limpiarCampo();
        return;
    
    }
    return;
}

function limpiarCampo(){
    let valorCampo = document.querySelector('#amigo').value=0;
}

agregarAmigo()
