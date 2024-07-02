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
    plantilla = /*html*/`

    <div></div>
    
    <img src="${launchpad.docs[0].images.large}" referrerpolicy="no-referrer" >


    <div></div>

    <div></div>

    <div></div>`

    if (launchpad.docs[0].rockets[0] !== undefined) {
        plantilla += /*html*/`
        <article class="article__section_center">
        <strong class="title__table">Rockets</strong>
        <hr>
        <span>imo</span><strong>${launchpad.docs[0].imo}</strong>
        <span>mmsi</span><strong>${launchpad.docs[0].mmsi}</strong>
        <span>abs</span><strong>${launchpad.docs[0].abs}</strong>
        <span>speed kn</span><strong>${launchpad.docs[0].speed_kn}</strong>
    
        <div></div>
        </article>
        `
    }

    ;
    return plantilla
};

export const rightSection = async (launchpad) => {
    let plantilla = "";
    plantilla += /*html*/`
    <article class="article__section_right">
        <span>More information</span>
            <a src="${launchpad.docs[0].link}">
            <img src="../storage/icon_marineTraffic.png" width="100px" >
            </a>
    </article>
    `
    return plantilla
}