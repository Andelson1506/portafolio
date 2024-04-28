let btn_menu = document.getElementById("btn_menu");
btn_menu.addEventListener("click" , () => {
    let configuration_container = document.getElementById("configuration_container");
    if (configuration_container.classList.contains("none")){
        configuration_container.classList.toggle("none");
        setTimeout(() => {
            configuration_container.classList.toggle("scale");
        }, 100)
    } else {
        configuration_container.classList.toggle("scale");
        setTimeout(() => {
            configuration_container.classList.toggle("none");
        }, 400)
    }
});