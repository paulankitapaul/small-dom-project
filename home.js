document.getElementById("home").addEventListener("click",function(){
    const newSection = document.getElementById("new-section");
    newSection.classList.remove("hidden")
    const cardsSection = document.getElementById("cards-section");
    cardsSection.classList.add("hidden");

})