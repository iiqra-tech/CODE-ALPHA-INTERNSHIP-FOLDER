document.addEventListener("DOMContentLoaded", function (){
let boxes = document.querySelectorAll(".box")

function filterCategory(category){
    boxes.forEach(box => {
        if(category === "all"){
            box.style.display = "block";
        }
        else if
        (box.classList .contains(category)){
            box.style.display = "block"
        }
        else{
            box.style.display = "none"
        }
    });
}
document.getElementById("allBtn").addEventListener("click",()=>{
    filterCategory("all");
    navLinks.classList.remove("active")
    heading.innerText = "All Plants"
    
});

let heading = document.getElementById("heading");
document.getElementById("aloeBtn").addEventListener("click",()=>{
    filterCategory("aloe");
    navLinks.classList.remove("active")
    heading.innerText = "Aloe Vera Plants"
    

});
document.getElementById("moneyBtn").addEventListener("click",()=>{
    filterCategory("money");
    navLinks.classList.remove("active")
    heading.innerText = "Money Plants"
});
document.getElementById("rubberBtn").addEventListener("click",()=>{
    filterCategory("rubber");
    navLinks.classList.remove("active")
    heading.innerText = "Rubber Plants"

})

// button logics
        let menuItem = document.getElementById("menuicon");
        let navLinks = document.getElementById("nav-links");
    menuItem.addEventListener("click",()=>{
     navLinks.classList.toggle("active")
    });



})
