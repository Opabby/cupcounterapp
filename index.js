let count = 0;
let countEl = document.getElementById("count-el");

function increment(){
    count++;
    countEl.innertext = count;
    console.log(count);
}

