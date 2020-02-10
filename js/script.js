document.addEventListener("DOMContentLoaded", function(){

let user = "pat.wilczynska21";
let site = "gmail.com";
let mailUpdate = `${user}@${site}`; 

let mail = document.querySelector("#message-me"); 
mail.innerText = mailUpdate; 
    
let button = document.querySelector(".btn"); 
button.onclick = function() {
    alert("Polityka antyspamowa! Tu mógłby być odsyłacz pocztowy - mailto - ale go nie ma")
}
});







