import {getNameRocket, getAllRockets} from "../componetsModule/getData.js";
import {footerRocket} from "../componetsModule/footers.js";
import {eventsListener} from "../componetsModule/events.js";

export const leftSection = async (nameRocket) => {
    let plantilla = "";
        plantilla = /*html*/`
        <article class="article__section_left">
            <div class="text__section_left">
                <h3 class="title__descrip" >Description</h3>
                <p>${nameRocket.docs[0].description}</p> 
            </div>
        </article>

        <article class="article__section_left">
            <img src="storage/coin.svg" alt="">
            <div class="text__section_left">
                <strong>Cost per launch</strong>
                <p>${nameRocket.docs[0].cost_per_launch}</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/flag.svg" alt="">
            <div class="text__section_left">
                <strong>Country</strong>
                <p>${nameRocket.docs[0].country}</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/Check Icon.svg" alt="">
            <div class="text__section_left">
                <strong>Succes rate</strong>
                <p>${nameRocket.docs[0].success_rate_pct}%</p> 
            </div>
        </article>

        <article class="article__section_left">
        <img src="storage/launcer.svg" alt="">
            <div class="text__section_left">
                <strong>First flight</strong>
                <p>${nameRocket.docs[0].first_flight}</p> 
            </div>
        </article>
        `
    return plantilla
}

export const centerSection = async (nameRocket) => {
    console.log(nameRocket)
    let plantilla = "";

    plantilla += /*html*/`

        <div class="progress-bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, rgb(118, 189, 255) ${nameRocket.docs[0].engines.thrust_vacuum.kN * 100 / 1960}%, rgba(255, 192, 203, 0) 0);  ">
        <div>
            <strong>Speed in space</strong>
            <p>${(nameRocket.docs[0].engines.thrust_vacuum.kN * 100 / 1960).toFixed(2)} % </p>
            <p>${nameRocket.docs[0].engines.thrust_vacuum.kN} kN</p>
            <p>${nameRocket.docs[0].engines.thrust_vacuum.lbf} Lbf</p>
        </div>
    </div>

    <img src="../storage/rocketCenter.png" width="320px" height='200px'>

    <div class="progress-bar" style="background: 
        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
        conic-gradient(from 180deg, rgb(118, 189, 255) ${nameRocket.docs[0].engines.thrust_sea_level.kN * 100 / 1780}%, rgba(255, 192, 203, 0) 0);  ">
        <div>
            <strong>Atmospheric acceleration</strong>
            <p>${(nameRocket.docs[0].engines.thrust_sea_level.kN * 100 / 1780).toFixed(2)} % </p>
            <p>${nameRocket.docs[0].engines.thrust_sea_level.kN} kN</p>
            <p>${nameRocket.docs[0].engines.thrust_sea_level.lbf} Lbf</p>
        </div>
    </div>
    
    <article class="article__section_center">
        <strong class="title__table">Stage 1</strong>
        <hr>
        <span>Reusable</span><strong>${nameRocket.docs[0].first_stage.reusable}</strong>
        <span>Engines</span><strong>${nameRocket.docs[0].first_stage.engines}</strong>
        <span>Fuel amount</span><strong>${nameRocket.docs[0].first_stage.fuel_amount_tons}</strong>
        <span>Burn time</span><strong>${nameRocket.docs[0].first_stage.burn_time_sec}</strong>
    </article>
    <div class="main__imges" >
    `;

    let rocket = nameRocket.docs[0].flickr_images
    rocket.forEach(async images => {
        plantilla += /*html*/`
            <img class="images__rockets" src="${images}" referrerpolicy="no-referrer">
            `
    })

    plantilla += /*html*/`
    </div>
    <article class="article__section_center">
                <strong class="title__table">Stage 2</strong>
                <hr>
                <span>Reusable</span><strong>${nameRocket.docs[0].first_stage.reusable}</strong>
                <span>Engines</span><strong>${nameRocket.docs[0].first_stage.engines}</strong>
                <span>Fuel amount</span><strong>${nameRocket.docs[0].first_stage.fuel_amount_tons}</strong>
                <span>Burn time</span><strong>${nameRocket.docs[0].first_stage.burn_time_sec}</strong>
            </article>

            <article class="article__section_center">
                <strong class="title__table">INFORMATION ROCKET</strong>
                <hr>
                <span>Type</span><strong>${nameRocket.docs[0].type}</strong>
                <span>Rocket service</span><strong>${nameRocket.docs[0].active == true ? nameRocket.docs[0].active : "No service"}</strong>
                <span>Number of stages</span><strong>${nameRocket.docs[0].stages}</strong>
                <span>Boosters</span><strong>${nameRocket.docs[0].boosters}</strong>
            </article>

            <article class="article__section_center">
                <strong class="title__table">ENGINE INFORMATION</strong>
                <hr>
                <span>Type</span><strong>${nameRocket.docs[0].engines.type}</strong>
                <span>Maximum power loss</span><strong>${nameRocket.docs[0].engines.engine_loss_max}</strong>
                <span>Engine availability</span><strong>${nameRocket.docs[0].engines.layout}</strong>
                <span>Number of engines</span><strong>${nameRocket.docs[0].engines.number}</strong>
            </article>
    `;

    return plantilla
}

