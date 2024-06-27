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
            <img src="storage/Check Icon.svg" alt="">
            <div class="text__section_left">
                <strong>Cost per launch</strong>
                <p>${nameRocket.docs[0].cost_per_launch}</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/Check Icon.svg" alt="">
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
        <img src="storage/Check Icon.svg" alt="">
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
    plantilla = /*html*/`
    
        `
    return plantilla
}