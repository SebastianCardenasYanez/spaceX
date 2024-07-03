import {getDragons, getAllDragons} from "../componetsModule/getData.js";
import {footerDragons} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";


export const leftSection = async (dragon) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Description</h3>
                <p>${dragon.docs[0].description}</p> 
            </div>
        </article>

    <article class="article__section_left">
        <div class="text__section_left">
            <strong>first flight</strong>
            <p>${dragon.docs[0].first_flight}</p> 
        </div>
    </article>

    <article class="article__section_left">
        <div class="text__section_left">
            <strong>type</strong>
            <p>${dragon.docs[0].type}</p> 
        </div>
    </article>

    <article class="article__section_left">
        <div class="text__section_left">
            <strong>active</strong>
            <p>${dragon.docs[0].active}</p> 
        </div>
    </article>
        `
        return plantilla
    }

export const centerSection = async (dragon) => {
    let plantilla = "";

    plantilla += /*html*/`

    <div></div>

    <img src="storage/rocketCenter.png" width="250px" height="160px" referrerpolicy="no-referrer" >

    <div></div>
    
    <article class="article__section_center">
        <strong class="title__table">Launch payloads</strong>
        <hr>
        <span>Mass kg</span><strong>${dragon.docs[0].launch_payload_mass.kg}</strong>
        <span>Mass lb</span><strong>${dragon.docs[0].launch_payload_mass.lb}</strong>
        <span>Cubic meters</span><strong>${dragon.docs[0].launch_payload_vol.cubic_meters}</strong>
        <span>Cubic feet</span><strong>${dragon.docs[0].launch_payload_vol.cubic_feet}</strong>
    </article>
    <div class="main__imges" >
    `;

    let drag = dragon.docs[0].flickr_images
    drag.forEach(async images => {
        plantilla += /*html*/`
            <img class="images__rockets" src="${images}" referrerpolicy="no-referrer">
            `;
    })
    
    plantilla += /*html*/`
    </div>
    <article class="article__section_center">
        <strong class="title__table">Return payloads</strong>
        <hr>
        <span>Mass kg</span><strong>${dragon.docs[0].return_payload_mass.kg}</strong>
        <span>Mass lb</span><strong>${dragon.docs[0].return_payload_mass.lb}</strong>
        <span>Reusable</span><strong>${dragon.docs[0].return_payload_vol.cubic_meters}</strong>
        <span>Engines</span><strong>${dragon.docs[0].return_payload_vol.cubic_feet}</strong>
    </article>

    <article class="article__section_center">
        <strong class="title__table">heat shield</strong>
        <hr>
        <span>Material</span><strong>${dragon.docs[0].heat_shield.material}</strong>
        <span>Size meters</span><strong>${dragon.docs[0].heat_shield.size_meters}</strong>
        <span>Temp degrees</span><strong>${dragon.docs[0].heat_shield.temp_degrees}</strong>
        <span>Dev partner</span><strong>${dragon.docs[0].heat_shield.dev_partner}</strong>
    </article>

    <article class="article__section_center">
        <strong class="title__table">info</strong>
        <hr>
        <span>Crew capacity</span><strong>${dragon.docs[0].crew_capacity}</strong>
        <span>Sidewall angle deg</span><strong>${dragon.docs[0].sidewall_angle_deg}</strong>
        <span>Orbit duration</span><strong>${dragon.docs[0].orbit_duration_yr}yr</strong>
        <span>dry mass</span><strong>${dragon.docs[0].dry_mass_kg}kg</strong>
    </article>  
    `;
    return plantilla
}




export const rightSection = async (dragon) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <h2 class="title_right_section">Thrusters</h2>
        <span>type</span>
        <strong>${dragon.docs[0].thrusters[0].type}</strong>
    </article>

    <article class="article__section_right">
        <span>amount</span>
        <strong>${dragon.docs[0].thrusters[0].amount}</strong>
    </article>

    <article class="article__section_right">
        <span>pods</span>
        <strong>${dragon.docs[0].thrusters[0].pods}</strong>
    </article>

    <article class="article__section_right">
    <div class="text__bar_right">
        <span>fuels</span>
        <strong>${dragon.docs[0].thrusters[0].fuel_1}</strong>
        <strong>${dragon.docs[0].thrusters[0].fuel_2}</strong>
    </div>
    </article>

    <article class="article__section_right">
        <span>isp</span>
        <strong>${dragon.docs[0].thrusters[0].isp}</strong>
    </article>

    <article class="article__section_right">
    <div class="text__bar_right">
        <span>thrust</span>
        <strong>${dragon.docs[0].thrusters[0].thrust.kN}kN</strong>
        <strong>${dragon.docs[0].thrusters[0].thrust.lbf}lbf</strong>
    </div>
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

export const templateDragon = async() => {
    console.log(document.querySelector(".prev_page"))
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allDragons = await getAllDragons();
    let dragon =await getDragons(1);
    main__title.innerHTML = dragon.docs[0].name;
    section__main_left.innerHTML = await leftSection(dragon);
    section__main_center.innerHTML = await centerSection(dragon);
    section__main_right.innerHTML = await rightSection(dragon);
    footer.innerHTML = await footerDragons();
    await eventsListener()

    renderPageButtons(allDragons);
    addNavigationButtons(allDragons.length);
}

const renderPageButtons = (allDragons) => {
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allDragons.length);
    console.log(allDragons.length);
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
            let dragon =await getDragons(page);
            main__title.innerHTML = dragon.docs[0].name;
            section__main_left.innerHTML = await leftSection(dragon);
            section__main_center.innerHTML = await centerSection(dragon);
            section__main_right.innerHTML = await rightSection(dragon);
            footer.innerHTML = await footerDragons();
            await eventsListener()
        })
    })
};

const addNavigationButtons = (dragon) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allDragons = await getAllDragons();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allDragons)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allDragons = await getAllDragons();
        if ((currentGroup + 1) * groupSize < dragon) {
            currentGroup++;
            renderPageButtons(allDragons)
        }
    })
};