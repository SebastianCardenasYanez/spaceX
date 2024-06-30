import {getCapsule} from "../componetsModule/getData.js";

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
        <p>${nameRocket.docs[0].type}</p> 
    </div>
    </article>

    `;
    return plantilla;
};

export const centerSection = async(capsules) => {
    let plantilla = "";
    plantilla = /*html*/`
    <div></div>

    <img src="../storage/rocketCenter.png" width="100%">

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Landings</strong>
    <hr>
    <span>Land</span><strong>${nameRocket.docs[0].land_landings}</strong>
    <span>Water</span><strong>${nameRocket.docs[0].water_landings}</strong>
    </article>

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Activity</strong>
    <hr>
    <span>Status</span><strong>${nameRocket.docs[0].status}</strong>
    <span>Launches</span><strong>${nameRocket.docs[0].launches}</strong>
    <span>Reuse count</span><strong>${nameRocket.docs[0].reuse_count}</strong>
    </article>

    `;
    return plantilla
};

let main__title = document.querySelector(".main__title");
let section__main_center = document.querySelector(".section__main_center")
let section__main_left = document.querySelector(".section__main_left");

export const templateCapsule = async() => {
    capsule =await getCapsule(page);
    section__main_left.innerHTML = await leftSection(capsule);
    section__main_center.innerHTML = await centerSection(capsule);
    footer.innerHTML = await footerRocket();
    main__title.innerHTML = nameRocket.docs[0].name;
}