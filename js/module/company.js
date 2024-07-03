import {getAllCompany} from "../componetsModule/getData.js";
import {footerCompany} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async(allCompany) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Summary</h3>
                <p>${allCompany.summary}</p> 
            </div>
    </article>

    <article class="article__section_left">
    <div class="text__section_left">
        <strong>founder</strong>
        <p>${allCompany.founder}</p> 
    </div>
    </article>

    <article class="article__section_left">
        <div class="text__section_left">
            <strong>founded</strong>
            <p>${allCompany.founded}</p> 
        </div>
    </article>
    
    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>valuation</strong>
            <p>${allCompany.valuation}</p> 
        </div>
    </article>

    `;
    return plantilla;
};

export const centerSection = async(allCompany) => {
    let plantilla = "";
    plantilla = /*html*/`

    <div></div>

    <img src="storage/elon-musk.webp" width="200px">

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Executive Team</strong>
    <hr>
    <span>ceo</span><strong>${allCompany.ceo}</strong>
    <span>cto</span><strong>${allCompany.cto}kg</strong>
    <span>coo</span><strong>${allCompany.coo}lbs</strong>
    <span>cto propulsion</span><strong>${allCompany.cto_propulsion}</strong>
    </article>
    
    <article class="article__section_center">
    <strong class="title__table">Headquarters</strong>
    <hr>
        <span>state</span><strong>${allCompany.headquarters.state}</strong>
        <span>city</span><strong>${allCompany.headquarters.city}</strong>
        <span>address</span><strong>${allCompany.headquarters.address}</strong>
    </article>

    <article class="article__section_center">
    <strong class="title__table">info</strong>
    <hr>
        <span>employees</span><strong>${allCompany.employees}</strong>
        <span>vehicles</span><strong>${allCompany.vehicles}</strong>
        <span>launch sites</span><strong>${allCompany.launch_sites}</strong>
        <span>test_sites</span><strong>${allCompany.test_sites}</strong>
    </article>
    `;
    return plantilla
};

export const rightSection = async (allCompany) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>Redes</span>
            <a src="${allCompany.links.website}">
            <img src="storage/x_spaceX.webp" width="70px" >
            </a>
    </article>

    <article class="article__section_right">
    <span>Redes</span>
            <a src="${allCompany.links.flickr}">
            <img src="storage/flickr_logo.webp" width="70px" >
            </a>
    </article>

    <article class="article__section_right">
        <a src="${allCompany.links.twitter}">
        <img src="storage/x_twitter.avif" width="70px" >
        </a>
    </article>
    `
    return plantilla
};

let pages = document.querySelector(".page"); 
let main__title = document.querySelector(".main__title");
let section__main_center = document.querySelector(".section__main_center");
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")
let footer = document.querySelector(".footer")

let currentGroup = 0;
const groupSize = 4;

export const templateCompany = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allCompany = await getAllCompany();
    section__main_left.innerHTML = await leftSection(allCompany);
    section__main_center.innerHTML = await centerSection(allCompany);
    section__main_right.innerHTML = await rightSection(allCompany);
    footer.innerHTML = await footerCompany();
    main__title.innerHTML = allCompany.name;
    await eventsListener();

    renderPageButtons(allCompany);
    addNavigationButtons(allCompany.length);
}

const renderPageButtons = (allCompany) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allCompany.length);
    console.log(allCompany.length);
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
            section__main_left.innerHTML = await leftSection(allCompany);
            section__main_center.innerHTML = await centerSection(allCompany);
            section__main_right.innerHTML = await rightSection(allCompany);
            footer.innerHTML = await footerCompany();
            main__title.innerHTML = allCompany.name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (allCompany) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allCompany)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allCompany = await getAllCompany();
        if ((currentGroup + 1) * groupSize < allCompany) {
            currentGroup++;
            renderPageButtons(allCompany)
        }
    })
};