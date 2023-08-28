const goal = 25;
let entries = [];
const entriesWrap = document.querySelector("#entries") 
document.querySelector("#target").innerText = goal;

function addNewEntry(newEntry) {
    entriesWrap.removeChild(entriesWrap.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue);

    entriesWrap.appendChild(listItem);
}

function reduce(total, CurrentValue) {
    return total + CurrentValue;
}
function calcTotal(entries){
    const totalValue = entries.reduce(reduce).toFixed(1);
    document.getElementById("total").innerText = totalValue;
    document.getElementById("prog").innerText = totalValue;
}
function calcAverage() {
    const average = (entries.reduce(reduce) / entries.length).toFixed(1);
    document.getElementById("average").innerText = average;
}
function weekHigh() {
    const high = Math.max(...entries)
    document.getElementById("high").innerText = high;
}
function calcGoal() {
    const totalValue = entries.reduce(reduce).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progresscircle = document.querySelector('#progresscircle');
    if(completedPercent > 100) completedPercent === 100;
    progresscircle.style.background = `conic-gradient(hwb(120 1% 57%) ${completedPercent}%, rgb(43, 39, 39) ${completedPercent}% 100%)`;
    
}
function handleSubmit(event) {
    event.preventDefault()

const entry = Number(document.querySelector("#entry").value);
if (!entry) return;
document.querySelector("form").reset();
entries.push(entry);
addNewEntry(entry);
calcTotal(entries);
calcAverage();
weekHigh();
calcGoal();
}

const form = document.querySelector("form").addEventListener("submit", handleSubmit);