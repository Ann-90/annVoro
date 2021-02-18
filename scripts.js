//translations
let testtranslatearrRU = {
  Home: "Главная",
  About: "О себе",
  Skills: "Навыки",
  Portfolio: "Портфолио",
  Contacts: "Контакты",
  my_name: "Анна <br/> Воробьева",
  post: "JUNIOR ФРОНТЕНД РАЗРАБОТЧИК<br />Москва",
  about_1:
    "Здравствуйте. Меня зовут Анна. Я - начинающий веб-разработчик. Веб-технологии изучаю самостоятельно.",
  about_2:
    "С сентября 2020 года я работала помощником веб-разработчика, занимаясь отрисовкой интерфейсов по готовым шаблонам Figma. Интерактивные элементы реализовывались при помощи Next.js (React фреймворка). Я привыкла работать с фреймворками, которые делают разработку быстрее, удобнее и качественнее.",
  about_3:
    "Я - специалист с нестандартным бэкграундом. До недавнего времени работала в глубоко гуманитарной сфере. Так как учусь самостоятельно, не боюсь разбинаться с темами, с котрыми не работала. По этой же причине я очень люблю тестовые задания: они помогают проверять свои знания, тренировать навык выполнять работу оперативно и расширять кругозор, если задание пока не по силам.",
  about_4:
    "Хочу двигаться вперед и вглубь, погружаясь в тонкости разработки и выполнять полезную работу в интересной команде.",
  Skills: "Что я умею",
  skills_title: "Я работаю с такими технологиями:",
  Portfolio: "Портфолио",
  Contacts: "Контакты",
  contact_text: "Хотите уточнить информацию? <br/> Напишите мне",
  send_btn: "Отправить сообщение",
  send_text: "Свяжитесь со мной через <br /> Telegram / WhatsApp / Skype",
};

let testtranslatearrEN = {
  Home: "Home",
  About: "About",
  Skills: "Skills",
  Portfolio: "Portfolio",
  Contacts: "Contacts",
  my_name: "Ann <br/> Vorobyeva",
  post: "JUNIOR FRONT-END DEVELOPER<br />Moscow",
  about_1: "Hello! My name is Ann. I am a junior frontend-developer.",
  about_2:
    " Currently I am working in a company rendering web-pages with Figma templates as examples. I am making interactive elements with Next.js (React framework). So I got used to working using frameforks which make development faster and more convinient.",
  about_3:
    "If you are interested in people with unconventional experience I submit my candidacy. Until recently I have been working in a humanitarian field. I study computer science on my own. I deal with new information well.",
  about_4: "I want to move forward doing useful job in a good team",
  Skills: "Skills",
  skills_title: "I work in such programms as:",
  Portfolio: "Portfolio",
  Contacts: "Contacts",
  contact_text: "Want to know more or just chat? <br />You are welcome!",
  send_btn: "Send message",
  send_text: "Contact me on <br /> Telegram / WhatsApp / Skype",
};

function translate() {
  allkeys.forEach((e, i) => {
    let keyvalue = e.getAttribute("key");
    this.matches("span[class*=ru")
      ? (e.innerHTML = testtranslatearrRU[keyvalue])
      : (e.innerHTML = testtranslatearrEN[keyvalue]);
  });
}
let allkeys = document.querySelectorAll("[key]"); //get all keys

let langbtnEN = document.querySelector(".lang_btn_main .lang_eng"); //translate buttons
let langbtnRU = document.querySelector(".lang_btn_main .lang_ru");
let langbtnMobileEN = document.querySelector(".lang_btn_header .lang_eng");
let langbtnMobileRU = document.querySelector(".lang_btn_header .lang_ru");

langbtnEN.addEventListener("click", translate);
langbtnRU.addEventListener("click", translate);
langbtnMobileEN.addEventListener("click", translate);
langbtnMobileRU.addEventListener("click", translate);

//header
let headerel = document.querySelector("header");
console.log(headerel);
headerel.classList.add("hideheader");

function toggleHideHeader() {
  headerel.classList.toggle("hideheader");
}
let showHeader = document.querySelector(".dropImg");
let closeHeader = document.querySelector(".cross");

showHeader.addEventListener("click", toggleHideHeader);
closeHeader.addEventListener("click", toggleHideHeader);

//form
let formcard = document.querySelector(".formcard");
formcard.classList.add("hideform");

function toggleHideClass() {
  formcard.classList.toggle("hideform");
}

let sendbtn = document.querySelector("[key=send_btn]");
let closebtn = document.querySelector(".closeform");

sendbtn.addEventListener("click", toggleHideClass);
closebtn.addEventListener("click", toggleHideClass);
