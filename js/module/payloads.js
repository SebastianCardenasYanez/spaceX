import {getPayLoads, getAllPayLoads} from "../componetsModule/getData.js";
import {footerPayloads} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (payloads) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Description</h3>
                <strong>Type</strong>
                <p>${payloads.docs[0].type}</p> 
            </div>
        </article>

    <article class="article__section_left">
            <strong>reused</strong>
            <p>${payloads.docs[0].reused}</p> 
    </article>

    <article class="article__section_left">
        <strong>Orbit</strong>
        <p>${payloads.docs[0].orbit}</p> 
    </article>

    <article class="article__section_left">
        <strong>Reference system</strong>
        <p>${payloads.docs[0].reference_system}</p> 
    </article>

    <article class="article__section_left">
        <strong>Regime</strong>
        <p>${payloads.docs[0].regime}</p> 
    </article>

    <article class="article__section_left">
        <strong>Inclination</strong>
        <p>${payloads.docs[0].inclination_deg}</p> 
    </article>

    <article class="article__section_left">
        <strong>Epoch</strong>
        <p>${payloads.docs[0].epoch}</p> 
    </article>
        `
        return plantilla
    }

export const centerSection = async (payloads) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <img src="storage/rocketCenter.png" width="250px" height="160px" referrerpolicy="no-referrer" >

    <div></div>
    
    <article class="article__section_center">
        <strong class="title__table">Detail</strong>
        <hr>
        <span>Mass kg</span><strong>${payloads.docs[0].mass_kg}</strong>
        <span>Mass lbs</span><strong>${payloads.docs[0].mass_lbs}</strong>
        <span>Periapsis</span><strong>${payloads.docs[0].periapsis_km}km</strong>
        <span>Apoapsis</span><strong>${payloads.docs[0].apoapsis_km}km</strong>
    </article>

    <article class="article__section_center">
        <strong class="title__table">Detail</strong>
        <hr>
        <span>Customers</span><strong>${payloads.docs[0].customers}</strong>
        <span>Norad ids</span><strong>${payloads.docs[0].norad_ids}</strong>
        <span>Nationalities</span><strong>${payloads.docs[0].nationalities}</strong>
        <span>manufacturers</span><strong>${payloads.docs[0].mean_anomaly}</strong>
    </article>
    
    <article class="article__section_center">
        <strong class="title__table">Detail</strong>
        <hr>
        <span>Period min</span><strong>${payloads.docs[0].period_min}</strong>
        <span>Lifespan years</span><strong>${payloads.docs[0].lifespan_years}</strong>
        <span>Mean motion</span><strong>${payloads.docs[0].mean_motion}</strong>
        <span>Mean anomaly</span><strong>${payloads.docs[0].mean_anomaly}</strong>
    </article>
    `;
    return plantilla
}

export const rightSection = async (payloads) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <h2 class="title_right_section">Dragon</h2>
        <span>Capsule</span>
        <strong>${payloads.docs[0].dragon.capsule}</strong>
    </article>

    <article class="article__section_right">
        <span>Mass kg</span>
        <strong>${payloads.docs[0].dragon.mass_returned_kg}</strong>
    </article>

    <article class="article__section_right">
        <span>Mass lbs</span>
        <strong>${payloads.docs[0].dragon.mass_returned_lbs}</strong>
    </article>

    <article class="article__section_right">
        <span>Time</span>
        <strong>${payloads.docs[0].dragon.flight_time_sec}</strong>
    </article>

    <article class="article__section_right">
        <span>Manifest</span>
        <strong>${payloads.docs[0].dragon.manifest}</strong>
    </article>

    <article class="article__section_right">
        <span>Water landing</span>
        <strong>${payloads.docs[0].dragon.water_landing}</strong>
    </article>

    <article class="article__section_right">
        <span>Land landing</span>
        <strong>${payloads.docs[0].dragon.land_landing}</strong>
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

export const templatePayloads = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allPayloads = await getAllPayLoads();
    let payloads =await getPayLoads(1);
    section__main_left.innerHTML = await leftSection(payloads);
    section__main_center.innerHTML = await centerSection(payloads);
    section__main_right.innerHTML = await rightSection(payloads);
    footer.innerHTML = await footerPayloads();
    main__title.innerHTML = payloads.docs[0].name;
    await eventsListener()

    renderPageButtons(allPayloads);
    addNavigationButtons(allPayloads.length);
}

const renderPageButtons = (allPayloads) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allPayloads.length);
    console.log(allPayloads.length);
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
            let payloads =await getPayLoads(page);
            section__main_left.innerHTML = await leftSection(payloads);
            section__main_center.innerHTML = await centerSection(payloads);
            section__main_right.innerHTML = await rightSection(payloads);
            footer.innerHTML = await footerPayloads();
            main__title.innerHTML = payloads.docs[0].name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (payloads) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allPayloads = await getAllPayLoads();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allPayloads)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allPayloads = await getAllPayLoads();
        if ((currentGroup + 1) * groupSize < payloads) {
            currentGroup++;
            renderPageButtons(allPayloads)
        }
    })
};