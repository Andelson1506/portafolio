/* animacion de carga */

let contenedor_loader = document.querySelector(".contenedor_loader");
setTimeout(() => {
  contenedor_loader.classList.add("contenedor_loader3");
  setTimeout(() => {
    let contenedor_padre500 = document.querySelector(".contenedor_padre");
    contenedor_padre500.removeChild(contenedor_loader);
  } , 3000);
} , 10000);

/* Funcionalidad de Ajustes */

/* Video */

let fondo = document.getElementById("fondo");

let SFondo = document.querySelectorAll("#SFondo");
let fondos = Array.from(SFondo);
fondos.forEach((item) => {
  item.addEventListener("click", () => {
    let imagenS = item.children[1];

    let fondo = document.querySelector("#fondo");
    fondo.classList.add("activacion");

    setTimeout(() => {
      let imagenA = fondo.children[0];
      imagenA.src = imagenS.src;
      fondo.load();
      fondo.classList.remove("activacion");
    }, 1000);
  });
});

/* Colores */

const colorInput = document.querySelectorAll("#color");
let coloresI = Array.from(colorInput);
coloresI.forEach((item) => {
  item.addEventListener("input", () => {
    let colorElegido = item.value;
    let padre = item.parentElement;
    let inputtext = padre.children[1].children[1];
    inputtext.value = colorElegido;
  });
});

/* color1 */

let superiorC = document.querySelector("#superiorC");
superiorC.addEventListener("click", () => {
  let colorS = superiorC.parentElement.children[1];
  let nuevoColor = colorS.value; // Nuevo color que deseas aplicar
  document.documentElement.style.setProperty("--EncabezadoCarpeta", nuevoColor);
});

/* color2 */

let FMC = document.querySelector("#FMC");
FMC.addEventListener("click", () => {
  let colorS = FMC.parentElement.children[1];
  let nuevoColor = colorS.value; // Nuevo color que deseas aplicar
  document.documentElement.style.setProperty("--MenuCarpeta", nuevoColor);
});

/* color3 */

let FIC = document.querySelector("#FIC");
FIC.addEventListener("click", () => {
  let colorS = FIC.parentElement.children[1];
  let nuevoColor = colorS.value; // Nuevo color que deseas aplicar
  document.documentElement.style.setProperty("--InteriorCarpeta", nuevoColor);
});

/* color4 */

let FICC = document.querySelector("#FICC");
FICC.addEventListener("click", () => {
  let colorS = FICC.parentElement.children[1];
  let nuevoColor = colorS.value; // Nuevo color que deseas aplicar
  document.documentElement.style.setProperty(
    "--InformacionCarpeta",
    nuevoColor
  );
});

/* color4 */

let FBC = document.querySelector("#FBC");
FBC.addEventListener("click", () => {
  let colorS = FBC.parentElement.children[1];
  let nuevoColor = colorS.value; // Nuevo color que deseas aplicar
  document.documentElement.style.setProperty("--barraC", nuevoColor);
});

/* color5 */

let CLA = document.querySelector("#CLA");
CLA.addEventListener("click", () => {
  let colorS = CLA.parentElement.children[1];
  let nuevoColor = colorS.value; // Nuevo color que deseas aplicar
  document.documentElement.style.setProperty("--colorLetra3", nuevoColor);
});

/* btn de cambiar el tipo de movimiento entre contenedor */

let inicial = document.querySelector("#Ainicial");
inicial.addEventListener("click", () => {
  let referenciaA = document.querySelector(".controles_carpeta").children[0];
  referenciaA.innerHTML = "1";
  referenciaA.classList.add("Acarga");
  setTimeout(() => {
    referenciaA.classList.remove("Acarga");
  }, 600);

  let elementI = document.querySelectorAll(".cardinfo");
  let elementIS = Array.from(elementI);

  elementIS.forEach((item) => {
    if (referenciaA.innerHTML == 1) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 2) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 3) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 4) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    }
  });

});

let RX = document.querySelector("#RX");
RX.addEventListener("click", () => {
  let referenciaA = document.querySelector(".controles_carpeta").children[0];
  referenciaA.innerHTML = "2";
  referenciaA.classList.add("Acarga");
  setTimeout(() => {
    referenciaA.classList.remove("Acarga");
  }, 600);

  let elementI = document.querySelectorAll(".cardinfo");
  let elementIS = Array.from(elementI);

  elementIS.forEach((item) => {
    if (referenciaA.innerHTML == 1) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 2) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 3) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 4) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    }
  });

});

let RA = document.querySelector("#RY");
RA.addEventListener("click", () => {
  let referenciaA = document.querySelector(".controles_carpeta").children[0];
  referenciaA.innerHTML = "3";
  referenciaA.classList.add("Acarga");
  setTimeout(() => {
    referenciaA.classList.remove("Acarga");
  }, 600);

  let elementI = document.querySelectorAll(".cardinfo");
  let elementIS = Array.from(elementI);

  elementIS.forEach((item) => {
    if (referenciaA.innerHTML == 1) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 2) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 3) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 4) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    }
  });

});

let RY = document.querySelector("#RA");
RY.addEventListener("click", () => {
  let referenciaA = document.querySelector(".controles_carpeta").children[0];
  referenciaA.innerHTML = "4";
  referenciaA.classList.add("Acarga");
  setTimeout(() => {
    referenciaA.classList.remove("Acarga");
  }, 600);

  let elementI = document.querySelectorAll(".cardinfo");
  let elementIS = Array.from(elementI);

  elementIS.forEach((item) => {
    if (referenciaA.innerHTML == 1) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 2) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 3) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 4) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    }
  });

});

/* btn para restablecer la configuracion */

let reformatear = document.querySelector("#reformatear");
reformatear.addEventListener("click", () => {
  let referenciaA = document.querySelector(".controles_carpeta").children[0];
  referenciaA.innerHTML = "1";

  let body = document.body;
  body.classList.add("Acarga");

  setTimeout(() => {
    body.classList.remove("Acarga");
  }, 600);

  let c1 = "#3c4a66";
  let c2 = "#273144";
  let c3 = "#282828";
  let c4 = "#273144";
  let c5 = "#082032";
  let c6 = "white";

  let contenedorimg = document.querySelector(".contenedor_items_img_F");
  let img = contenedorimg.children[0].children[1];

  let fondo = document.querySelector("#fondo");
  fondo.classList.add("activacion");

  setTimeout(() => {
    let imagenA = fondo.children[0];
    imagenA.src = img.src;
    fondo.load();
    fondo.classList.remove("activacion");
  }, 1000);

  document.documentElement.style.setProperty("--EncabezadoCarpeta", c1);
  document.documentElement.style.setProperty("--MenuCarpeta", c2);
  document.documentElement.style.setProperty("--InteriorCarpeta", c3);
  document.documentElement.style.setProperty("--InformacionCarpeta", c4);
  document.documentElement.style.setProperty("--barraC", c5);
  document.documentElement.style.setProperty("--colorLetra3", c6);

  let elementI = document.querySelectorAll(".cardinfo");
  let elementIS = Array.from(elementI);

  elementIS.forEach((item) => {
    if (referenciaA.innerHTML == 1) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 2) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 3) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    } else if (referenciaA.innerHTML == 4) {
      item.classList.remove("inicial");
      item.classList.remove("ARX");
      item.classList.remove("ARY");
      item.classList.remove("AE");
    }
  });

});
