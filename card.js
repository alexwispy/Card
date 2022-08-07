let images = {
    "Sberbank": "images/sberbank.svg",
    "VTB": "images/vtb.svg",
    "Tinkoff": "images/tinkoff.svg",
    "MIR": "images/mir.svg",
    "Visa": "images/visa.svg",
    "Mastercard": "images/mastercard.svg",
}

let inpB = form.elements.b;
let inpS = form.elements.s;
let inpU = form.elements.u;
let inpN = form.elements.n
let inpE = form.elements.e
let elB = document.querySelector(".logo");
let elS = document.querySelector(".system img");
let elU = document.querySelector(".user");
let elN = document.querySelector(".number");
let elE = document.querySelector(".exp");

inpB.addEventListener("change", function (e) {
    elB.style.backgroundImage = `url(${images[this.value]}`;
});

inpS.addEventListener("change", function () {
    elS.src = images[this.value];
});

inpU.addEventListener("input", function() {
    elU.innerText = this.value;
});

inpN.addEventListener("input", function(){
    elN.innerHTML = setNumber(this.value, "", "</span>", "<span>");
});

inpE.addEventListener("change", function(){
    let date = new Date(this.value);
    console.log(date);
    let month = date.getMonth() + 1 + "";
    if (month.length < 2){
        month = "0" + month;
    }
    let year = date.getFullYear()+"";
    year = year.slice(-2);
    elE.innerText = month + "/" + year;
})