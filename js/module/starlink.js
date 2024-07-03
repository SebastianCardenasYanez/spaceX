import {getStarlink, getAllStarlink} from "../componetsModule/getData.js";
import {footerStarlink} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (starlink) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Description</h3>
                <strong>Comment</strong>
                <p>${starlink.docs[0].spaceTrack.COMMENT}</p> 
            </div>
        </article>

    <article class="article__section_left">
            <strong>Date creation</strong>
            <p>${starlink.docs[0].spaceTrack.CREATION_DATE}</p> 
    </article>

    <article class="article__section_left">
        <strong>Originator</strong>
        <p>${starlink.docs[0].spaceTrack.ORIGINATOR}</p> 
    </article>

    <article class="article__section_left">
        <strong>Object id</strong>
        <p>${starlink.docs[0].spaceTrack.OBJECT_ID}</p> 
    </article>

    <article class="article__section_left">
        <strong>Center name</strong>
        <p>${starlink.docs[0].spaceTrack.CENTER_NAME}</p> 
    </article>

    <article class="article__section_left">
        <strong>Frame</strong>
        <p>${starlink.docs[0].spaceTrack.REF_FRAME}</p> 
    </article>

    <article class="article__section_left">
        <strong>Time system</strong>
        <p>${starlink.docs[0].spaceTrack.TIME_SYSTEM}</p> 
    </article>

    <article class="article__section_left">
        <strong>EPOCH</strong>
        <p>${starlink.docs[0].spaceTrack.EPOCH}</p> 
    </article>

    <article class="article__section_left">
        <strong>Eccentricity</strong>
        <p>${starlink.docs[0].spaceTrack.ECCENTRICITY}</p> 
    </article>

    <article class="article__section_left">
        <strong>Inclination</strong>
        <p>${starlink.docs[0].spaceTrack.INCLINATION}</p> 
    </article>

    <article class="article__section_left">
        <strong>RA OF ASC NODE</strong>
        <p>${starlink.docs[0].spaceTrack.RA_OF_ASC_NODE}</p> 
    </article>

    <article class="article__section_left">
        <strong>Arg of pericenter</strong>
        <p>${starlink.docs[0].spaceTrack.ARG_OF_PERICENTER}</p> 
    </article>

    <article class="article__section_left">
        <strong>mean anomaly</strong>
        <p>${starlink.docs[0].spaceTrack.MEAN_ANOMALY}</p> 
    </article>

    <article class="article__section_left">
        <strong>ephemeris type</strong>
        <p>${starlink.docs[0].spaceTrack.EPHEMERIS_TYPE}</p> 
    </article>

    <article class="article__section_left">
        <strong>classification type</strong>
        <p>${starlink.docs[0].spaceTrack.CLASSIFICATION_TYPE}</p> 
    </article>

    <article class="article__section_left">
        <strong>Norad cat id</strong>
        <p>${starlink.docs[0].spaceTrack.NORAD_CAT_ID}</p> 
    </article>

    <article class="article__section_left">
        <strong>Element set no</strong>
        <p>${starlink.docs[0].spaceTrack.ELEMENT_SET_NO}</p> 
    </article>
        `
        return plantilla
    }

export const centerSection = async (starlink) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <img src="../storage/rocketCenter.png" width="250px" height="160px" referrerpolicy="no-referrer" >

    <div></div>
    
    <article class="article__section_center">
        <strong class="title__table">info</strong>
        <hr>
        <span>Version</span><strong>${starlink.docs[0].version}</strong>
        <span>Height km</span><strong>${starlink.docs[0].height_km}</strong>
        <span>Velocity kms</span><strong>${starlink.docs[0].velocity_kms}</strong>
        <span>Longitude</span><strong>${starlink.docs[0].longitude}</strong>
    </article>

    <article class="article__section_center">
        <strong class="title__table">TLE LINE</strong>
        <hr>
        <span>TLE_LINE0</span><strong>${starlink.docs[0].spaceTrack.TLE_LINE0}</strong>
        <span>TLE_LINE1</span><strong>${starlink.docs[0].spaceTrack.TLE_LINE1}</strong>
        <span>TLE_LINE2</span><strong>${starlink.docs[0].spaceTrack.TLE_LINE2}</strong>
    </article>
    
    <article class="article__section_center">
        <strong class="title__table">Mean</strong>
        <hr>
        <span>MOTION</span><strong>${starlink.docs[0].spaceTrack.MEAN_MOTION}</strong>
        <span>MOTION DOT</span><strong>${starlink.docs[0].spaceTrack.MEAN_MOTION_DOT}</strong>
        <span>MOTION_DDOT</span><strong>${starlink.docs[0].spaceTrack.MEAN_MOTION_DDOT}</strong>
        <span>ELEMENT THEORY</span><strong>${starlink.docs[0].spaceTrack.MEAN_ELEMENT_THEORY}</strong>
    </article>
    `;
    return plantilla
}

