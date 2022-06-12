const menuDropdown = document.getElementById('menuDropdown');
const hasClass = menuDropdown.classList;
const heart = document.getElementsByClassName('heart');
const total = document.getElementById('total');
const buyBtn = document.getElementsByClassName('buyBtn');

// para que ande el menu dropdown
const dropdown = () => {
    if (hasClass.contains("hide")) {
        hasClass.remove("hide");
    } else {
        hasClass.add("hide");
    }
};

// para marcar el corazoncito
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function () {
        heart[i].classList.toggle("clicked");
    })
}

// cart
(function(){
    total.innerHTML = 0;
    let acumulador = +total.innerHTML;
    for(let j = 0; j < buyBtn.length; j++){
        buyBtn[j].addEventListener("click", function(){
            let newProd = +buyBtn[j].innerHTML;
            acumulador = acumulador + newProd;
            total.innerHTML = acumulador;
        })
    }
})();

