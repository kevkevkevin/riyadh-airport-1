
const faq_btn = document.getElementById("faqBtn");
const element1 = document.getElementById("element_1")
const element2 = document.getElementById("element_2")

const faqToggle = function () {
    element1.classList.add("hidden");
            
    element2.classList.add("show");
    element2.classList.remove("hidden");

}

const arFormToggleClose = function () {
    arForm.classList.add("hidden");
            
    nForm.classList.remove("hidden");
}