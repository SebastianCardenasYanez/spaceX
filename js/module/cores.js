import {getCores, getAllCores} from "../componetsModule/getData.js";
import {footerCores} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (core) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Last update</h3>
                <p>${core.docs[0].last_update}</p> 
            </div>
        </article>

    <article class="article__section_left">
            <strong>status</strong>
            <p>${core.docs[0].status}</p> 
    </article>
        `
        return plantilla
    }

export const centerSection = async (core) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <img src="../storage/rocketCenter.png" width="250px" height="160px" referrerpolicy="no-referrer" >

    <div></div>
    
    <article class="article__section_center">
        <strong class="title__table">RTLS</strong>
        <hr>
        <span>Reusable</span><strong>${core.docs[0].rtls_attempts}</strong>
        <span>Engines</span><strong>${core.docs[0].rtls_landings}</strong>
    </article>

    <div></div>
    
    <article class="article__section_center">
        <strong class="title__table">ASDS</strong>
        <hr>
        <span>Reusable</span><strong>${core.docs[0].asds_attempts}</strong>
        <span>Engines</span><strong>${core.docs[0].asds_landings}</strong>
    </article>
    `;
    return plantilla
}

export const rightSection = async (core) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>Block</span>
        <strong>${core.docs[0].block}</strong>
    </article>

    <article class="article__section_right">
        <span>Reuse count</span>
        <strong>${core.docs[0].reuse_count}</strong>
    </article>
    `
    for (let i = 0; i < core.docs[0].launches; i++) {
        plantilla += /*html*/`
        <article class="article__section_right">
            <strong>Launches</strong>
            <span>${core.docs[0].launches[i]}</span>
        </article>
        `;
    }

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

export const templateCores = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allCores = await getAllCores();
    let cores =await getCores(1);
    section__main_left.innerHTML = await leftSection(cores);
    section__main_center.innerHTML = await centerSection(cores);
    section__main_right.innerHTML = await rightSection(cores);
    footer.innerHTML = await footerCores();
    main__title.innerHTML = cores.docs[0].serial;
    await eventsListener()

    renderPageButtons(allCores);
    addNavigationButtons(allCores.length);
}

const renderPageButtons = (allCores) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allCores.length);
    console.log(allCores.length);
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
            let cores =await getCores(page);
            section__main_left.innerHTML = await leftSection(cores);
            section__main_center.innerHTML = await centerSection(cores);
            section__main_right.innerHTML = await rightSection(cores);
            footer.innerHTML = await footerCores();
            main__title.innerHTML = cores.docs[0].serial;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (cores) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allCores = await getAllCores();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allCores)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allCores = await getAllCores();
        if ((currentGroup + 1) * groupSize < cores) {
            currentGroup++;
            renderPageButtons(allCores)
        }
    })
};