import {getNameRocket} from "../module/rockets.js";

let section__main_left = document.querySelector(".section__main_left");
let pages = document.querySelectorAll(".page");

export const leftSection = async (nameRocket) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Description</h3>
                <p>${nameRocket.docs[0].description}</p> 
            </div>
        </article>

        <article class="article__section_left">
            <img src="storage/coin.svg" alt="">
            <div class="text__section_left">
                <strong>Cost per launch</strong>
                <p>${nameRocket.docs[0].cost_per_launch}</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/flag.svg" alt="">
            <div class="text__section_left">
                <strong>Country</strong>
                <p>${nameRocket.docs[0].country}</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/Check Icon.svg" alt="">
            <div class="text__section_left">
                <strong>Succes rate</strong>
                <p>${nameRocket.docs[0].success_rate_pct}%</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/launcer.svg" alt="">
            <div class="text__section_left">
                <strong>First flight</strong>
                <p>${nameRocket.docs[0].first_flight}</p> 
            </div>
        </article>
        `
    return plantilla
}

export const centerSection = async (nameRocket) => {
    let plantilla = "";

    plantilla += /*html*/`
    <div class="circular-progress css3"></div>

    <div class="circular-progress css3"></div>

    <div class="circular-progress css3"></div>
    
    <article class="article__section_center">
        <strong class="title__table">Stage 1</strong>
        <hr>
        <span>Reusable</span><strong>${nameRocket.docs[0].first_stage.reusable}</strong>
        <span>Engines</span><strong>${nameRocket.docs[0].first_stage.engines}</strong>
        <span>Fuel amount</span><strong>${nameRocket.docs[0].first_stage.fuel_amount_tons}</strong>
        <span>Burn time</span><strong>${nameRocket.docs[0].first_stage.burn_time_sec}</strong>
    </article>
    <div class="main__imges" >
    `;

    let rocket = nameRocket.docs[0].flickr_images
    rocket.forEach(async images => {
        plantilla += /*html*/`
            <img class="images__rockets" src="${images}" referrerpolicy="no-referrer">
            `
    })

    plantilla += /*html*/`
    </div>
    <article class="article__section_center">
                <strong class="title__table">Stage 2</strong>
                <hr>
                <span>Reusable</span><strong>${nameRocket.docs[0].first_stage.reusable}</strong>
                <span>Engines</span><strong>${nameRocket.docs[0].first_stage.engines}</strong>
                <span>Fuel amount</span><strong>${nameRocket.docs[0].first_stage.fuel_amount_tons}</strong>
                <span>Burn time</span><strong>${nameRocket.docs[0].first_stage.burn_time_sec}</strong>
            </article>

            <article class="article__section_center">
                <strong class="title__table">INFORMATION ROCKET</strong>
                <hr>
                <span>Type</span><strong>${nameRocket.docs[0].type}</strong>
                <span>Rocket service</span><strong>${nameRocket.docs[0].active == true ? nameRocket.docs[0].active : "No service"}</strong>
                <span>Number of stages</span><strong>${nameRocket.docs[0].stages}</strong>
                <span>Boosters</span><strong>${nameRocket.docs[0].boosters}</strong>
            </article>

            <article class="article__section_center">
                <strong class="title__table">ENGINE INFORMATION</strong>
                <hr>
                <span>Type</span><strong>${nameRocket.docs[0].engines.type}</strong>
                <span>Maximum power loss</span><strong>${nameRocket.docs[0].engines.engine_loss_max}</strong>
                <span>Engine availability</span><strong>${nameRocket.docs[0].engines.layout}</strong>
                <span>Number of engines</span><strong>${nameRocket.docs[0].engines.number}</strong>
            </article>
    `;

    return plantilla
}

export const rightSection = async (nameRocket) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>Rocket weight</span>
        <div class="text__bar_right">
            <progress>progess bar of data</progress>
            <strong>${nameRocket.docs[0].mass.kg}kg</strong>
        </div>
    </article>

    <article class="article__section_right">
    <span>Rocket Height</span>
    <div class="text__bar_right">
        <progress>progess bar of data</progress>
        <strong>${nameRocket.docs[0].height.meters}m</strong>
    </div>
    </article>

    <article class="article__section_right">
        <span>${nameRocket.docs[0].payload_weights[0].name}</span>
        <div class="text__bar_right">
            <progress>progess bar of data</progress>
            <strong>${nameRocket.docs[0].payload_weights[0].kg}kg</strong>
        </div>
    </article>

    <article class="article__section_right">
        <span>Rocket diameter</span>
        <div class="text__bar_right">
            <progress>progess bar of data</progress>
            <strong>${nameRocket.docs[0].diameter.meters}m</strong>
        </div>
    </article>

    <article class="article__section_right">
    <span>Height rocket shield</span>
        <div class="text__bar_right">
            <progress>progess bar of data</progress>
            <strong>${nameRocket.docs[0].second_stage.payloads.composite_fairing.height.meters}m</strong>
        </div>
    </article>
    `
    return plantilla
}