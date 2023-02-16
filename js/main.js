// main header
// search

let searchClickCount =0;

const searchEl= document.querySelector(".search");  
const searchTextField = searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
    
    searchClickCount++;
    searchTextField.focus();
    if(searchClickCount%2==0){
        searchTextField.blur();
    }
})

// searchTextField

searchTextField.addEventListener("focus", function(){
    searchTextField.setAttribute("placeholder","통합 검색");
    
})

searchTextField.addEventListener("blur", function(){
    searchTextField.setAttribute("placeholder","");
    searchClickCount = 0;
})

const searchIcon = searchEl.querySelector("span");


// swiper
// swiper notice
const swiperNotice  = new Swiper(".notice .notice-line .inner .inner__left .swiper",{
    direction :"vertical",
    loop : true,
    autoplay : true,
})

// swiper promotion

const swiperPromotion  = new Swiper(".notice .promotion .swiper",{
    direction : "horizontal", // default
    slidesPerView : 3,
    spaceBetween : 10,
    centeredSlides: true,
    loop : true,
    autoplay : {
        delay: 1000,
        disableOnInteraction : false
    },
    pagination:{
        el:".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    }
})

function controlAutoPlay(){
    if(swiperPromotion.autoplay.running===false){
        swiperPromotion.autoplay.start();
    }else{
        swiperPromotion.autoplay.stop();
    }
}


const promotionBtn = document.querySelector(".toggle-promotion");
const promotionSection = document.querySelector(".promotion");

promotionBtn.addEventListener("click", function(){
    if(promotionSection.classList.contains("hide")){
        promotionSection.classList.remove("hide");
        promotionBtn.classList.add("show");
    }else{
        promotionSection.classList.add("hide");
        promotionBtn.classList.remove("show");
    }
    
})


window.onload =()=> {
    const visualSection = document.querySelector(".visual");
    visualSection.classList.add("animate");
}


// 스크롤 파트
// 엘살바도르

window.addEventListener("scroll" ,function(){
    if(window.scrollY>490){
        const elsalvadorSection = document.querySelector(".elsalvador");
        elsalvadorSection.classList.add("animate");
    }
    if(window.scrollY>800){
        const ethiopiaSection = document.querySelector(".ethiopia");
        ethiopiaSection.classList.add("animate");
    }
    if(window.scrollY>1150){
        const favoriteSection = document.querySelector(".favorite");
        favoriteSection.classList.add("animate");
    }
    if(window.scrollY>1950){
        const magazineSection = document.querySelector(".magazine");
        magazineSection.classList.add("animate");
    }
    if(window.scrollY>2300){
        const storeSection = document.querySelector(".store");
        storeSection.classList.add("animate");
    }  
})