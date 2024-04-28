/* botones */

let lvls = {
  btn1: document.querySelector("#lvl1"),
  btn2: document.querySelector("#lvl2"),
  btn3: document.querySelector("#lvl3"),
  btn4: document.querySelector("#lvl4"),
  btn5: document.querySelector("#lvl5"),
  btn6: document.querySelector("#lvl6"),
  btn7: document.querySelector("#lvl7"),
  btn8: document.querySelector("#lvl8"),
  btn9: document.querySelector("#lvl9"),
  btn10: document.querySelector("#lvl10"),
};

/* para saber si le diste o no de cada nivel */

let historial = {
   verdad1 : true,
   falso1 : false,
   verdad2 : true,
   falso2 : false,
   verdad3 : true,
   falso3 : false,
   verdad4 : true,
   falso4 : false,
   verdad5 : true,
   falso5 : false,
   verdad6 : true,
   falso6 : false,
   verdad7 : true,
   falso7 : false,
   verdad8 : true,
   falso8 : false,
   verdad9 : true,
   falso9 : false,
   verdad10 : true,
   falso10 : false,
};

/* selectores de cada fondo cuando se gana de cada nivel (animacion) */

let fondo = document.querySelector(".fondo");
let fondo2 = document.querySelector(".fondo2");
let fondo3 = document.querySelector(".fondo3");
let fondo4 = document.querySelector(".fondo4");
let fondo5 = document.querySelector(".fondo5");
let fondo6 = document.querySelector(".fondo6");
let fondo7 = document.querySelector(".fondo7");
let fondo8 = document.querySelector(".fondo8");
let fondo9 = document.querySelector(".fondo9");
let fondo10 = document.querySelector(".fondo10");


fondo.style.zIndex = "-1";
fondo.style.height = "0%";
fondo.style.opacity = "0";
fondo2.style.zIndex = "-1";
fondo2.style.opacity = "0";
fondo2.style.height = "0%";
fondo3.style.zIndex = "-1";
fondo3.style.opacity = "0";
fondo3.style.height = "0%";
fondo4.style.zIndex = "-1";
fondo4.style.opacity = "0";
fondo4.style.height = "0%";
fondo5.style.zIndex = "-1";
fondo5.style.opacity = "0";
fondo5.style.height = "0%";

fondo6.style.zIndex = "-1";
fondo6.style.opacity = "0";
fondo6.style.height = "0%";

fondo7.style.zIndex = "-1";
fondo7.style.opacity = "0";
fondo7.style.height = "0%";

fondo8.style.zIndex = "-1";
fondo8.style.opacity = "0";
fondo8.style.height = "0%";

fondo9.style.zIndex = "-1";
fondo9.style.opacity = "0";
fondo9.style.height = "0%";

fondo10.style.zIndex = "-1";
fondo10.style.opacity = "0";
fondo10.style.height = "0%";

// Level1

let validacion1 = /^[AaMmIiGgOo]{5}$/;
let ayuda1 = document.getElementById("ayuda_lvl1");
console.log(ayuda1);

let historia = document.querySelector("#Historia");
historia.style.width = "0%";

let verdad = true;

/* boton de ayuda */

ayuda1.addEventListener("click" , () => {
  let info = document.querySelector("#Info1");
  info.classList.toggle("activee");

  if (verdad === true) {
    info.children[0].innerHTML = "Empieza por la letra A y termina con la letra O";
    info.style.background = "rgb(143,113,13)"; 
    verdad = false;
    ayuda1.innerHTML = "Quitar";
  } else if (verdad === false) {
    info.children[0].innerHTML = "";
    verdad = true;
    ayuda1.innerHTML = "Ayuda";
  }
});

let id1;

/* boton de verificar */

let verificar = document.querySelector("#verificar_1");
verificar.addEventListener("click" , () => {

   let texto = document.querySelector("#texto1").value;

   if (validacion1.test(texto) === true) {
    let info = document.querySelector("#Info1");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad1 === true) {
        verificar.style.display = "none";
        ayuda1.style.display = "none";
        lvls.btn1.style.background = "green";

        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;

        historial.verdad1 = false;
        reiniciar1.style.display = "initial";
        fondo.style.zIndex = "1";
        fondo.style.opacity = "1";
        fondo.style.height = "100%";
        fondo.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar.style.display = "none";
    let info = document.querySelector("#Info1");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar.style.display = "initial";
     clearInterval(id);
    } , 2000)


   }

});

