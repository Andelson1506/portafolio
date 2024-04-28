function card_proyecto() {
    let detalle_btn_item_proyecto_all = document.querySelectorAll("#detalle_btn_item_proyecto");
    let detalle_btn_item_proyecto_item = Array.from(detalle_btn_item_proyecto_all);
    detalle_btn_item_proyecto_item.forEach((btn) => {
        btn.addEventListener("click" , () => {
            let contenido_oculto = btn.parentElement.parentElement.children[2];
            contenido_oculto.classList.toggle("tamaño1");
            contenido_oculto.classList.toggle("tamaño2");
        });
    })
}