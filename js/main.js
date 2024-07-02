import {templateRocket} from "./module/rockets.js";
import {eventsListener} from "./componetsModule/events.js";
import {getDragons, getAllShips, getAllCompany} from "./componetsModule/getData.js";

let pages = document.querySelectorAll(".page");
let main__title = document.querySelector(".main__title");
let main__imges = document.querySelector(".main__imges");
let section__main_center = document.querySelector(".section__main_center")
let section__main_left = document.querySelector(".section__main_left");
let section__main_right = document.querySelector(".section__main_right")

await templateRocket();  
await eventsListener();
let prueba = await getDragons(1)
console.log(prueba.docs[0].thrusters);