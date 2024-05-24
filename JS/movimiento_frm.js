// funcionalidad para mover los frm
// variables
function move_frm() {
    let lista_opciones_frm = document.getElementById("lista_opciones_frm");
    let slider_modulus = document.getElementById("slider_modulus");
    
    for (let i = 0; i < lista_opciones_frm.children.length; i++){
        lista_opciones_frm.children[i].addEventListener("click" , () => {
            slider_modulus.style.marginLeft = `-${i}00%`;
        });
    }
}

move_frm();

/* funcionalidad de pestaña */

// varialbles
let opciones_pestañas = document.getElementById("lista_opciones_frm");
let slider_modulus = document.getElementById("slider_modulus");


/* seleccionando todos los elementos */
let pages = document.getElementById("pages");
for(let i = 1; i< pages.children.length; i++){
        // click a una pagina
        pages.children[i].addEventListener("click" , () => {
            let texto_frm_seleccionado = pages.children[i].children[1].innerHTML;
            // primero crear la pestaña
            let li = document.createElement("li");
            let p = document.createElement("p");
            let img1 = document.createElement("img");
            let img2 = document.createElement("img");

            li.title = texto_frm_seleccionado;
            p.innerHTML = texto_frm_seleccionado;
            img1.src = `IMG/${texto_frm_seleccionado}.png`;
            img2.src = "IMG/x.png";

            li.append(img1 , p , img2);
            li.classList.add("tab_animacion1");
            opciones_pestañas.appendChild(li);
            setTimeout(() => {
                li.classList.remove("tab_animacion1");
            }, 200);
            setTimeout(() => {
                li.classList.remove("tab_animacion2");
            }, 200);

            // luego el contenedor
            texto_frm_seleccionado = texto_frm_seleccionado.replace(" ", "_");
            let frm_seleccionado = document.getElementById(`${texto_frm_seleccionado}`);
            let copia_frm = frm_seleccionado.cloneNode(true);
            copia_frm.id = `${texto_frm_seleccionado}2`;
            slider_modulus.appendChild(copia_frm);
            copia_frm.classList.remove("none");
            console.log(copia_frm);
            if (texto_frm_seleccionado == "Proyectos"){
                card_proyecto();
            }
            move_frm();
            li.click();
            eliminar_pestaña();
        });
}

// funcionalidad de eliminar pestañas
function eliminar_pestaña() {
    let lista_opciones_frm2 = document.getElementById("lista_opciones_frm");
    let inicio_frm_btn = document.getElementById("inicio_frm_btn");

    for (let i = 0; i < lista_opciones_frm2.children.length; i++) {
        let elemento = lista_opciones_frm2.children[i];
        if (elemento && elemento.children.length > 0) { // Verificar si el elemento existe y tiene hijos
            elemento.children[2].addEventListener("click", () => {
                elemento.classList.add("tab_animacion1");
                let hijo = elemento;

                setTimeout(() => {
                    let texto = elemento.children[1].innerHTML;
                    if (lista_opciones_frm2.contains(hijo)) {
                        lista_opciones_frm2.removeChild(hijo);
                        texto = texto.replace(" ", "_");
                        let contenedor = document.getElementById(`${texto}2`);
                        if (contenedor && contenedor.parentNode) {
                            contenedor.parentNode.removeChild(contenedor);
                        }
                        inicio_frm_btn.click();
                        move_frm();
                        eliminar_pestaña();
                    }
                }, 100);
            });
        }
    }
}

/* funcionalidad de buscar (pagina de inicio btn buscar) */
let btn_buscar = document.getElementById("btn_buscar");

btn_buscar.addEventListener("click" , () => {
    let texto_busqueda = document.getElementById("page_select");
    if (texto_busqueda.value == null || texto_busqueda.value == ""){alert("debe escribir algo.");} else{
        let name_modulu =  texto_busqueda.value;
        let busqueda = 0;
        let selec_page = 0;
        let pages = document.getElementById("pages");
        for (let i = 0; i < pages.children.length; i++){
            if (pages.children[i].children[1].innerHTML == name_modulu){

                let lista_opciones_frm3 = document.getElementById("lista_opciones_frm");
                for (let e = 0; e < lista_opciones_frm3.children.length; e++){

                    if (lista_opciones_frm3.children[e].children[1].innerHTML == name_modulu){
                        lista_opciones_frm3.children[e].click();
                        return;
                    } else {
                        selec_page = 1;
                    }
                }
                
                if (selec_page = 1){
                    pages.children[i].click();
                    busqueda = 0;
                    return;
                }
            } else {
                busqueda = 1;
            }
        }
        if (busqueda = 1){
            alert("no se encontraron los datos.");
            return;
        }
    }
});


/* funcionalidad de buscar (barra de url) */
let url_input = document.getElementById("url_input");
url_input.addEventListener("keydown" , (e) => {
    if (e.key === "Enter"){
        let texto_busqueda = document.getElementById("url_input");
        if (texto_busqueda.value == null || texto_busqueda.value == ""){alert("debe escribir algo.");} else{
            let name_modulu =  texto_busqueda.value;
            let busqueda = 0;
            let selec_page = 0;
            let pages = document.getElementById("pages");
            for (let i = 0; i < pages.children.length; i++){
                if (pages.children[i].children[1].innerHTML == name_modulu){
    
                    let lista_opciones_frm3 = document.getElementById("lista_opciones_frm");
                    for (let e = 0; e < lista_opciones_frm3.children.length; e++){
    
                        if (lista_opciones_frm3.children[e].children[1].innerHTML == name_modulu){
                            lista_opciones_frm3.children[e].click();
                            return;
                        } else {
                            selec_page = 1;
                        }
                    }
                    
                    if (selec_page = 1){
                        pages.children[i].click();
                        busqueda = 0;
                        return;
                    }
                } else {
                    busqueda = 1;
                }
            }
            if (busqueda = 1){
                alert("no se encontraron los datos.");
                return;
            }
        }
    }
});