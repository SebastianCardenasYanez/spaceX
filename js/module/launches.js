import {getLaunch, getAllLaunch} from "../componetsModule/getData.js";
import {footerLaunch} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";


export const leftSection = async (launch) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Details</h3>
                <p>${launch.docs[0].details}</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>Static fire date</strong>
            <p>${launch.docs[0].static_fire_date_utc}</p> 
        </div>
        </article>
        
        <article class="article__section_left">
        <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>Flight number</strong>
            <p>${launch.docs[0].flight_number}</p> 
        </div>
        </article>

        <article class="article__section_left">
        <div class="text__section_left">
            <strong>Success</strong>
            <p>${launch.docs[0].success}</p> 
        </div>
        </article>

        <article class="article__section_left">
        <div class="text__section_left">
            <strong>Date utc</strong>
            <p>${launch.docs[0].date_utc}</p> 
        </div>
        </article>
        `
        return plantilla
    }

export const centerSection = async(launch) => {
    let plantilla = "";
    plantilla = /*html*/`
    <div></div>

    <img src="../storage/rocketCenter.png" width="320px" height="200px" >

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Fairings</strong>
    <hr>
    <span>Reused</span><strong>${launch.docs[0].reused}</strong>
    <span>Recovery attempt</span><strong>${launch.docs[0].recovery_attempt}</strong>
    <span>Recovered</span><strong>${launch.docs[0].recovered}</strong>
    </article>

    <div></div>
    `
    if (launch.docs[0].failures[0]) {
        plantilla += /*html*/`
        <article class="article__section_center">
        <strong class="title__table">Failures</strong>
        <hr>
        <span>Time</span><strong>${launch.docs[0].failures[0].time}</strong>
        <span>Altitude</span><strong>${launch.docs[0].failures[0].altitude}</strong>
        <span>reason</span><strong>${launch.docs[0].failures[0].reason}</strong>
        </article>
        `
    }else {
      plantilla += /*html*/`
      <div></div>
      `
    };

    plantilla += /*html*/`
    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Cores</strong>
    <hr>
    <span>Flight</span><strong>${launch.docs[0].cores[0].flight}</strong>
    <span>Landing attempt</span><strong>${launch.docs[0].cores[0].landing_attempt}</strong>
    <span>Landing success</span><strong>${launch.docs[0].cores[0].landing_success}</strong>
    <span>Landing type</span><strong>${launch.docs[0].cores[0].landing_type}</strong>
    </article>

    <div></div>

    `;
    return plantilla
};

export const rightSection = async (launch) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>More information</span>
            <a src="${launch.docs[0].links.webcast}">
            <img src="../storage/youtube.svg" width="100px" >
            </a>
    </article>

    <article class="article__section_right">
        <a src="${launch.docs[0].links.article}">
        <img src="../storage/article-svgrepo-com.svg" width="100px" >
        </a>
    </article>

    <article class="article__section_right">
        <a src="${launch.docs[0].links.wikipedia}">
        <img src="../storage/Wikipedia-Logo.png" width="100px" >
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

export const templateLaunch = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allLaunch = await getAllLaunch();
    let launch =await getLaunch(1);
    section__main_left.innerHTML = await leftSection(launch);
    section__main_center.innerHTML = await centerSection(launch);
    section__main_right.innerHTML = await rightSection(launch);
    footer.innerHTML = await footerLaunch();
    main__title.innerHTML = launch.docs[0].name;
    await eventsListener();

    renderPageButtons(allLaunch);
    addNavigationButtons(allLaunch.length);
}

const renderPageButtons = (allLaunch) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allLaunch.length);
    console.log(allLaunch.length);
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
            let launch =await getLaunch(page);
            section__main_left.innerHTML = await leftSection(launch);
            section__main_center.innerHTML = await centerSection(launch);
            section__main_right.innerHTML = await rightSection(launch);
            footer.innerHTML = await footerLaunch();
            main__title.innerHTML = launch.docs[0].name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (launch) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allLaunch = await getAllLaunch();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allLaunch)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allLaunch = await getAllLaunch();
        if ((currentGroup + 1) * groupSize < launch) {
            currentGroup++;
            renderPageButtons(allLaunch)
        }
    })
};