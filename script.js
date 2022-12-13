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
    result1 = (inputEl.value * 3.280839895)
    result2 = (inputEl.value / 3.280839895)
    lengthRs.innerHTML = `${inputEl.value} meters = ${result1.toFixed(3)} feet | ${inputEl.value} feet = ${result2.toFixed(3)} meters` 
    
}

function volume() {
    result1 = (inputEl.value * 0.2641720524)
    result2 = (inputEl.value / 0.2641720524)
    volumeRs.innerHTML = `${inputEl.value} liters = ${result1.toFixed(3)} gallons | ${inputEl.value} gallons = ${result2.toFixed(3)} liters` 
    
}

function mass() {
    result1 = (inputEl.value * 2.2046226218)
    result2 = (inputEl.value / 2.2046226218)
    massRs.innerHTML = `${inputEl.value} kilos = ${result1.toFixed(3)} pounds | ${inputEl.value} pounds = ${result2.toFixed(3)} kilos` 
    
}
