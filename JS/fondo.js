let fondo_contenedor = document.getElementById("fondo_contenedor");
for(let i = 0; i < fondo_contenedor.children.length; i++){
    fondo_contenedor.children[i].addEventListener("click" , () => {
        // marcador
        for(let i = 0; i < fondo_contenedor.children.length; i++){
            fondo_contenedor.children[i].classList.remove("select_img");
        }
        fondo_contenedor.children[i].classList.add("select_img");

        // ahora a cambiar el fondo
        let imagen_seleccionada = fondo_contenedor.children[i].children[0].src;

        // cambiando el fondo
        let fondo_home = document.getElementById("fondo_home").children[0];
        fondo_home.src = imagen_seleccionada;
    });
}