import {getLaunchPads, getAllLaunchPads} from "../componetsModule/getData.js";
import {footerLaunchpads} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async(launchpad) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Details</h3>
                <p>${launchpad.docs[0].name}</p> 
            </div>
    </article>

    <article class="article__section_left">
    <div class="text__section_left">
        <p>${launchpad.docs[0].details}</p> 
    </div>
</article>

    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
    <div class="text__section_left">
        <strong>Status</strong>
        <p>${launchpad.docs[0].status}</p> 
    </div>
    </article>

    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
        <div class="text__section_left">
            <strong>Timezone</strong>
            <p>${launchpad.docs[0].timezone}</p> 
        </div>
    </article>
    `;
    return plantilla;
};

export const centerSection = async(launchpad) => {
    let plantilla = "";
    plantilla += /*html*/`

    <div></div>
    
    <img src="${launchpad.docs[0].images.large}"  width="320px" height="220px" referrerpolicy="no-referrer" style="border-radius: 20px">


    <div></div>

    <div></div>
    `

    if (launchpad.docs[0].rockets[0] !== undefined) {
        plantilla += /*html*/`
        <article class="rocket_launch_table">
        <strong class="title__rocket_launch">Rockets</strong>
        <hr>
        `;
        for (let i = 0; i < (launchpad.docs[0].rockets).length; i++) {
            plantilla += /*html*/`   
        <span>${launchpad.docs[0].rockets[i]}</span>
            `;
        };
        if (launchpad.docs[0].launches[0] !== undefined) {
            plantilla += /*html*/`
            <hr>
            <strong class="title__rocket_launch">Launches</strong>
            <hr>
            `;
            for(let j = 0; j < (launchpad.docs[0].launches).length; j++) {
                plantilla += /*html*/`
                <span>${launchpad.docs[0].launches[j]}</span>
                `;
            }
        }
        plantilla += /*html*/`
            </article>
        `;
    }else {
        plantilla += /*html*/`
        <div></div>
        `;
    };
    plantilla += /*html*/`
    <div></div>

    <div></div>

    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Launch_pad_40_awaiting_Falcon_9_rocket.jpg"  width="320px" height="220px" referrerpolicy="no-referrer" style="border-radius: 20px">
    </div>

    <div></div>
    `;
    return plantilla
};

export const rightSection = async (launchpad) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <h2 class="title_right_section">Specifications</h2>
        <span>locality</span>
        <strong>${launchpad.docs[0].locality}</strong>
    </article>

    <article class="article__section_right">
        <span>Region</span>
        <strong>${launchpad.docs[0].region}</strong>
    </article>

    <article class="article__section_right">
        <span>Latitude</span>
        <strong>${launchpad.docs[0].latitude}</strong>
    </article>

    <article class="article__section_right">
        <span>longitude</span>
        <strong>${launchpad.docs[0].longitude}</strong>
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

export const templateLaunchpad = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allLaunchpad = await getAllLaunchPads();
    let launchpad =await getLaunchPads(1);
    section__main_left.innerHTML = await leftSection(launchpad);
    section__main_center.innerHTML = await centerSection(launchpad);
    section__main_right.innerHTML = await rightSection(launchpad);
    footer.innerHTML = await footerLaunchpads();
    main__title.innerHTML = launchpad.docs[0].full_name;
    await eventsListener()

    renderPageButtons(allLaunchpad);
    addNavigationButtons(allLaunchpad.length);
}

const renderPageButtons = (allLaunchpad) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allLaunchpad.length);
    console.log(allLaunchpad.length);
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
            let launchpad =await getLaunchPads(page);
            section__main_left.innerHTML = await leftSection(launchpad);
            section__main_center.innerHTML = await centerSection(launchpad);
            section__main_right.innerHTML = await rightSection(launchpad);
            footer.innerHTML = await footerLaunchpads();
            main__title.innerHTML = launchpad.docs[0].full_name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (launchpad) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allLaunchpad = await getAllLaunchPads();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allLaunchpad)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allLaunchpad = await getAllLaunchPads();
        if ((currentGroup + 1) * groupSize < launchpad) {
            currentGroup++;
            renderPageButtons(allLaunchpad)
        }
    })
};