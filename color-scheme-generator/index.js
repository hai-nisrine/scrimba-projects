
const getSchemeBtn = document.getElementById("get-scheme-btn")
let colorRow = document.getElementById("color-row")
let hexRow = document.getElementById("hex-row")


let colorArr = []

function renderColors(arr) {
    
    for (let el of arr) {
        colorRow.innerHTML += `
        <div class="color-swatch" 
        style="background-color: ${el}">
        </div> 
        `
        hexRow.innerHTML += `
        <div class="hex-code">
        <span>${el}</span>
        </div>
        `
    }




}

getSchemeBtn.addEventListener("click", () => {
    const colorPick = document.getElementById("color-picker").value.slice(1)
    const modePick = document.getElementById("mode-picker").value

        fetch(`https://www.thecolorapi.com/scheme?hex=${colorPick}&mode=${modePick}`, {
    method: 'GET'
        })
    .then(res => res.json())
    .then(data => {
        for (let color of data.colors) {
            colorArr.push(color.hex.value)
        }
    })

    }
)
