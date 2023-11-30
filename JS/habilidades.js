/* Se encarga de mostrar la cantidad en la habilidad */

let padreH = document.querySelectorAll(".item_habilidad");
let elementosPH = Array.from(padreH);
elementosPH.forEach((item) => {
    item.addEventListener("mouseenter" , () => {
        let palabra = item.children[0].textContent
        let juntarP = palabra.split(' ');
        let Rfinal = juntarP.join('');
        let titulo = Rfinal;
        let progreso = item.children[1];
        let carga = progreso.children[0];
        let indicador = item.children[2];
        let puntos = 100;

        if (titulo === "HTML") {puntos = 60;}
        else if (titulo === "CSS"){puntos = 50;}
        else if (titulo === "JC"){puntos = 40;}
        else if (titulo === "VB"){puntos = 70;}
        else if (titulo === "C#"){puntos = 40;}
        else if (titulo === "SQL"){puntos = 50;}
        else if (titulo === "MySQL"){puntos = 50;}
        else if (titulo === "PHP"){puntos = 10;}
        else if (titulo === "PostgreSQL"){puntos = 50;}
        else if (titulo === "Xampp"){puntos = 70;}
        else if (titulo === "Comunicacion"){puntos = 50;}
        else if (titulo === "Solucionadordeproblemas"){puntos = 80;}

        carga.style = `width: ${puntos}%;`;
        indicador.innerHTML = `${puntos}%`;
    });

    item.addEventListener("mouseleave" , () => {
        let titulo = item.children[0].textContent;
        let progreso = item.children[1];
        let carga = progreso.children[0];
        let indicador = item.children[2];
        let puntos = 0;

        if (titulo === "HTML") {
          puntos = 0;
        }

        carga.style = `width: ${puntos}%;`;
        indicador.innerHTML = `${puntos}%`;
    });
}); 