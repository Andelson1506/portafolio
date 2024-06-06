// Cambio de fondo funcionalidad
function cambio_fondo() {
    let fondo_contenedor = document.querySelectorAll("#fondo_contenedor");
    fondo_contenedor.forEach((fondo_contenedor) => {
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
    })
}


// Cambio de color funcionalidad
function contenedor_temas() {
    let contenedor_temas = document.querySelectorAll("#contenedor_temas");
    contenedor_temas.forEach((contenedor_temas) => {
        for(let i = 0; i < contenedor_temas.children.length; i++){
            contenedor_temas.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < contenedor_temas.children.length; i++){
                    contenedor_temas.children[i].classList.remove("select_color");
                }
                contenedor_temas.children[i].classList.add("select_color");
                // Obteniendo el estilo de la raíz del documento
                var root = document.documentElement.style;
        
                // ahora los diferentes temas
                if (i == 0){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#247ed3'); // 500
                    root.setProperty('--color2', '#1662b3'); // 600
                    root.setProperty('--color3', '#14539a'); // 700
                    root.setProperty('--color4', '#144378'); // 800
                    root.setProperty('--color5', '#163964'); // 900
                } else if (i == 1){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#1dafac'); // 500
                    root.setProperty('--color2', '#148d8d'); // 600
                    root.setProperty('--color3', '#147171'); // 700
                    root.setProperty('--color4', '#15585a'); // 800
                    root.setProperty('--color5', '#164a4b'); // 900
                } else if (i == 2){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#ff600a'); // 500
                    root.setProperty('--color2', '#f04806'); // 600
                    root.setProperty('--color3', '#c73407'); // 700
                    root.setProperty('--color4', '#9e2a0e'); // 800
                    root.setProperty('--color5', '#7f250f'); // 900
                } else if (i == 3){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#95a53d'); // 500
                    root.setProperty('--color2', '#839433'); // 600
                    root.setProperty('--color3', '#596526'); // 700
                    root.setProperty('--color4', '#485123'); // 800
                    root.setProperty('--color5', '#3e4621'); // 900
                } else if (i == 4){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#ff470c'); // 500
                    root.setProperty('--color2', '#f72c02'); // 600
                    root.setProperty('--color3', '#ca1c04'); // 700
                    root.setProperty('--color4', '#a0180c'); // 800
                    root.setProperty('--color5', '#81170d'); // 900
                } else if (i == 5){
                    // Cambiando el valor de las variable CSS personalizada
                    root.setProperty('--color1', '#517397'); // 500
                    root.setProperty('--color2', '#436186'); // 600
                    root.setProperty('--color3', '#374f6d'); // 700
                    root.setProperty('--color4', '#31435b'); // 800
                    root.setProperty('--color5', '#2c3a4e'); // 900
                }
            });
        }
    });
}

// cambio de movimiento funcionalidad
function cambio_movimiento(indicador) {
    // ahora a cambiar el indicador de movimiento
    let indicador_movimiento = document.getElementById("indicador_movimiento");
    indicador_movimiento.innerHTML = indicador;
}

function marcador_configuracion() {
    let fondo_contenedor = document.querySelectorAll("#contenedor_movimiento");
    fondo_contenedor.forEach((fondo_contenedor) => {
        for(let i = 0; i < fondo_contenedor.children.length; i++){
            fondo_contenedor.children[i].addEventListener("click" , () => {
                // marcador
                for(let i = 0; i < fondo_contenedor.children.length; i++){
                    fondo_contenedor.children[i].classList.remove("select_color");
                }
                fondo_contenedor.children[i].classList.add("select_color");
            });
        }
    })
}