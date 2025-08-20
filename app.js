let listaAmigos = [];
function agregarAmigo() {
    listaAmigos.push(document.getElementById(`amigo`).value);
    console.log(listaAmigos);    
    // si el nombre está incluido, lo agregamos, si no ponemos alert.
    return;
}

