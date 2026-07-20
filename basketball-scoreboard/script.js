
let homeScoreEl= document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;


function addHomeScoreBy1() {
    homeScore +=1;
    homeScoreEl.textContent = homeScore;
}

function addHomeScoreBy2() {
    homeScore +=2;
    homeScoreEl.textContent = homeScore;
}

function addHomeScoreBy3() {
    homeScore +=3;
    homeScoreEl.textContent = homeScore;
}

function addGuestScoreBy1() {
    guestScore +=1;
    guestScoreEl.textContent = guestScore;
}

function addGuestScoreBy2() {
    guestScore +=2;
    guestScoreEl.textContent = guestScore;
}

function addGuestScoreBy3() {
    guestScore +=3;
    guestScoreEl.textContent = guestScore;
}