/* boton de reiniciar */

let reiniciar1 = document.querySelector("#reiniciar");
reiniciar1.style.display = "none";

reiniciar1.addEventListener('click' , () => {
  let texto = document.querySelector("#texto1");

  let info = document.querySelector("#Info1");
  if (info.children[0].innerHTML = "Respuesta Completada") {
    historial.verdad1 = true;
    verificar.style.display = "initial";
    ayuda1.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar1.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn1.style.background = "white";
    texto.value = "";
    fondo.style.zIndex = "-1";
    fondo.style.opacity = "0";
    fondo.style.height = "0%";
    fondo.style.transition = "all 1s ease";

  } else {

  }
});

// Level2 ----------------------------------------------------------

let validacion2 = /[Mm][Oo][Nn][Tt][Ee][ ]?[Ee][Vv][Ee][Rr][Ee][Ss][Tt]/;
let reinicio2 = document.querySelector("#reiniciar2");
reinicio2.style.display = "none";

let verificar2 = document.querySelector("#verificar_2");
let ayuda2 = document.querySelector("#ayuda_lvl2");
let info2 = document.querySelector("#Info2");

let verdad2 = true;

/* boton de ayuda */

ayuda2.addEventListener("click" , () => {
  let info = document.querySelector("#Info2");
  info.classList.toggle("activee");

  if (verdad2 === true) {
    info.children[0].innerHTML = "Empieza por la letra M y termina con la letra T";
    verdad2 = false;
    info.style.background = "rgb(143,113,13)"; 
    ayuda2.innerHTML = "Quitar"
  } else if (verdad2 === false) {
    info.children[0].innerHTML = "";
    verdad2 = true;
    ayuda2.innerHTML = "Ayuda"
  }
});

let id2;

/* boton de verificar */

verificar2.addEventListener("click" , () => {

   let texto = document.querySelector("#texto2").value;

   if (validacion2.test(texto) === true) {
    let info = document.querySelector("#Info2");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad2 === true) {
        verificar2.style.display = "none";
        ayuda2.style.display = "none";
        lvls.btn2.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad2 = false;
        reinicio2.style.display = "initial";
        fondo2.style.zIndex = "1";
        fondo2.style.opacity = "1";
        fondo2.style.height = "100%";
        fondo2.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar2.style.display = "none";
    let info = document.querySelector("#Info2");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id2 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar2.style.display = "initial";
     clearInterval(id2);
    } , 2000)

   }

})

/* boton de reinicio */

reinicio2.addEventListener('click' , () => {
  let texto = document.querySelector("#texto2");

  let info = document.querySelector("#Info2");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad2 = true;
    verificar2.style.display = "initial";
    ayuda2.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar2.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn2.style.background = "white";
    texto.value = "";
    fondo2.style.zIndex = "-1";
    fondo2.style.opacity = "0";
    fondo.style.height = "0%";
    fondo.style.transition = "all 1s ease";

  } else {

  }

});

// level3 --------------------------------------------------------


let validacion3 = /[Cc][Ee][Ll][Uu][Ll][Aa][Rr]/;
let reinicio3 = document.querySelector("#reiniciar3");
reinicio3.style.display = "none";

let verificar3 = document.querySelector("#verificar_3");
let ayuda3 = document.querySelector("#ayuda_lvl3");

let verdad3 = true;

/* boton de ayuda */

ayuda3.addEventListener("click" , () => {
  let info = document.querySelector("#Info3");
  info.classList.toggle("activee");

  if (verdad3 === true) {
    info.children[0].innerHTML = "Empieza por la letra C y termina con la letra R";
    info.style.background = "rgb(143,113,13)";
    verdad3 = false;
    ayuda3.innerHTML = "Quitar"
  } else if (verdad3 === false) {
    info.children[0].innerHTML = "";
    verdad3 = true;
    ayuda3.innerHTML = "ayuda"
  }
});

