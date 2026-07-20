import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")

const refInDB = ref(database, "leads")

onValue(refInDB, function(snapshot) {
    if (snapshot.exists()) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
   
})


inputBtn.addEventListener("click", function() {
    push(refInDB, inputEl.value)
    inputEl.value = ""
    
})

deleteBtn.addEventListener("dblclick", function () {
    remove(refInDB)
    ulEl.innerHTML = ""
   
})



function render(leads) {
    let listItems = ""

    for (let i =0; i<leads.length; i++) {
        listItems += `<li>
                            <a target='_blank' href='${leads[i]}'> 
                                ${leads[i]}
                            </a>
                      </li>`
    }
    ulEl.innerHTML = listItems 
}