export const rightSection = async (starlink) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <h2 class="title_right_section">Details</h2>
        <span>Country code</span>
        <strong>${starlink.docs[0].COUNTRY_CODE}</strong>
    </article>

    <article class="article__section_right">
        <span>RCS size</span>
        <strong>${starlink.docs[0].RCS_SIZE}</strong>
    </article>

    <article class="article__section_right">
        <span>Object type</span>
        <strong>${starlink.docs[0].spaceTrack.OBJECT_TYPE}</strong>
    </article>

    <article class="article__section_right">
        <span>Periapsis</span>
        <strong>${starlink.docs[0].spaceTrack.PERIAPSIS}</strong>
    </article>

    <article class="article__section_right">
        <span>Apoapsis</span>
        <strong>${starlink.docs[0].spaceTrack.APOAPSIS}</strong>
    </article>

    <article class="article__section_right">
        <span>Period</span>
        <strong>${starlink.docs[0].spaceTrack.PERIOD}</strong>
    </article>

    <article class="article__section_right">
        <span>Semimajor axis</span>
        <strong>${starlink.docs[0].spaceTrack.SEMIMAJOR_AXIS}</strong>
    </article>

    <article class="article__section_right">
        <span>BSTAR</span>
        <strong>${starlink.docs[0].spaceTrack.BSTAR}</strong>
    </article>

    <article class="article__section_right">
        <span>REV AT EPOCH</span>
        <strong>${starlink.docs[0].spaceTrack.REV_AT_EPOCH}</strong>
    </article>    

    <article class="article__section_right">
        <span>Launch date</span>
        <strong>${starlink.docs[0].spaceTrack.LAUNCH_DATE}</strong>
    </article>

    <article class="article__section_right">
        <span>Site</span>
        <strong>${starlink.docs[0].spaceTrack.SITE}</strong>
    </article>

    <article class="article__section_right">
        <span>Decay date</span>
        <strong>${starlink.docs[0].spaceTrack.DECAY_DATE}</strong>
    </article>

    <article class="article__section_right">
        <span>Decayed</span>
        <strong>${starlink.docs[0].spaceTrack.DECAYED}</strong>
    </article>

    <article class="article__section_right">
        <span>File</span>
        <strong>${starlink.docs[0].spaceTrack.FILE}</strong>
    </article>

    <article class="article__section_right">
        <span>GP_ID</span>
        <strong>${starlink.docs[0].spaceTrack.GP_ID}</strong>
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

export const templateStarlink = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allStarlink = await getAllStarlink();
    let starlink =await getStarlink(1);
    section__main_left.innerHTML = await leftSection(starlink);
    section__main_center.innerHTML = await centerSection(starlink);
    section__main_right.innerHTML = await rightSection(starlink);
    footer.innerHTML = await footerStarlink();
    main__title.innerHTML = starlink.docs[0].spaceTrack.OBJECT_NAME;
    await eventsListener()

    renderPageButtons(allStarlink);
    addNavigationButtons(allStarlink.length);
}

const renderPageButtons = (allStarlink) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allStarlink.length);
    console.log(allStarlink.length);
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
            let starlink =await getStarlink(page);
            section__main_left.innerHTML = await leftSection(starlink);
            section__main_center.innerHTML = await centerSection(starlink);
            section__main_right.innerHTML = await rightSection(starlink);
            footer.innerHTML = await footerStarlink();
            main__title.innerHTML = starlink.docs[0].spaceTrack.OBJECT_NAME;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (starlink) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allStarlink = await getAllStarlink();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allStarlink)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allStarlink = await getAllStarlink();
        if ((currentGroup + 1) * groupSize < starlink) {
            currentGroup++;
            renderPageButtons(allStarlink)
        }
    })
};