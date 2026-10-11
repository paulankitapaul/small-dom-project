document.getElementById("home").addEventListener("click",function(){
    const newSection = document.getElementById("new-section")
    newSection.classList.add("hidden")
    const cardsSection = document.getElementById("cards-section");
    cardsSection.classList.remove("hidden")

})