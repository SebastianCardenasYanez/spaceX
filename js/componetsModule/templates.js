import {getNameRocket} from "../module/rockets.js";

let section__main_left = document.querySelector(".section__main_left");
let pages = document.querySelectorAll(".page");

export const leftSection = async () => {
    let plantilla = "";
    console.log(pages);
    pages.forEach(async page => {
        let pag = page.textContent
        console.log(pag)
        let nameRocket = await getNameRocket(pag);
        console.log(nameRocket.docs[0].name);
        plantilla = /*html*/`
        <article class="article__section_left">
            <img src="storage/Check Icon.svg" alt="">
            <div class="text__section_left">
                <strong>${nameRocket.docs[0].name}</strong> 
                <span>${nameRocket.docs[0].active}</span>
            </div>
        </article>
        `
        section__main_left.innerHTML += plantilla;

    })
}
leftSection()