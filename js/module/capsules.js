import {getCapsule, getAllCapsules} from "../componetsModule/getData.js";
import {footerCapsules} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async(capsules) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >last update</h3>
                <p>${capsules.docs[0].last_update}</p> 
            </div>
    </article>

    <article class="article__section_left">
    <img src="storage/coin.svg" alt="">
    <div class="text__section_left">
        <strong>Type</strong>
        <p>${capsules.docs[0].type}</p> 
    </div>
    </article>

    `;
    return plantilla;
};

export const centerSection = async(capsules) => {
    let plantilla = "";
    plantilla = /*html*/`
    <div></div>

    <img src="storage/rocketCenter.png"  width="350px" height="220px" >

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Landings</strong>
    <hr>
    <span>Land</span><strong>${capsules.docs[0].land_landings}</strong>
    <span>Water</span><strong>${capsules.docs[0].water_landings}</strong>
    </article>

    <div></div>

    <article class="article__section_center">
    <strong class="title__table">Activity</strong>
    <hr>
    <span>Status</span><strong>${capsules.docs[0].status}</strong>
    <span>Reuse count</span><strong>${capsules.docs[0].reuse_count}</strong>
    </article>

    `;
    return plantilla
};

export const rightSection = async () => {
    let plantilla = "";
    plantilla += /*html*/`
    <img src="https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Screen-Shot-2022-03-24-at-1.41.51-PM-low_res-scale-2_00x-gigapixel.png" width="350px" height="220px" style="border-radius: 20px" referrerpolicy="no-referrer" >
`
return plantilla;
}


let pages = document.querySelector(".page"); 
let main__title = document.querySelector(".main__title");
let section__main_center = document.querySelector(".section__main_center");
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")
let footer = document.querySelector(".footer")

let currentGroup = 0;
const groupSize = 4;

export const templateCapsule = async() => {
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    let capsule;
    pages.innerHTML = "";
    let allCapsules = await getAllCapsules();
    capsule =await getCapsule(1);
    console.log(capsule.docs[0].serial)
    main__title.innerHTML = capsule.docs[0].serial;
    section__main_left.innerHTML = await leftSection(capsule);
    section__main_center.innerHTML = await centerSection(capsule);
    section__main_right.innerHTML = await rightSection();
    footer.innerHTML = await footerCapsules();
    await eventsListener();

    renderPageButtons(allCapsules);
    addNavigationButtons(allCapsules.length);
};

const renderPageButtons = (allCapsules) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allCapsules.length);
    for (let i = starPage; i < endPage; i++) {
        let button = document.createElement('div')
        button.textContent = i + 1
        button.classList.add('page_btn');
        pages.appendChild(button)
    }

    let page_btn = document.querySelectorAll(".page_btn");
    page_btn.forEach(pag => {
        console.log(pag)
        pag.addEventListener("click", async(e) => {
            let page = pag.textContent;
            let capsule =await getCapsule(page);
            main__title.innerHTML = capsule.docs[0].serial;
            section__main_left.innerHTML = await leftSection(capsule);
            section__main_center.innerHTML = await centerSection(capsule);
            section__main_right.innerHTML = await rightSection();
            footer.innerHTML = await footerCapsules();
            await eventsListener()
 })
})
};

const addNavigationButtons = async(totalCapsules) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    let allCapsules = await getAllCapsules();
    selectPrevButton.addEventListener("click", () => {
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allCapsules)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allCapsules = await getAllCapsules();
        if ((currentGroup + 1) * groupSize < totalCapsules) {
            currentGroup++;
            renderPageButtons(allCapsules)
        }
    })
};