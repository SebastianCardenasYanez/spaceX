import {leftSection, centerSection, rightSection} from "./componetsModule/templates.js";
import {getNameRocket} from "./module/rockets.js";

let pages = document.querySelectorAll(".page");
let main__title = document.querySelector(".main__title");
let main__imges = document.querySelector(".main__imges");
let section__main_center = document.querySelector(".section__main_center")
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")

let page;
let nameRocket;

let num = 0;

pages.forEach(pag => {
    num++;
    pag.id = num;
    console.log(pag)
    pag.addEventListener("click", async(e) => {
        page = pag.id
        nameRocket =await getNameRocket(page);
        section__main_left.innerHTML = await leftSection(nameRocket);
        section__main_center.innerHTML = await centerSection(nameRocket);
        section__main_right.innerHTML = await rightSection(nameRocket);
        main__title.innerHTML = nameRocket.docs[0].name;
        console.log(nameRocket)
    })
})