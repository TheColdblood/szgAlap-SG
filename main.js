import { szamologep } from "./index.js";

szamologep();

const szamokELEM=document.getElementsByClassName("szamok")[0];
szamokELEM.innerHTML=szamologep();



const gombELEMEK = document.querySelectorAll(".szamok button")

for (let index = 0; index < gombELEMEK.length; index++) {
    gombELEMEK[index].addEventListener("click", kattintas)    
}

function kattintas(){
    console.log(event.target)
    /* kijelzot megfogjuk */
    const kifejezesELEM = document.querySelector(".kifejezes")
    /* beleirjuk */
    kifejezesELEM.innerHTML = event.target.innerHTML
}
