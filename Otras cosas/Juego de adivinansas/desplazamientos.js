/* botones para los niveles */

let lvlss = {
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

let ancla = document.querySelector(".lvl1");
let id;
let video = document.querySelector("#fondo");

lvlss.btn1.addEventListener("click" , () => {
    ancla.classList.add("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");
   
    lvlss.btn1.style.boxShadow = "inset 0px 0px 5px black";
    
    for (let I = 1 ; I < Object.keys(lvlss).length ; I++) {
        let clave = Object.keys(lvlss)[I];
        let valor = lvlss[clave];
        valor.style.boxShadow = "0px 0px 0px black";
    }

    clearInterval(id);

    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);

});

lvlss.btn2.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
     ancla.classList.add("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

    lvlss.btn2.style.boxShadow = "inset 0px 0px 5px black";

    for (let I = 0 ; I < Object.keys(lvlss).length ; I--) {
        let clave = Object.keys(lvlss)[I];
        let valor = lvlss[clave];
        valor.style.boxShadow = "0px 0px 0px black";
        break;
    }

    for (let I = 2 ; I < Object.keys(lvlss).length ; I++) {
        let clave = Object.keys(lvlss)[I];
        let valor = lvlss[clave];
        valor.style.boxShadow = "0px 0px 0px black";
    }

    clearInterval(id);

    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);

});

lvlss.btn3.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.add("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

    lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn3.style.boxShadow = "inset 0px 0px 5px black";

    for (let I = 3 ; I < Object.keys(lvlss).length ; I++) {
        let clave = Object.keys(lvlss)[I];
        let valor = lvlss[clave];
        valor.style.boxShadow = "0px 0px 0px black";
    }

    clearInterval(id);

    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);

});

lvlss.btn4.addEventListener("click" , () => {

   
   ancla.classList.remove("ancla");
   ancla.classList.remove("ancla2");
   ancla.classList.remove("ancla3");
   ancla.classList.add("ancla4");
   ancla.classList.remove("ancla5");
   ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

   lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn4.style.boxShadow = "inset 0px 0px 5px black";

   for (let I = 4 ; I < Object.keys(lvlss).length ; I++) {
    let clave = Object.keys(lvlss)[I];
    let valor = lvlss[clave];
    valor.style.boxShadow = "0px 0px 0px black";
}

   clearInterval(id);

   video.playbackRate = 6.0;
   id = setInterval(() => {
       video.playbackRate = 1.0;
       clearInterval(id);
   } , 1000);

});

lvlss.btn5.addEventListener("click" , () => {

   ancla.classList.remove("ancla");
   ancla.classList.remove("ancla2");
   ancla.classList.remove("ancla3");
   ancla.classList.remove("ancla4");
   ancla.classList.add("ancla5");
   ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

   lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn4.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn5.style.boxShadow = "inset 0px 0px 5px black";

   for (let I = 5 ; I < Object.keys(lvlss).length ; I++) {
    let clave = Object.keys(lvlss)[I];
    let valor = lvlss[clave];
    valor.style.boxShadow = "0px 0px 0px black";
    }

   clearInterval(id);

   video.playbackRate = 6.0;
   id = setInterval(() => {
       video.playbackRate = 1.0;
       clearInterval(id);
   } , 1000);

});

lvlss.btn6.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.add("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

    lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn4.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn5.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn6.style.boxShadow = "inset 0px 0px 5px black";
 
    for (let I = 6 ; I < Object.keys(lvlss).length ; I++) {
     let clave = Object.keys(lvlss)[I];
     let valor = lvlss[clave];
     valor.style.boxShadow = "0px 0px 0px black";
     }
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn7.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.add("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

   lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn4.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn5.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn6.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn7.style.boxShadow = "inset 0px 0px 5px black";
 
    for (let I = 7 ; I < Object.keys(lvlss).length ; I++) {
     let clave = Object.keys(lvlss)[I];
     let valor = lvlss[clave];
     valor.style.boxShadow = "0px 0px 0px black";
     }
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn8.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.add("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.remove("ancla10");

   lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn4.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn5.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn6.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn7.style.boxShadow = "inset 0px 0px 0px black";
   lvlss.btn8.style.boxShadow = "inset 0px 0px 5px black";
 
    for (let I = 8 ; I < Object.keys(lvlss).length ; I++) {
     let clave = Object.keys(lvlss)[I];
     let valor = lvlss[clave];
     valor.style.boxShadow = "0px 0px 0px black";
     }
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn9.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.add("ancla9");
    ancla.classList.remove("ancla10");
 
    lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn4.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn5.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn6.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn7.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn8.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn9.style.boxShadow = "inset 0px 0px 5px black";
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });

 lvlss.btn10.addEventListener("click" , () => {

    ancla.classList.remove("ancla");
    ancla.classList.remove("ancla2");
    ancla.classList.remove("ancla3");
    ancla.classList.remove("ancla4");
    ancla.classList.remove("ancla5");
    ancla.classList.remove("ancla6");
    ancla.classList.remove("ancla7");
    ancla.classList.remove("ancla8");
    ancla.classList.remove("ancla9");
    ancla.classList.add("ancla10");
 
    lvlss.btn1.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn2.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn3.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn4.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn5.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn6.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn7.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn8.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn9.style.boxShadow = "inset 0px 0px 0px black";
    lvlss.btn10.style.boxShadow = "inset 0px 0px 5px black";
 
    clearInterval(id);
 
    video.playbackRate = 6.0;
    id = setInterval(() => {
        video.playbackRate = 1.0;
        clearInterval(id);
    } , 1000);
 
 });


/* botones de desplazamiento de niveles */

let arriba = document.querySelector("#Arriba");
let anclaM = document.querySelector("#lvl1");
let numeroV = 2;
let numeroV2 = 2;

// margin-top: -1625%;
arriba.addEventListener("click" , () => {

    let ancla = document.querySelector(".content1");
    let ancla2 = document.querySelector(".content2");

    if (numeroV === 0 || numeroV2 === 0) {
        ancla.style.transform = `translateX(0%)`;
        ancla.style.transition = `all 300ms ease`;
        ancla2.style.transform = `translateX(0%)`;
        ancla2.style.transition = `all 300ms ease`;
        numeroV2 = 2;
    }

});

let abajo = document.querySelector("#Abajo");

abajo.addEventListener("click" , () => {

    let ancla = document.querySelector(".content1");
    let ancla2 = document.querySelector(".content2");

    if (numeroV === 2 || numeroV2 === 2) {
        ancla.style.transform = `translateX(-50%)`;
        ancla.style.transition = `all 300ms ease`;
        ancla2.style.transform = `translateX(-50%)`;
        ancla2.style.transition = `all 300ms ease`;
        numeroV = 1;
        numeroV2 = 0;
    } else if (numeroV === 1) {
        ancla.style.transform = `translateX(-100%)`;
        ancla.style.transition = `all 300ms ease`;
        ancla2.style.transform = `translateX(-100%)`;
        ancla2.style.transition = `all 300ms ease`;
        numeroV = 0;
    }

   

});