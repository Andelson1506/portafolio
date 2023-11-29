/* funcionalidad del boton de desplazamiento de proyecto */

let btn_M_P = document.querySelector("#btn_M_P");
btn_M_P.addEventListener("click", () => {
  let ancla = document.querySelector(".web_contenedor");
  ancla.classList.toggle("DPtodo");

  if (btn_M_P.children[0].innerHTML == "Escritorio") {
    btn_M_P.children[0].innerHTML = "Web";
  } else {
    btn_M_P.children[0].innerHTML = "Escritorio";
  }

  let titulocontenedor = document.querySelector(".contenedor_info_area");
  if (titulocontenedor.children[0].innerHTML == "Web") {
    titulocontenedor.children[0].innerHTML = "De escritorio";
  } else {
    titulocontenedor.children[0].innerHTML = "Web";
  }
});

/* funcionalidad de las card */
let btnp_mas = document.querySelectorAll("#btnp_mas");
let elementosbtnmas = Array.from(btnp_mas);
elementosbtnmas.forEach((item) => {
  item.addEventListener("click", () => {
    /* primero el padre de todo (osea el contenedor) */
    let padre = item.parentElement.parentElement.parentElement;
    /* lo otro es agregar i quitar clases de los elementos del contenedor
      y tambien el mismo */
    padre.classList.add("actioncard");
    setTimeout(() => {padre.children[0].classList.add("back")},1000);
    let hijoAtras = padre.children[1];
    hijoAtras.classList.remove("giro1");

    let img = hijoAtras.children[0];
    img.classList.remove("abajoimg");
  });
});

let btnp_menos = document.querySelectorAll("#btnp_menos");
let elementosbtnmenos = Array.from(btnp_menos);
elementosbtnmenos.forEach((item) => {
  item.addEventListener("click", () => {
    /* primero el padre de todo (osea el contenedor) */
    let padre = item.parentElement.parentElement;
     /* lo otro es agregar i quitar clases de los elementos del contenedor
      y tambien el mismo */
      padre.classList.remove("actioncard");
      setTimeout(() => {padre.children[0].classList.remove("back")},1000);
      let hijoAtras = padre.children[1];
      hijoAtras.classList.add("giro1");
  
      let img = hijoAtras.children[0];
      img.classList.add("abajoimg");
  });
});
