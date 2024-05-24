/* animacion de carga */
let carga_btn = document.getElementById("carga_btn");
carga_btn.addEventListener("click" , () => {
    let carga_contenedor = document.querySelector(".carga");
    carga_contenedor.style.height= "100vh";
    carga_contenedor.style.opacity= "1";

    let container_all_modulus = document.querySelector(".container_all_modulus");
    setTimeout(() => {
        container_all_modulus.style.opacity= "0";
        setTimeout(() => {
            container_all_modulus.style.opacity= "1";   
        }, 3500);
    }, 1000);

    setTimeout(() => {
        carga_contenedor.style.height= "0px";
        carga_contenedor.style.opacity= "0";
    }, 4000);
});