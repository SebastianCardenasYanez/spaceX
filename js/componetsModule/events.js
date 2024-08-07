import {templateRocket} from "../module/rockets.js";
import {templateCapsule} from "../module/capsules.js";
import {templateCrew} from "../module/crew.js";
import {templateLaunch} from "../module/launches.js";
import {templateCores} from "../module/cores.js";
import {templateLandpad} from "../module/landPads.js";
import {templateShips} from "../module/ships.js";
import {templateCompany} from "../module/company.js";
import {templateDragon} from "../module/dragons.js";
import {templateHistory} from "../module/history.js"
import {templateLaunchpad} from "../module/launchpads.js";
import {templatePayloads} from "../module/payloads.js";
import {templateRoadster} from "../module/roadster.js";
import {templateStarlink} from "../module/starlink.js";


let section__main_center = document.querySelector(".section__main_center")
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")

export const eventsListener = async () => {
let rockets__footer = document.querySelector("#rockets__footer");
let capsules__footer = document.querySelector("#capsules__footer");
let crew__footer = document.querySelector("#crew__footer");
let launches__footer = document.querySelector("#launches__footer");
let cores__footer = document.querySelector("#cores__footer");
let landspads__footer = document.querySelector("#landspads__footer");
let ships__footer = document.querySelector("#ships__footer");
let company__footer = document.querySelector("#company__footer");
let dregons__footer = document.querySelector("#dregons__footer");
let history__footer = document.querySelector("#history__footer");
let launchpads__footer = document.querySelector("#launchpads__footer");
let payloads__footer = document.querySelector("#payloads__footer");
let roadster__footer = document.querySelector("#roadster__footer");
let starlink__footer = document.querySelector("#starlink__footer");


rockets__footer?.addEventListener('click', async() => {
    console.log('Rockets footer clicked');
    section__main_left.innerHTML = ''
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = ''
    await templateRocket()
  });
  
  capsules__footer?.addEventListener('click', async() => {
    console.log('Capsules footer clicked');
    section__main_left.innerHTML = ''
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = ''
    await templateCapsule()
  });
  
  crew__footer?.addEventListener('click', async() => {
    console.log('Crew footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateCrew()
  });
  
  launches__footer?.addEventListener('click', async() => {
    console.log('Launches footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateLaunch()
  });
  
  cores__footer?.addEventListener('click', async() => {
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    console.log('Cores footer clicked');
    await templateCores()
  });
  
  landspads__footer?.addEventListener('click', async() => {
    console.log('Landspads footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateLandpad()
  });
  
  ships__footer?.addEventListener('click', async() => {
    console.log('Ships footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateShips()
  });
  
  company__footer?.addEventListener('click', async() => {
    console.log('Company footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateCompany()
  });
  
  dregons__footer?.addEventListener('click', async() => {
    console.log('Dregons footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateDragon()
  });
  
  history__footer?.addEventListener('click', async() => {
    console.log('History footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateHistory()
  });
  
  launchpads__footer?.addEventListener('click', async() => {
    console.log('Launchpads footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateLaunchpad();
  });
  
  payloads__footer?.addEventListener('click', async() => {
    console.log('Payloads footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templatePayloads()
  });
  
  roadster__footer?.addEventListener('click', async() => {
    console.log('Roadster footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateRoadster();
  });
  
  starlink__footer?.addEventListener('click', async() => {
    console.log('Starlink footer clicked');
    section__main_left.innerHTML = '';
    section__main_center.innerHTML = '';
    section__main_right.innerHTML = '';
    await templateStarlink();
  });
}