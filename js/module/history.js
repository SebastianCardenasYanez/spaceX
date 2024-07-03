import {getHistory, getAllHistory} from "../componetsModule/getData.js";
import {footerHistory} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async(history) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Details</h3>
                <p>${history.docs[0].details}</p> 
            </div>
    </article>

    <article class="article__section_left">
        <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>Event date utc</strong>
            <p>${history.docs[0].event_date_utc}</p> 
        </div>
    </article>

    <article class="article__section_left">
        <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>Event date unix</strong>
            <p>${history.docs[0].event_date_unix}</p> 
        </div>
    </article>

    `;
    return plantilla;
};

export const centerSection = async(history) => {
    let plantilla = "";
    plantilla = /*html*/`

    <div></div>

    <img src="storage/rocketCenter.png" width="320px" height="200px" >

    <div></div>

    `;
    return plantilla
};

export const rightSection = async (history) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>More information</span>
            <a src="${history.docs[0].links.article}">
            <img src="storage/x_spaceX.webp" width="100px" >
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

export const templateHistory = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allHistory = await getAllHistory();
    let history =await getHistory(1);
    section__main_left.innerHTML = await leftSection(history);
    section__main_center.innerHTML = await centerSection(history);
    section__main_right.innerHTML = await rightSection(history);
    footer.innerHTML = await footerHistory();
    main__title.innerHTML = history.docs[0].title;
    await eventsListener();

    renderPageButtons(allHistory);
    addNavigationButtons(allHistory.length);
}

const renderPageButtons = (allHistory) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allHistory.length);
    console.log(allHistory.length);
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
            let history =await getHistory(page);
            section__main_left.innerHTML = await leftSection(history);
            section__main_center.innerHTML = await centerSection(history);
            section__main_right.innerHTML = await rightSection(history);
            footer.innerHTML = await footerHistory();
            main__title.innerHTML = history.docs[0].title;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (history) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allHistory = await getAllHistory();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allHistory)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allHistory = await getAllHistory();
        if ((currentGroup + 1) * groupSize < history) {
            currentGroup++;
            renderPageButtons(allHistory)
        }
    })
};