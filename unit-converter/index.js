

let inputEl = document.querySelector("#input-el")
let feetResult = document.querySelector("#feet-results")
let metersResult = document.querySelector("#meters-results")
let gallonsResult = document.querySelector("#gallons-results")
let litersResult = document.querySelector("#liters-results")
let poundsResult = document.querySelector("#pounds-results")
let kilosResult = document.querySelector("#kilos-results")


inputEl.addEventListener("input", function() {
    let inputNumber = Number(inputEl.value)

    feetResult.innerHTML = `<p>
        ${meterToFeet(inputNumber).toFixed(3)}
    </p>`

    metersResult.innerHTML = `<p>
    ${feetToMeter(inputNumber).toFixed(3)}
    </p>`

    gallonsResult.innerHTML = `<p>
    ${litersToGallons(inputNumber).toFixed(3)}
    </p>`

    litersResult.innerHTML = `<p>
    ${gallonsToLiters(inputNumber).toFixed(3)}
    </p>`

    poundsResult.innerHTML = `<p>
    ${kilosToPounds(inputNumber).toFixed(3)}
    </p>`

    kilosResult.innerHTML = `<p>
    ${poundsToKilos(inputNumber).toFixed(3)}
    </p>`
})


function meterToFeet(num) {
    return num * 3.28084
}

function feetToMeter(num) {
    return num * 0.3048
}

function litersToGallons(num) {
    return num * 0.264172
}

function gallonsToLiters(num) {
    return num * 3.785412
}


function kilosToPounds(num) {
    return num * 2.20462
}


function poundsToKilos(num) {
    return num * 0.453592
}