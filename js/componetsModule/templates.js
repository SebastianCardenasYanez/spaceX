import {getNameRocket} from "../module/rockets.js";

let section__main_left = document.querySelector(".section__main_left");
let pages = document.querySelectorAll(".page");

export const leftSection = async (nameRocket) => {
    let plantilla = "";
        console.log(nameRocket.docs[0].name);
        plantilla = /*html*/`
        <article class="article__section_left">
            <img src="storage/Check Icon.svg" alt="">
            <div class="text__section_left">
                <h3 class="title__descrip" >Description</h3>
                <p>${nameRocket.docs[0].description}</p> 
                <strong>Active</strong>
                <span>${nameRocket.docs[0].active}</span>
            </div>
        </article>
        `
    return plantilla

}
