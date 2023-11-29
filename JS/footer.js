/* ---------- funcionalidad para el footer ---------- */

/* atribuciones funcionalidad */

let btncN = 100;
let btnC = document.querySelector("#btnCM");
btnC.addEventListener("click" , () => {
    if (btncN === 100) {
        let C_ancla = document.querySelector(".C_anclacc");
        C_ancla.classList.add(`moveCP${btncN}`);
        btncN = 200;
    } else if (btncN === 200){
        let C_ancla = document.querySelector(".C_anclacc");
        C_ancla.classList.add(`moveCP${btncN}`);
        C_ancla.classList.remove(`moveCP100`);
    } else {

    }
});

let btn2C = document.querySelector("#btnCM2");
btn2C.addEventListener("click" , () => {
    if (btncN === 100) {
        let C_ancla = document.querySelector(".C_anclacc");
        C_ancla.classList.remove(`moveCP${btncN}`);
    } else if (btncN === 200){
        let C_ancla = document.querySelector(".C_anclacc");
        C_ancla.classList.remove(`moveCP${btncN}`);
        C_ancla.classList.add(`moveCP100`);
        btncN = 100;
    } else {

    }
});