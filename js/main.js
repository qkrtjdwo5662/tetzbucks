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