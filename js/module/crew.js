import {getCrew, getAllCrew} from "../componetsModule/getData.js";
import {footerCrew} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (crew) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Agencia</h3>
                <p>${crew.docs[0].agency}</p> 
            </div>
        </article>
        `
    if(crew.docs[0].agency === 'NASA'){
        plantilla += /*html*/`
        <img src="../storage/nasa.jpg" alt="">
        `
    }else if (crew.docs[0].agency === 'JAXA'){
        plantilla += /*html*/`
        <img src="../storage/Jaxa_logo.svg.png" alt="">
        `
    }else if (crew.docs[0].agency === 'SpaceX'){
        plantilla += /*html*/`
        <img src="../storage/SpaceX_logo_black.svg.png" alt="">
        `
    }else if (crew.docs[0].agency === 'Axiom Space'){
        plantilla += /*html*/`
        <img src="../storage/AxiomSpaceLogo.svg" alt="">
        `
    }else if (crew.docs[0].agency === 'Roscosmos'){
        plantilla += /*html*/`
        <img src="../storage/Roscosmos.svg" alt="">
        `
    }else if (crew.docs[0].agency === 'ESA'){
        plantilla += /*html*/`
        <img src="../storage/esa.svg" alt="">
        `
    }


    return plantilla
}

export const centerSection = async (crew) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <img src="${crew.docs[0].image}" width="180px" height="250px" referrerpolicy="no-referrer" >

    <div></div>
    
    <div></div>

    <article class="article__section_center">
        <strong class="title__table">INFORMATION</strong>
        <hr>
        <span>Reusable</span><strong>${crew.docs[0].name}</strong>
        <span>Engines</span><strong>${crew.docs[0].status}</strong>
        <span>Fuel amount</span><strong>${crew.docs[0].id}</strong>
    </article>
    <div class="main__imges" >
    
    <div></div>
    `;
    return plantilla
}

export const rightSection = async (crew) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>More information</span>
            <a src="${crew.docs[0].wikipedia}">
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

export const templateCrew = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allCrew = await getAllCrew();
    let crew =await getCrew(1);
    section__main_left.innerHTML = await leftSection(crew);
    section__main_center.innerHTML = await centerSection(crew);
    section__main_right.innerHTML = await rightSection(crew);
    footer.innerHTML = await footerCrew();
    main__title.innerHTML = crew.docs[0].name;
    await eventsListener()
    footer.innerHTML = await footerCrew();

    renderPageButtons(allCrew);
    addNavigationButtons(allCrew.length);
}

const renderPageButtons = (allCrew) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allCrew.length);
    console.log(allCrew.length);
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
            let crew =await getCrew(page);
            section__main_left.innerHTML = await leftSection(crew);
            section__main_center.innerHTML = await centerSection(crew);
            section__main_right.innerHTML = await rightSection(crew);
            footer.innerHTML = await footerCrew();
            main__title.innerHTML = crew.docs[0].name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (crew) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allCrew = await getAllCrew();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allCrew)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allCrew = await getAllCrew();
        if ((currentGroup + 1) * groupSize < crew) {
            currentGroup++;
            renderPageButtons(allCrew)
        }
    })
};