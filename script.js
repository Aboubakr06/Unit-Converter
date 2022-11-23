let inputEl = document.getElementById("input-el")
let buttonCv = document.getElementById("button-cv")
let lengthRs = document.getElementById("length-results")
let volumeRs = document.getElementById("volume-results")
let massRs = document.getElementById("mass-results")


buttonCv.addEventListener("click", function() {
    if(inputEl.value === "") {
        inputEl.value = 1
    }
    length()
    volume()
    mass()
    
})
let result1 = ""
let result2 = ""
function length() {
    result1 = (inputEl.value * 3.281).toFixed(3)
    result2 = (inputEl.value / 3.281).toFixed(3)
    lengthRs.innerHTML = `${inputEl.value} meters = ${result1} feet | ${inputEl.value} feet = ${result2} meters` 
    
}

function volume() {
    result1 = (inputEl.value * 0.264).toFixed(3)
    result2 = (inputEl.value / 0.264).toFixed(3)
    volumeRs.innerHTML = `${inputEl.value} liters = ${result1} gallons | ${inputEl.value} gallons = ${result2} liters` 
    
}

function mass() {
    result1 = (inputEl.value * 2.204).toFixed(3)
    result2 = (inputEl.value / 2.204).toFixed(3)
    massRs.innerHTML = `${inputEl.value} kilos = ${result1} pounds | ${inputEl.value} pounds = ${result2} kilos` 
    
}