export const rightSection = async (nameRocket) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>Rocket weight</span>
        <div class="text__bar_right">
            <progress value="${nameRocket.docs[0].mass.kg}" max="${nameRocket.docs[0].mass.kg + nameRocket.docs[0].mass.lb}"></progress>
            <strong>${nameRocket.docs[0].mass.kg}kg</strong>
        </div>
    </article>

    <article class="article__section_right">
    <span>Rocket Height</span>
    <div class="text__bar_right">
        <progress value="${nameRocket.docs[0].height.meters}" max="${nameRocket.docs[0].height.meters + nameRocket.docs[0].height.feet}"></progress>
        <strong>${nameRocket.docs[0].height.meters}m</strong>
    </div>
    </article>

    <article class="article__section_right">
        <span>${nameRocket.docs[0].payload_weights[0].name}</span>
        <div class="text__bar_right">
            <progress value="${nameRocket.docs[0].payload_weights[0].kg}" max="${nameRocket.docs[0].payload_weights[0].kg}"  ></progress>
            <strong>${nameRocket.docs[0].payload_weights[0].kg}kg</strong>
        </div>
    </article>

    <article class="article__section_right">
        <span>Rocket diameter</span>
        <div class="text__bar_right">
            <progress value="${nameRocket.docs[0].diameter.meters}" max="${nameRocket.docs[0].diameter.feet}" ></progress>
            <strong>${nameRocket.docs[0].diameter.meters}m</strong>
        </div>
    </article>

    <article class="article__section_right">
    <span>Height rocket shield</span>
        <div class="text__bar_right">
            <progress value="${nameRocket.docs[0].second_stage.payloads.composite_fairing.height.feet}"  max="${nameRocket.docs[0].second_stage.payloads.composite_fairing.height.meters + nameRocket.docs[0].second_stage.payloads.composite_fairing.height.feet}"></progress>
            <strong>${nameRocket.docs[0].second_stage.payloads.composite_fairing.height.meters}m</strong>
        </div>
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

export const templateRocket = async() => {
    document.querySelector(".prev_page").remove();
    document.querySelector(".next_page").remove();
    currentGroup = 0;
    let page;
    pages.innerHTML = "";
    let allRockets = await getAllRockets();
    let nameRocket =await getNameRocket(1);
    section__main_left.innerHTML = await leftSection(nameRocket);
    section__main_center.innerHTML = await centerSection(nameRocket);
    section__main_right.innerHTML = await rightSection(nameRocket);
    footer.innerHTML = await footerRocket();
    main__title.innerHTML = nameRocket.docs[0].name;
    await eventsListener()

    renderPageButtons(allRockets);
    addNavigationButtons(allRockets.length);
}

const renderPageButtons = (allRockets) => {
    currentGroup = 0;
    pages.innerHTML = "";
    let starPage = currentGroup * groupSize;
    let endPage = Math.min(starPage + groupSize ,allRockets.length);

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
            let nameRocket =await getNameRocket(page);
            section__main_left.innerHTML = await leftSection(nameRocket);
            section__main_center.innerHTML = await centerSection(nameRocket);
            section__main_right.innerHTML = await rightSection(nameRocket);
            footer.innerHTML = await footerRocket();
            main__title.innerHTML = nameRocket.docs[0].name;
            await eventsListener()
        })
    })
};

const addNavigationButtons = (totalRockets) => {
    let prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.classList.add('prev_page');
    document.querySelector(".containerPrev_page").appendChild(prevButton);
    let selectPrevButton = document.querySelector(".prev_page")
    selectPrevButton.addEventListener("click", async() => {
        let allRockets = await getAllRockets();
        if (currentGroup > 0) {
            currentGroup--;
            renderPageButtons(allRockets)
        }
    })
    let nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.classList.add('next_page');
    document.querySelector(".containerNext_page").appendChild(nextButton);
    let selectNextButton = document.querySelector(".next_page")
    selectNextButton.addEventListener("click", async() => {
        let allRockets = await getAllRockets();
        if ((currentGroup + 1) * groupSize < totalRockets) {
            currentGroup++;
            renderPageButtons(allRockets)
        }
    })
};