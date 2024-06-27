import {leftSection} from "./componetsModule/templates.js";
import {getNameRocket} from "./module/rockets.js";

let pages = document.querySelectorAll(".page");
let page__2 = document.querySelector("#page__2");
let page__3 = document.querySelector("#page__3");
let page__4 = document.querySelector("#page__4");
let main__title = document.querySelector(".main__title");

let page;
let nameRocket;

pages.forEach(pag => {
    pag.addEventListener("click", async(e) => {
        page = 1
        nameRocket =await getNameRocket(page);
        console.log(nameRocket.docs[0].name);
        main__title.innerHTML = nameRocket.docs[0].name;
    })
})

// page__2.addEventListener("click", async(e) => {
//     page = 2
//     nameRocket = await getNameRocket(page);
//     console.log(nameRocket.docs[0].name);
//     main__title.innerHTML = nameRocket.docs[0].name;
//     console.log(nameRocket)
// })

// page__3.addEventListener("click", async(e) => {
//     page = 3
//     nameRocket = await getNameRocket(page);
//     console.log(nameRocket.docs[0].name);
//     main__title.innerHTML = nameRocket.docs[0].name;
//     console.log(nameRocket);
// })

// page__4.addEventListener("click", async(e) => {
//     page = 4
//     nameRocket = await getNameRocket(page);
//     console.log(nameRocket.docs[0].name);
//     main__title.innerHTML = nameRocket.docs[0].name;
//     console.log(nameRocket)
// })