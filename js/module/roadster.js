import {getRoadster, getAllRoadster} from "../componetsModule/getData.js";
import {footerRoadster} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (roadster) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Details</h3>
                <p>${roadster.details}</p> 
            </div>
        </article>
        `
        return plantilla
    }

export const centerSection = async (roadster) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <article class="article__section_center">
        <strong class="title__table">Distance</strong>
        <hr>
        <span>Earth distance</span><strong>${roadster.earth_distance_km}km</strong>
        <span>Earth distance</span><strong>${roadster.earth_distance_mi}mi</strong>
        <span>Mars distance</span><strong>${roadster.mars_distance_km}km</strong>
        <span>Mars distance</span><strong>${roadster.mars_distance_mi}mi</strong>
    </article>

    <div></div>
    
    <article class="article__section_center">
        <strong class="title__table">Launch</strong>
        <hr>
        <span>Date utc</span><strong>${roadster.launch_date_utc}</strong>
        <span>Date unix</span><strong>${roadster.launch_date_unix}</strong>
        <span>Mass kg</span><strong>${roadster.launch_mass_kg}</strong>
        <span>Mass lbs</span><strong>${roadster.launch_mass_lbs}</strong>
    </article>
    <div class="main__imges" >
    `

    let roadsters = roadster.flickr_images
    roadsters.forEach(async images => {
        plantilla += /*html*/`
            <img class="images__rockets" src="${images}" referrerpolicy="no-referrer">
            `
    })

    plantilla += /*html*/`
    </div>
    <article class="article__section_center">
        <strong class="title__table">AU</strong>
        <hr>
        <span>Apoapsis</span><strong>${roadster.apoapsis_au}</strong>
        <span>Periapsis</span><strong>${roadster.periapsis_au}</strong>
        <span>Semi major axis</span><strong>${roadster.semi_major_axis_au}</strong>
        <span>Mean anomaly</span><strong>${roadster.mean_anomaly}</strong>
    </article>

    <div></div>

    <div></div>
    `;
    return plantilla
}

export const rightSection = async (roadster) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <h2 class="title_right_section">Information</h2>
        <span>Norad id</span>
        <strong>${roadster.norad_id}</strong>
    </article>

    <article class="article__section_right">
        <span>Epoch jd</span>
        <strong>${roadster.epoch_jd}</strong>
    </article>

    <article class="article__section_right">
        <span>Orbit type</span>
        <strong>${roadster.orbit_type}</strong>
    </article>

    <article class="article__section_right">
        <span>Eccentricity</span>
        <strong>${roadster.eccentricity}</strong>
    </article>

    <article class="article__section_right">
        <span>Period days</span>
        <strong>${roadster.period_days}</strong>
    </article>

    <article class="article__section_right">
        <span>Speed</span>
        <strong>${roadster.speed_kph}kph</strong>
    </article>

    <article class="article__section_right">
        <strong>${roadster.speed_mph}</strong>
    </article>
    `
    return plantilla
}

let pages = document.querySelector(".page");
let main__title = document.querySelector(".main__title");
let section__main_center = document.querySelector(".section__main_center")
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")
let footer = document.querySelector(".footer")

let currentGroup = 0;
const groupSize = 4;

export const templateRoadster = async() => {
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allRoadster = await getAllRoadster();
    let roadster =await getRoadster(1);
    section__main_left.innerHTML = await leftSection(allRoadster);
    section__main_center.innerHTML = await centerSection(allRoadster);
    section__main_right.innerHTML = await rightSection(allRoadster);
    footer.innerHTML = await footerRoadster();
    main__title.innerHTML = allRoadster.name;
    await eventsListener()

    renderPageButtons(allRoadster);
    addNavigationButtons(allRoadster.length);
}

const renderPageButtons = (allRoadster) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allRoadster.length);

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
            let roadster =await getRoadster(page);
            section__main_left.innerHTML = await leftSection(allRoadster);
            section__main_center.innerHTML = await centerSection(allRoadster);
            section__main_right.innerHTML = await rightSection(allRoadster);
            footer.innerHTML = await footerRoadster();
            main__title.innerHTML = allRoadster.name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (allRoadster) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allRoadster = await getAllRoadster();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allRoadster)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allRoadster = await getAllRoadster();
        if ((currentGroup + 1) * groupSize < allRoadster) {
            currentGroup++;
            renderPageButtons(allRoadster)
        }
    })
};