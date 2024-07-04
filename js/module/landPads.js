import {getLandpads, getAllLandpads} from "../componetsModule/getData.js";
import {footerLandspad} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (landpad) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Details</h3>
                <p>${landpad.docs[0].details}</p> 
            </div>
        </article>

    <article class="article__section_left">
            <strong>type</strong>
            <p>${landpad.docs[0].type}</p> 
    </article>
        `
        return plantilla
    }

export const centerSection = async (landpad) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <img src="${landpad.docs[0].images.large[0]}" width="450px" height="320px" style="border-radius: 20px" referrerpolicy="no-referrer" >

    <div></div>
    
    <div></div>

    <article class="article__section_center">
        <strong class="title__table">INFORMATION</strong>
        <hr>
        <span>name</span><strong>${landpad.docs[0].name}</strong>
        <span>Status</span><strong>${landpad.docs[0].status}</strong>
        <span>Region</span><strong>${landpad.docs[0].region}</strong>
        <span>Locality</span><strong>${landpad.docs[0].locality}</strong>
    </article>
    
    <div></div>
    `;
    return plantilla
}

export const rightSection = async (landpad) => {
    let plantilla = "";
    plantilla += /*html*/`

    <article class="article__section_right">
        <span>Latitude</span>
        <strong>${landpad.docs[0].latitude}</strong>
    </article>

    <article class="article__section_right">
        <span>Longitude</span>
        <strong>${landpad.docs[0].longitude}</strong>
    </article>

    <article class="article__section_right">
        <span>Landing attempts</span>
        <strong>${landpad.docs[0].landing_attempts}</strong>
    </article>

    <article class="article__section_right">
        <span>Landing successes</span>
        <strong>${landpad.docs[0].landing_successes}</strong>
    </article>

    <article class="article__section_right">
        <span>More information</span>
            <a src="${landpad.docs[0].wikipedia}">
            <img src="storage/Wikipedia-Logo.png" width="100px" >
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

export const templateLandpad = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allLandpad = await getAllLandpads();
    let landpad =await getLandpads(1);
    section__main_left.innerHTML = await leftSection(landpad);
    section__main_center.innerHTML = await centerSection(landpad);
    section__main_right.innerHTML = await rightSection(landpad);
    footer.innerHTML = await footerLandspad();
    main__title.innerHTML = landpad.docs[0].full_name;
    await eventsListener();

    renderPageButtons(allLandpad);
    addNavigationButtons(allLandpad.length);
}

const renderPageButtons = (allLandpad) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allLandpad.length);
    console.log(allLandpad.length);
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
            let landpad =await getLandpads(page);
            section__main_left.innerHTML = await leftSection(landpad);
            section__main_center.innerHTML = await centerSection(landpad);
            section__main_right.innerHTML = await rightSection(landpad);
            footer.innerHTML = await footerLandspad();
            main__title.innerHTML = landpad.docs[0].full_name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (landpad) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allLandpad = await getAllLandpads();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allLandpad)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allLandpad = await getAllLandpads();
        if ((currentGroup + 1) * groupSize < landpad) {
            currentGroup++;
            renderPageButtons(allLandpad)
        }
    })
};