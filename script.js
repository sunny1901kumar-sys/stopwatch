let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isRunning = false;

function addZero(num){
    if(num<10){
        return '0' + num;
    }
    else{
        return num;
    }
}

function updateDisplay(){
    let timeString = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    document.getElementById("stopwatchDisplay").textContent = timeString;
}

function startTimer(){
    if(isRunning){
        return;
    }
    isRunning = true;
    timer = setInterval(function(){
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        updateDisplay();
    },1000);
}

function pauseTimer(){
    clearInterval(timer);

    isRunning = false;
}
function resetTimer(){
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("lapList").innerHTML = "";
    lapCount = 1;
}

document.getElementById("startbtn").addEventListener("click",startTimer);
document.getElementById("pausebtn").addEventListener("click",pauseTimer);
document.getElementById("resetbtn").addEventListener("click",resetTimer);

let lapCount  = 1;

function recordLap(){
    if(!isRunning) return;  // agar stopwatch chal hi nhi rha toh lap mat lo
    let timeString = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    let lapItem = document.createElement("li");
    lapItem.textContent = "Lap " + lapCount + ": " + timeString;
    document.getElementById("lapList").appendChild(lapItem);
    lapCount++;

}

document.getElementById("lapbtn").addEventListener("click", recordLap);