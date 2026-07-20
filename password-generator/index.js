let password1El = document.querySelector("#password1-el")
let password2El = document.querySelector("#password2-el")

let characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*"]



function generateRandomPassword() {
    password1El.textContent = ""
    password2El.textContent = ""
    
    for (let c = 0; c<14; c++) {
        let i =  Math.floor(Math.random() * characters.length)
        let j =  Math.floor(Math.random() * characters.length)

        password1El.textContent += characters[i]
        password2El.textContent += characters[j]
    
    }

    while(password1===password2) {
        for (let c = 0; c<14; c++) {
            let j =  Math.floor(Math.random() * characters.length)
            password2El.textContent += characters[j]
        

    }

}



}