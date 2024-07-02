import {getShip, getAllShips} from "../componetsModule/getData.js";
import {footerShip} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async(ships) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >legacy id</h3>
                <p>${ships.docs[0].legacy_id}</p> 
            </div>
    </article>

    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
    <div class="text__section_left">
        <strong>Type</strong>
        <p>${ships.docs[0].type}</p> 
    </div>
    </article>

    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>active</strong>
            <p>${ships.docs[0].active}</p> 
        </div>
    </article>

    <img src="${ships.docs[0].image}" referrerpolicy="no-referrer" >

    `;
    return plantilla;
};

export const centerSection = async(ships) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_center">
    <strong class="title__table">info</strong>
    <hr>
    <span>class</span><strong>${ships.docs[0].class}</strong>
    <span>mass</span><strong>${ships.docs[0].mass_kg}kg</strong>
    <span>mass</span><strong>${ships.docs[0].mass_lbs}lbs</strong>
    <span>year built</span><strong>${ships.docs[0].year_built}</strong>
    </article>
    
    <div></div>

    <article class="article__section_center">
    <strong class="title__table">info</strong>
    <hr>
    <span>imo</span><strong>${ships.docs[0].imo}</strong>
    <span>mmsi</span><strong>${ships.docs[0].mmsi}</strong>
    <span>abs</span><strong>${ships.docs[0].abs}</strong>
    <span>speed kn</span><strong>${ships.docs[0].speed_kn}</strong>

    </article>
    `;
    return plantilla
};

export const rightSection = async (ships) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>More information</span>
            <a src="${ships.docs[0].link}">
            <img src="../storage/icon_marineTraffic.png" width="100px" >
            </a>
    </article>
    `
    return plantilla
}


let pages = document.querySelector(".page"); 
let main__title = document.querySelector(".main__title");
let section__main_center = document.querySelector(".section__main_center");
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")
let footer = document.querySelector(".footer")

let currentGroup = 0;
const groupSize = 4;

export const templateShips = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allShips = await getAllShips();
    let ship =await getShip(1);
    section__main_left.innerHTML = await leftSection(ship);
    section__main_center.innerHTML = await centerSection(ship);
    section__main_right.innerHTML = await rightSection(ship);
    footer.innerHTML = await footerShip();
    main__title.innerHTML = ship.docs[0].name;
    await eventsListener();

    renderPageButtons(allShips);
    addNavigationButtons(allShips.length);
}

const renderPageButtons = (allShips) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allShips.length);
    console.log(allShips.length);
    for (let i = starPage; i < endPage; i++) {
        let button = document.createElement('div')
        button.textContent = i + 1
        button.classList.add('page_btn');
        pages.appendChild(button)
    }

    let page_btn = document.querySelectorAll(".page_btn")
    page_btn.forEach(pag => {
        console.log(pag)
        pag.addEventListener("click", async(e) => {
            let page = pag.textContent
            let ship =await getShip(page);
            section__main_left.innerHTML = await leftSection(ship);
            section__main_center.innerHTML = await centerSection(ship);
            section__main_right.innerHTML = await rightSection(ship);
            footer.innerHTML = await footerShip();
            main__title.innerHTML = ship.docs[0].name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (ship) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allShips = await getAllShips();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allShips)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allShips = await getAllShips();
        if ((currentGroup + 1) * groupSize < ship) {
            currentGroup++;
            renderPageButtons(allShips)
        }
    })
};