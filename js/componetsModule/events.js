import {templateRocket} from "../module/rockets.js";
import {templateCapsule} from "../module/capsules.js";


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
    // Acción específica para crew__footer
  });
  
  launches__footer?.addEventListener('click', async() => {
    console.log('Launches footer clicked');
    // Acción específica para launches__footer
  });
  
  cores__footer?.addEventListener('click', async() => {
    console.log('Cores footer clicked');
    // Acción específica para cores__footer
  });
  
  landspads__footer?.addEventListener('click', async() => {
    console.log('Landspads footer clicked');
    // Acción específica para landspads__footer
  });
  
  ships__footer?.addEventListener('click', async() => {
    console.log('Ships footer clicked');
    // Acción específica para ships__footer
  });
  
  company__footer?.addEventListener('click', async() => {
    console.log('Company footer clicked');
    // Acción específica para company__footer
  });
  
  dregons__footer?.addEventListener('click', async() => {
    console.log('Dregons footer clicked');
    // Acción específica para dregons__footer
  });
  
  history__footer?.addEventListener('click', async() => {
    console.log('History footer clicked');
    // Acción específica para history__footer
  });
  
  launchpads__footer?.addEventListener('click', async() => {
    console.log('Launchpads footer clicked');
    // Acción específica para launchpads__footer
  });
  
  payloads__footer?.addEventListener('click', async() => {
    console.log('Payloads footer clicked');
    // Acción específica para payloads__footer
  });
  
  roadster__footer?.addEventListener('click', async() => {
    console.log('Roadster footer clicked');
    // Acción específica para roadster__footer
  });
  
  starlink__footer?.addEventListener('click', async() => {
    console.log('Starlink footer clicked');
    // Acción específica para starlink__footer
  });
}