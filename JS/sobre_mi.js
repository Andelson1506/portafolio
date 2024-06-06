/* funcionalidad de movimiento de diferentes areas */
function movimiento_frm() {
    let contenedor_controles = document.querySelectorAll("#controles_frm_sm");
    contenedor_controles.forEach((frm) => {
        // agregando evento a cada uno de los controles. a traves de un bucle for.
        for (let i = 0; i < frm.children.length; i++){
            frm.children[i].addEventListener("click" , () => {
                
                // quitando la seleccion a los otros controles
                for (let b = 0; b < frm.children.length; b++){
                    frm.children[b].classList.remove("active");
                }

                // animacion de selecionado
                frm.children[i].classList.add("active");

                // moviendo
                let ancla_movimiento = document.querySelectorAll("#historia_sm");
                ancla_movimiento.forEach((ancla) => {
                    ancla.style.marginLeft= `-${i}00%`;
                });
            

                // estableciendo altura
                let contenedor_areas2 = document.querySelectorAll("#areas_sm");
                contenedor_areas2.forEach((contenedor) => {
                    for (let c = 0; c < contenedor.children.length; c++){
                        contenedor.children[c].classList.remove("seleted");
                    }
                });
                
                // contenedor seleccionado para agregarle el focus para establecer la altura
                frm.parentElement.children[3].children[i].classList.add("seleted");
                console.log(frm.parentElement.children[3].children[i]);
                altura_contenedor_area();
            });
        }
    });
}

function altura_contenedor_area(){
    let contenedor_areas = document.querySelectorAll("#areas_sm");

    contenedor_areas.forEach((contenedor) => {
        for (let i = 0; i < contenedor.children.length; i++) {
            if (contenedor.children[i].classList.contains("seleted")) {
                let altura = window.getComputedStyle(contenedor.children[i]).height;
                contenedor.style.height = altura;
                break;
            }
        }
    });
    
}

function cerrar_visualizador() {
    let btn_cerrar_vista_publicacion_sm = document.querySelectorAll("#btn_cerrar_vista_publicacion_sm");
    btn_cerrar_vista_publicacion_sm.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let vista_publicacion_sm2 = btn.parentElement;
            vista_publicacion_sm2.classList.toggle("inactivo_vista_publicacion");
            let hijo = vista_publicacion_sm2.children[1];
            vista_publicacion_sm2.removeChild(hijo);
        });
    })
}

// mostrar publicacion
function mostrar_visualizador() {
    let btn_visualizar_sm = document.querySelectorAll("#btn_visualizar_sm");
    btn_visualizar_sm.forEach((btn) => {
        btn.addEventListener("click" , () => {
            // copiando el contenedor
            let padre_contenedor = btn.parentElement.parentElement.parentElement;
            let copia_contenedor = padre_contenedor.cloneNode(true);

            // pegando en el frm de visualización
            let vista_publicacion_sm = document.querySelectorAll("#vista_publicacion_sm");
            vista_publicacion_sm.forEach((vista) => {
                vista.append(copia_contenedor);

                // animacion para que se vea
                vista.classList.toggle("inactivo_vista_publicacion");
                cerrar_visualizador();
            });
        });
    });
}
