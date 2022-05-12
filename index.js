let count = 0;
let countEl = document.getElementById("count-el"); //to pas in arguments
let saveEl = document.getElementById("save-el");

function increment(){
    count++;
    countEl.textContent = count;
}

function save() {
    let save = count + " - ";
    saveEl.textContent += save;
    countEl.textContent = 0;
    count = 0;
}