let id3;

/* boton de verificar */

verificar3.addEventListener("click" , () => {

   let texto = document.querySelector("#texto3").value;

   if (validacion3.test(texto) === true) {
    let info = document.querySelector("#Info3");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad3 === true) {
      verificar3.style.display = "none";
        ayuda3.style.display = "none";
        lvls.btn3.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad3 = false;
        reinicio3.style.display = "initial";
        fondo3.style.zIndex = "1";
        fondo3.style.opacity = "1";
        fondo3.style.height = "100%";
        fondo3.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar3.style.display = "none";
    let info = document.querySelector("#Info3");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id3 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar3.style.display = "initial";
     clearInterval(id3);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio3.addEventListener('click' , () => {
  let texto = document.querySelector("#texto3");

  let info = document.querySelector("#Info3");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad3 = true;
    verificar3.style.display = "initial";
    ayuda3.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar3.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn3.style.background = "white";
    texto.value = "";
    fondo3.style.zIndex = "-1";
    fondo3.style.opacity = "0";
    fondo3.style.height = "0%";
    fondo3.style.transition = "all 1s ease";

  } else {

  }

});

// level4 ------------------------------------------------------------

let validacion4 = /[Jj][Ee][Rr][Ii][Nn][Gg][Aa]/;
let reinicio4 = document.querySelector("#reiniciar4");
reinicio4.style.display = "none";

let verificar4 = document.querySelector("#verificar_4");
let ayuda4 = document.querySelector("#ayuda_lvl4");

let verdad4 = true;

/* boton de ayuda */

ayuda4.addEventListener("click" , () => {
  let info = document.querySelector("#Info4");
  info.classList.toggle("activee");

  if (verdad4 === true) {
    info.children[0].innerHTML = "Empieza por la letra J y termina con la letra A";
    verdad4 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda4.innerHTML = "Quitar"
  } else if (verdad4 === false) {
    info.children[0].innerHTML = "";
    verdad4 = true;
    ayuda4.innerHTML = "Ayuda"
  }
});

let id4;

/* boton de verificar */

verificar4.addEventListener("click" , () => {

   let texto = document.querySelector("#texto4").value;

   if (validacion4.test(texto) === true) {
    let info = document.querySelector("#Info4");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad4 === true) {
      verificar4.style.display = "none";
        ayuda4.style.display = "none";
        lvls.btn4.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad4 = false;
        reinicio4.style.display = "initial";
        fondo4.style.zIndex = "1";
        fondo4.style.opacity = "1";
        fondo4.style.height = "100%";
        fondo4.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar4.style.display = "none";
    let info = document.querySelector("#Info4");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id4 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar4.style.display = "initial";
     clearInterval(id4);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio4.addEventListener('click' , () => {
  let texto = document.querySelector("#texto4");

  let info = document.querySelector("#Info4");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad4 = true;
    verificar4.style.display = "initial";
    ayuda4.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar4.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn4.style.background = "white";
    texto.value = "";
    fondo4.style.zIndex = "-1";
    fondo4.style.opacity = "0";
    fondo4.style.height = "0%";
    fondo4.style.transition = "all 1s ease";

  } else {

  }

});

// level5 -------------------------------------------------------------

let validacion5 = /([Cc][Ee][Nn][Aa]|[Aa][Ll][Mm][Uu][Ee][Rr][SsZz][Oo])[ ]?([Aa][Ll][Mm][Uu][Ee][Rr][SsZz][Oo]|[Cc][Ee][Nn][Aa])/;
let reinicio5 = document.querySelector("#reiniciar5");
reinicio5.style.display = "none";

let verificar5 = document.querySelector("#verificar_5");
let ayuda5 = document.querySelector("#ayuda_lvl5");

let verdad5 = true;

/* boton de ayuda */

ayuda5.addEventListener("click" , () => {
  let info = document.querySelector("#Info5");
  info.classList.toggle("activee");

  if (verdad5 === true) {
    info.children[0].innerHTML = "1er Cosa : C y A , 2da Cosa : A y O";
    verdad5 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda5.innerHTML = "Quitar"
  } else if (verdad5 === false) {
    info.children[0].innerHTML = "";
    verdad5 = true;
    ayuda5.innerHTML = "Ayuda"
  }
});

let id5;

/* boton de verificar */

verificar5.addEventListener("click" , () => {

   let texto = document.querySelector("#texto5").value;

   if (validacion5.test(texto) === true) {
    let info = document.querySelector("#Info5");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad5 === true) {
      verificar5.style.display = "none";
        ayuda5.style.display = "none";
        lvls.btn5.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad5 = false;
        reinicio5.style.display = "initial";
        fondo5.style.zIndex = "1";
        fondo5.style.opacity = "1";
        fondo5.style.height = "100%";
        fondo5.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar5.style.display = "none";
    let info = document.querySelector("#Info5");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id5 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar5.style.display = "initial";
     clearInterval(id5);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio5.addEventListener('click' , () => {
  let texto = document.querySelector("#texto5");

  let info = document.querySelector("#Info5");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad5 = true;
    verificar5.style.display = "initial";
    ayuda5.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar5.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn5.style.background = "white";
    texto.value = "";
    fondo5.style.zIndex = "-1";
    fondo5.style.opacity = "0";
    fondo5.style.height = "0%";
    fondo5.style.transition = "all 1s ease";

  } else {

  }

});

// level6 ------------------------------------------------------------

let validacion6 = /[3]/;
let reinicio6 = document.querySelector("#reiniciar6");
reinicio6.style.display = "none";

let verificar6 = document.querySelector("#verificar_6");
let ayuda6 = document.querySelector("#ayuda_lvl6");

let verdad6 = true;

/* boton de ayuda */

ayuda6.addEventListener("click" , () => {
  let info = document.querySelector("#Info6");
  info.classList.toggle("activee");

  if (verdad6 === true) {
    info.children[0].innerHTML = "hay mas de 3 cabezas pensando en este acertijo U:";
    verdad6 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda6.innerHTML = "Quitar"
  } else if (verdad6 === false) {
    info.children[0].innerHTML = "";
    verdad6 = true;
    ayuda6.innerHTML = "Ayuda"
  }
});

let id6;

/* boton de verificar */

verificar6.addEventListener("click" , () => {

   let texto = document.querySelector("#texto6").value;

   if (validacion6.test(texto) === true) {
    let info = document.querySelector("#Info6");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad6 === true) {
      verificar6.style.display = "none";
        ayuda6.style.display = "none";
        lvls.btn6.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad6 = false;
        reinicio6.style.display = "initial";
        fondo6.style.zIndex = "1";
        fondo6.style.opacity = "1";
        fondo6.style.height = "100%";
        fondo6.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar6.style.display = "none";
    let info = document.querySelector("#Info6");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id6 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar6.style.display = "initial";
     clearInterval(id6);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio6.addEventListener('click' , () => {
  let texto = document.querySelector("#texto6");

  let info = document.querySelector("#Info6");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad6 = true;
    verificar6.style.display = "initial";
    ayuda6.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar6.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn6.style.background = "white";
    texto.value = "";
    fondo6.style.zIndex = "-1";
    fondo6.style.opacity = "0";
    fondo6.style.height = "0%";
    fondo6.style.transition = "all 1s ease";

  } else {

  }

});

// level 7 --------------------------------------------------------------

let validacion7 = /[Cc]/;
let reinicio7 = document.querySelector("#reiniciar7");
reinicio7.style.display = "none";

let verificar7 = document.querySelector("#verificar_7");
let ayuda7 = document.querySelector("#ayuda_lvl7");

let verdad7 = true;

/* boton de ayuda */

ayuda7.addEventListener("click" , () => {
  let info = document.querySelector("#Info7");
  info.classList.toggle("activee");

  if (verdad7 === true) {
    info.children[0].innerHTML = "hay mas de 3 cabezas pensando en este acertijo U:";
    verdad7 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda7.innerHTML = "Quitar"
  } else if (verdad7 === false) {
    info.children[0].innerHTML = "";
    verdad7 = true;
    ayuda7.innerHTML = "Ayuda"
  }
});

let id7;

/* boton de verificar */

verificar7.addEventListener("click" , () => {

   let texto = document.querySelector("#texto7").value;

   if (validacion7.test(texto) === true) {
    let info = document.querySelector("#Info7");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad7 === true) {
      verificar7.style.display = "none";
        ayuda7.style.display = "none";
        lvls.btn7.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad7 = false;
        reinicio7.style.display = "initial";
        fondo7.style.zIndex = "1";
        fondo7.style.opacity = "1";
        fondo7.style.height = "100%";
        fondo7.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar7.style.display = "none";
    let info = document.querySelector("#Info7");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id7 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar7.style.display = "initial";
     clearInterval(id7);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio7.addEventListener('click' , () => {
  let texto = document.querySelector("#texto7");

  let info = document.querySelector("#Info7");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad7 = true;
    verificar7.style.display = "initial";
    ayuda7.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar7.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn7.style.background = "white";
    texto.value = "";
    fondo7.style.zIndex = "-1";
    fondo7.style.opacity = "0";
    fondo7.style.height = "0%";
    fondo7.style.transition = "all 1s ease";

  } else {

  }

});

// level8

let validacion8 = /[4]/;
let reinicio8 = document.querySelector("#reiniciar8");
reinicio8.style.display = "none";

let verificar8 = document.querySelector("#verificar_8");
let ayuda8 = document.querySelector("#ayuda_lvl8");

let verdad8 = true;

/* boton de ayuda */

ayuda8.addEventListener("click" , () => {
  let info = document.querySelector("#Info8");
  info.classList.toggle("activee");

  if (verdad8 === true) {
    info.children[0].innerHTML = "si sumas las 11 + 5 , llegaras tarde al trabajo si vas a las 3.";
    verdad8 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda8.innerHTML = "Quitar"
  } else if (verdad8 === false) {
    info.children[0].innerHTML = "";
    verdad8 = true;
    ayuda8.innerHTML = "Ayuda"
  }
});

let id8;

/* boton de verificar */

verificar8.addEventListener("click" , () => {

   let texto = document.querySelector("#texto8").value;

   if (validacion8.test(texto) === true) {
    let info = document.querySelector("#Info8");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad8 === true) {
      verificar8.style.display = "none";
        ayuda8.style.display = "none";
        lvls.btn8.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad8 = false;
        reinicio8.style.display = "initial";
        fondo8.style.zIndex = "1";
        fondo8.style.opacity = "1";
        fondo8.style.height = "100%";
        fondo8.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar8.style.display = "none";
    let info = document.querySelector("#Info8");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id8 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar8.style.display = "initial";
     clearInterval(id8);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio8.addEventListener('click' , () => {
  let texto = document.querySelector("#texto8");

  let info = document.querySelector("#Info8");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad8 = true;
    verificar8.style.display = "initial";
    ayuda8.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar8.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn8.style.background = "white";
    texto.value = "";
    fondo8.style.zIndex = "-1";
    fondo8.style.opacity = "0";
    fondo8.style.height = "0%";
    fondo8.style.transition = "all 1s ease";

  } else {

  }

});

// level9 -------------------------------------------------------

let validacion9 = /[Aa]/;
let reinicio9 = document.querySelector("#reiniciar9");
reinicio9.style.display = "none";

let verificar9 = document.querySelector("#verificar_9");
let ayuda9 = document.querySelector("#ayuda_lvl9");

let verdad9 = true;

/* boton de ayuda */

ayuda9.addEventListener("click" , () => {
  let info = document.querySelector("#Info9");
  info.classList.toggle("activee");

  if (verdad9 === true) {
    info.children[0].innerHTML = "No hay ayuda O_O.";
    verdad9 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda9.innerHTML = "Quitar"
  } else if (verdad9 === false) {
    info.children[0].innerHTML = "";
    verdad9 = true;
    ayuda9.innerHTML = "Ayuda"
  }
});

let id9;

/* boton de verificar */

verificar9.addEventListener("click" , () => {

   let texto = document.querySelector("#texto9").value;

   if (validacion9.test(texto) === true) {
    let info = document.querySelector("#Info9");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad9 === true) {
      verificar9.style.display = "none";
        ayuda9.style.display = "none";
        lvls.btn9.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad9 = false;
        reinicio9.style.display = "initial";
        fondo9.style.zIndex = "1";
        fondo9.style.opacity = "1";
        fondo9.style.height = "100%";
        fondo9.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar9.style.display = "none";
    let info = document.querySelector("#Info9");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id9 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar9.style.display = "initial";
     clearInterval(id9);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio9.addEventListener('click' , () => {
  let texto = document.querySelector("#texto9");

  let info = document.querySelector("#Info9");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad9 = true;
    verificar9.style.display = "initial";
    ayuda9.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar9.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn9.style.background = "white";
    texto.value = "";
    fondo9.style.zIndex = "-1";
    fondo9.style.opacity = "0";
    fondo9.style.height = "0%";
    fondo9.style.transition = "all 1s ease";

  } else {

  }

});

// level10 -------------------------------------------------------

let validacion10 = /[Ff][Uu][Ee][Gg][Oo]/;
let reinicio10 = document.querySelector("#reiniciar10");
reinicio10.style.display = "none";

let verificar10 = document.querySelector("#verificar_10");
let ayuda10 = document.querySelector("#ayuda_lvl10");

let verdad10 = true;

/* boton de ayuda */

ayuda10.addEventListener("click" , () => {
  let info = document.querySelector("#Info10");
  info.classList.toggle("activee");

  if (verdad10 === true) {
    info.children[0].innerHTML = "No hay ayuda O_O.";
    verdad10 = false;
    info.style.background = "rgb(143,113,13)";
    ayuda10.innerHTML = "Quitar"
  } else if (verdad10 === false) {
    info.children[0].innerHTML = "";
    verdad10 = true;
    ayuda10.innerHTML = "Ayuda"
  }
});

let id10;

/* boton de verificar */

verificar10.addEventListener("click" , () => {

   let texto = document.querySelector("#texto10").value;

   if (validacion10.test(texto) === true) {
    let info = document.querySelector("#Info10");
    info.classList.add("activee2");
    info.children[0].innerHTML = "Respuesta Completada";
    info.style.background = "rgb(4, 199, 4)";

    if (historial.verdad10 === true) {
      verificar10.style.display = "none";
        ayuda10.style.display = "none";
        lvls.btn10.style.background = "green";
        let numero = parseInt(historia.style.width) + 10;
        historia.style.width = `${numero}%`;
        historial.verdad10 = false;
        reinicio10.style.display = "initial";
        fondo10.style.zIndex = "1";
        fondo10.style.opacity = "1";
        fondo10.style.height = "100%";
        fondo10.style.transition = "all 1s ease";
    } else {
        
    }

   } else {

    verificar10.style.display = "none";
    let info = document.querySelector("#Info10");
    info.children[0].innerHTML = "Respuesta Incorrecta";
    info.classList.add("activee2");
    info.style.background = "red"

    id10 = setInterval(() => {
     info.classList.remove("activee2");
     info.children[0].innerHTML = "";
     verificar10.style.display = "initial";
     clearInterval(id10);
    } , 2000)

   }

})

/* boton de reiniciar */

reinicio10.addEventListener('click' , () => {
  let texto = document.querySelector("#texto10");

  let info = document.querySelector("#Info10");
  if (info.children[0].innerHTML = "Respuesta Completada") {

    historial.verdad10 = true;
    verificar10.style.display = "initial";
    ayuda10.style.display = "initial";
    info.classList.remove("activee2");
    let numero = parseInt(historia.style.width) - 10;
    historia.style.width = `${numero}%`;
    reiniciar10.style.display = "none";
    info.children[0].innerHTML = ""
    info.style.background = "";
    lvls.btn10.style.background = "white";
    texto.value = "";
    fondo10.style.zIndex = "-1";
    fondo10.style.opacity = "0";
    fondo10.style.height = "0%";
    fondo10.style.transition = "all 1s ease";

  } else {

  }

});