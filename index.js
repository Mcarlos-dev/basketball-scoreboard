let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let guestTittleEl = document.getElementById("guest-tittle")
let homeTittleEl = document.getElementById("home-tittle")
number=0
quantity=0

function checkWinner() {
    if (number > quantity) {
    homeTittleEl.style.color = "#F94F6D"
    guestTittleEl.style.color = "#FFFFFF"
    }
    else if (quantity > number){
        guestTittleEl.style.color = "#F94F6D"
        homeTittleEl.style.color = "#FFFFFF"
    }
    else {
        homeTittleEl.style.color = "#FFFFFF"
        guestTittleEl.style.color = "#FFFFFF"
    }
}
    function plusOne(){
    number+= 1 
    homeEl.textContent = number
    checkWinner()
}
function plusTwo(){
    number+= 2 
    homeEl.textContent = number
    checkWinner()
}
function plusThree(){
    number+= 3
    homeEl.textContent = number
    checkWinner()

}
function addOne(){
    quantity+= 1 
    guestEl.textContent = quantity
    checkWinner()
}
function addTwo(){
    quantity+= 2 
    guestEl.textContent = quantity
    checkWinner()
}
function addThree(){
    quantity+= 3
    guestEl.textContent = quantity
    checkWinner()
}
function restart(){
    number = number - number
    homeEl.textContent = number
    quantity = quantity - quantity
    guestEl.textContent = quantity
    checkWinner()
}
