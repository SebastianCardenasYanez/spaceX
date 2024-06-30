import {getCapsule} from "../componetsModule/getData.js";
import {footerCapsules} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async(capsules) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >last update</h3>
                <p>${capsules.docs[0].last_update}</p> 
            </div>
    </article>

    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
    <div class="text__section_left">
        <strong>Type</strong>
        <p>${capsules.docs[0].type}</p> 
    </div>
    </article>

    `;
    return plantilla;
};

export const centerSection = async(capsules) => {
    let plantilla = "";
    plantilla = /*html*/`
    <div></div>

    <img src="../storage/rocketCenter.png" width="320px" height="200px" >

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Landings</strong>
    <hr>
    <span>Land</span><strong>${capsules.docs[0].land_landings}</strong>
    <span>Water</span><strong>${capsules.docs[0].water_landings}</strong>
    </article>

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Activity</strong>
    <hr>
    <span>Status</span><strong>${capsules.docs[0].status}</strong>
    <span>Launches</span><strong>${capsules.docs[0].launches}</strong>
    <span>Reuse count</span><strong>${capsules.docs[0].reuse_count}</strong>
    </article>

    `;
    return plantilla
};
let main__title = document.querySelector(".main__title");
let section__main_center = document.querySelector(".section__main_center");
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")
let footer = document.querySelector(".footer")

export const templateCapsule = async() => {
    let pages = document.querySelectorAll(".page"); 
    let page;
    let capsule;
    let num = 0;
    footer.innerHTML = await footerCapsules();
    pages.forEach(pag => {
        num++;
        pag.id = num;
        pag.textContent = num;
        main__title.innerHTML = "";
        console.log(pag)
        pag.addEventListener("click", async(e) => {
            page = pag.id
            capsule =await getCapsule(page);
            console.log(capsule);
            section__main_left.innerHTML = await leftSection(capsule);
            section__main_center.innerHTML = await centerSection(capsule);
            section__main_right.innerHTML = "";
            footer.innerHTML = await footerCapsules();
            await eventsListener()
            main__title.innerHTML = capsule.docs[0].serial;
 })
})
}