//array of images for corousel block
(function () {
  let carouselImgURL = [
    "https://itproger.com/img/courses/1476977240.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  ];
  carouselImgURL.map((s, i) =>
    $("div .carousel_container").append(`<img src=${s}>`)
  );
})();

//jquery version
/* 
function switchCarouselDirection() {
  // console.log(this.css());
  let element = $(".carousel_container");
  let position = "60";
  if (this == $(".carousel_block img:last")[0]) {
    console.log("Право");
    element.css({
      transition: "transform 1s",
      transform: "translateX(" + position + "px)",
    });
  } else {
    console.log("Лево");
    element.css({
      transition: "transform 1s",
      transform: "translateX(-350px)",
    });
    //   }
  }
}
$(".carousel_block img:first").click(switchCarouselDirection);
$(".carousel_block img:last").click(switchCarouselDirection);
 */

//jquery version for the job interview

let counter = 0;

function changePic() {
  let elements = $(".carousel_container img");

  //hide all images
  elements.each(function (i, e) {
    $(this).hide();
  });

  //count the pic index
  if (0 > counter || counter == elements.length - 1) {
    //if we stay in the array
    counter = 0;
  } else if (this == $(".carousel_block img:last")[0]) {
    //if the right arrow
    counter++;
  } else {
    //if the left arrow
    counter--;
  }
  $(elements[counter]).show(); //show the pic
}
$(".carousel_block img:first").click(changePic); //chose the arrow
$(".carousel_block img:last").click(changePic); //chose the arrow

//autoplay
/* (function () {
  let carouselImg = document.querySelectorAll(".carousel_container > img");
  let l = 0;
  function Autoplay() {
    if (l <= carouselImg.length) {
      console.log("Autoplay");
      carouselImg[l].classList.add("testclass");
      l++;
      carouselImg[l].classList.remove("testclass");
      setInterval(Autoplay, 1000);
    }

    if (l == carouselImg.length) {
      l = 0;
    
  }
  Autoplay();
})();
 */

//direction arrows
/* let position = 0;
function switchCarouselDirection() {
  let element = document.querySelector(".carousel_container");

  //   console.log(document.querySelectorAll(".carousel_block > img")[1]);
  if (this.matches("[src$='arrow_right.png']")) {
    console.log("Это правая стрелка");
    position += 150;
    element.style = `
        transition: transform 1s;
        transform: translateX(${position}px);
      `;
  } else {
    console.log("Это левая стрелка");
    position -= 150;
    element.style = `
    transition: transform 1s;
    transform: translateX(${position}px);
  `;
    //   }
  }
}
document
  .querySelectorAll(".carousel_block > img")[0]
  .addEventListener("click", switchCarouselDirection);
document
  .querySelectorAll(".carousel_block > img")[1]
  .addEventListener("click", switchCarouselDirection);

 */

/*
document.querySelector("h1").onclick = () => {
  $("header").before("<div>Hi</div>");
   (
    <img src="./public/Star.svg"></img>
  ); 
  $("div:first").toggleClass("carousel");
  let container = document.querySelector(".carousel");
  //   console.log(elemarr);
  elemarr = [
    "./public/wapp.png",
    "./public/skype.png",
    "./public/telegram.png",
  ];
  elemarr.map((e, i) => {
    let imagec = document
      .querySelector(".carousel")
      .insertAdjacentHTML("afterbegin", `<img src =${e}>`);
  });
  $(container).addClass("animated");
  $(container).addClass("continueAnimate");
*/
/* $('h1').click(()=>{
            $('body').before('<div style="height: 240px; background-color: pink; font-size: 40px; line-height: 40px">New style<ol><li>Pink</li><li>Wild</li><li>Bright</li></ol></div>');
        }) */

/* document.querySelector("h1").onclick = () => {
  let elemarr = document.querySelectorAll("header span");
  //   console.log(elemarr);
  elemarr.forEach((e) => {
    e.classList.add("animated");
  });
 */
/* document.body.insertAdjacentHTML(
    "beforebegin",
    '<div style="height: 240px; background-color: pink; font-size: 40px; line-height: 40px">New style<ol><li>Pink</li><li>Wild</li><li>Bright</li></ol></div>'
  );
  alert("Hi"); 
};
*/

/*  console.log (document.querySelector('a').attributes)
        let mainelement = document.querySelector('div')
        let newelement = document.createElement('div');
        
        newelement.style.backgroundColor = 'pink';
        newelement.innerHTML = 'Hello, titty';
        mainelement.append(newelement); */
/*
        element = document.querySelector('img')
        element.onclick = function () {
        let start = Date.now(); // запомнить время начала

        let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;
            
            element.style.left = timePassed / 5 + 'px';

            if (timePassed >= 2000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
  }

            }, 20);
        }
*/
/* 
let translationsEn = {
  Home: "Home",
  About: "About",
  Skills: "Skills",
  Portfolio: "Portfolio",
  Contacts: "Contacts",
};

let translationsRu = {
  Home: "Главная",
  About: "Обо мне",
  Skills: "Навыки",
  Portfolio: "Портфолио",
  Contacts: "Контакты",
};
 */
//        console.log()
/*
            let ob = document.querySelectorAll('[text]')
            for (l in ob) {
                translationsEn[l]
                if (translationsEn[l]) {
                ob[l].innerHTML = translationsEn[l]
                }
                else continue
                console.log(ob[l])
            }
            //.innerHTML = 'А где бабуля?'
            //document.querySelector('.maininfo').innerHTML = 'Я за нее' 
        $("h1").dblclick(function(event){
            $("span").animate({marginLeft:"-130px"},1000);
            $("span").animate({height:"150px"},1000);
            $("span").animate({fontSize:"50px"},1000);
        }        );
        */
