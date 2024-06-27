import {leftSection} from "./componetsModule/templates.js";
import {getNameRocket} from "./module/rockets.js";

let pages = document.querySelectorAll(".page");
let page__2 = document.querySelector("#page__2");
let page__3 = document.querySelector("#page__3");
let page__4 = document.querySelector("#page__4");
let main__title = document.querySelector(".main__title");

let page;
let nameRocket;
let section__main_left = document.querySelector(".section__main_left");

let num = 0;

pages.forEach(pag => {
    num++;
    pag.id = num;
    console.log(pag)
    pag.addEventListener("click", async(e) => {
        page = pag.id
        nameRocket =await getNameRocket(page);
        section__main_left.innerHTML = await leftSection(nameRocket)
        main__title.innerHTML = nameRocket.docs[0].name;
        console.log(nameRocket)
    })
})