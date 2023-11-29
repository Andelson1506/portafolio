/* este se encarga de hacer mover todas las carpetas y sus diferentes animaciones */
let animacionL = "";

let btnMove = document.querySelectorAll("#btnMove");
let elementosBtnM = Array.from(btnMove);
elementosBtnM.forEach((item) => {
  item.addEventListener("click", () => {
    /* aqui estoy extrallendo el nombre para aplicar el movimiento correcto */
    let letra = item.children[1].textContent;
    let palabra = letra.split(" ");
    let PJunto = palabra.join("");

    /* Junto a la letra le aplico un estilo para hacer el movimiento
      correcto osea Desplazamiento */

    let anclaMovimiento = document.querySelector(".sobre_mi");

    anclaMovimiento.classList.remove("MoveFavorito");
    anclaMovimiento.classList.remove("MoveDocumento");
    anclaMovimiento.classList.remove("MoveEquipo");
    anclaMovimiento.classList.remove("MoveDescarga");
    anclaMovimiento.classList.remove("MoveAjuste");
    anclaMovimiento.classList.remove("MoveSobremi");
    anclaMovimiento.classList.remove("MoveProyectos");
    anclaMovimiento.classList.remove("MoveCurriculum");

    // anclaMovimiento.classList.remove("MoveHabilidades");

    anclaMovimiento.classList.add(`Move${PJunto}`);

    let sublogo_carpeta = document.querySelector(".sublogo_carpeta");

    sublogo_carpeta.classList.remove("MoveFavorito1");
    sublogo_carpeta.classList.remove("MoveDocumento1");
    sublogo_carpeta.classList.remove("MoveEquipo1");
    sublogo_carpeta.classList.remove("MoveDescarga1");
    sublogo_carpeta.classList.remove("MoveAjuste1");
    sublogo_carpeta.classList.remove("MoveSobremi1");
    sublogo_carpeta.classList.remove("MoveProyectos1");
    sublogo_carpeta.classList.remove("MoveCurriculum1");

    sublogo_carpeta.classList.add(`Move${PJunto}1`);

    /* haora voy a seleccionar todos las carpetas para hacer una 
      animacion en conjunto */

    let referenciaA = document.querySelector(".controles_carpeta").children[0];
    let elementI = document.querySelectorAll(".cardinfo");
    let elementIS = Array.from(elementI);

    elementIS.forEach((item) => {
      if (referenciaA.innerHTML == 1) {
        item.classList.toggle("inicial");
        item.classList.remove("ARX");
        item.classList.remove("ARY");
        item.classList.remove("AE");
      } else if (referenciaA.innerHTML == 2) {
        item.classList.remove("inicial");
        item.classList.toggle("ARX");
        item.classList.remove("ARY");
        item.classList.remove("AE");
      } else if (referenciaA.innerHTML == 3) {
        item.classList.remove("inicial");
        item.classList.remove("ARX");
        item.classList.toggle("ARY");
        item.classList.remove("AE");
      } else if (referenciaA.innerHTML == 4) {
        item.classList.remove("inicial");
        item.classList.remove("ARX");
        item.classList.remove("ARY");
        item.classList.toggle("AE");
      }
    });

    let padre2 = document.querySelector(".subcontenedor_informacion_carpeta");
    padre2.classList.add("EscalaMinima");

    setTimeout(() => {
      padre2.classList.remove("EscalaMinima");
    }, 1000);
  });
});

/* este codigo es lo mismo pero para diferentes elementos osea los logos */

let btnMove2 = document.querySelectorAll("#btnMove2");
let elementosBtnM2 = Array.from(btnMove2);
elementosBtnM2.forEach((item) => {
  item.addEventListener("click", () => {
    /* aqui estoy extrallendo el nombre para aplicar el movimiento correcto */
    let letra = item.parentElement.children[0].textContent;
    let palabra = letra.split(" ");
    let PJunto = palabra.join("");

    /* Junto a la letra le aplico un estilo para hacer el movimiento
      correcto osea Desplazamiento */

    let anclaMovimiento = document.querySelector(".sobre_mi");

    anclaMovimiento.classList.remove("MoveFavorito");
    anclaMovimiento.classList.remove("MoveDocumento");
    anclaMovimiento.classList.remove("MoveEquipo");
    anclaMovimiento.classList.remove("MoveDescarga");
    anclaMovimiento.classList.remove("MoveAjuste");
    anclaMovimiento.classList.remove("MoveSobremi");
    anclaMovimiento.classList.remove("MoveProyectos");
    anclaMovimiento.classList.remove("MoveCurriculum");

    anclaMovimiento.classList.add(`Move${PJunto}`);

    /* funcion a los logos de la carpeta */

    let sublogo_carpeta = document.querySelector(".sublogo_carpeta");

    sublogo_carpeta.classList.remove("MoveFavorito1");
    sublogo_carpeta.classList.remove("MoveDocumento1");
    sublogo_carpeta.classList.remove("MoveEquipo1");
    sublogo_carpeta.classList.remove("MoveDescarga1");
    sublogo_carpeta.classList.remove("MoveAjuste1");
    sublogo_carpeta.classList.remove("MoveSobremi1");
    sublogo_carpeta.classList.remove("MoveProyectos1");
    sublogo_carpeta.classList.remove("MoveCurriculum1");

    sublogo_carpeta.classList.add(`Move${PJunto}1`);

    /* haora voy a seleccionar todos las carpetas para hacer una 
      animacion en conjunto */

      let referenciaA = document.querySelector(".controles_carpeta").children[0];
      let elementI = document.querySelectorAll(".cardinfo");
      let elementIS = Array.from(elementI);
  
      elementIS.forEach((item) => {
        if (referenciaA.innerHTML == 1) {
          item.classList.toggle("inicial");
          item.classList.remove("ARX");
          item.classList.remove("ARY");
          item.classList.remove("AE");
        } else if (referenciaA.innerHTML == 2) {
          item.classList.remove("inicial");
          item.classList.toggle("ARX");
          item.classList.remove("ARY");
          item.classList.remove("AE");
        } else if (referenciaA.innerHTML == 3) {
          item.classList.remove("inicial");
          item.classList.remove("ARX");
          item.classList.toggle("ARY");
          item.classList.remove("AE");
        } else if (referenciaA.innerHTML == 4) {
          item.classList.remove("inicial");
          item.classList.remove("ARX");
          item.classList.remove("ARY");
          item.classList.toggle("AE");
        }
      });
  
      let padre2 = document.querySelector(".subcontenedor_informacion_carpeta");
      padre2.classList.add("EscalaMinima");
  
      setTimeout(() => {
        padre2.classList.remove("EscalaMinima");
      }, 1000);
      
  });
});

/* boton especial el de escritorio */

let btnEscritorio = document.querySelector("#btnEscritorio");
let click = 1;
btnEscritorio.addEventListener("click", () => {
  let padre = document.querySelector(".carpeta");
  padre.classList.toggle("activacion");
  let info = btnEscritorio.children[1];

  if (click == 1) {
    info.innerHTML = "Volver";
    click = 0;
  } else {
    info.innerHTML = "Escritorio";
    click = 1;
  }
});
