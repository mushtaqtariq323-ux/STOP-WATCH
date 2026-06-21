// var timer = document.getElementById("timer")
// let second = 0;
// let interval = null;
// function start() {
//     interval = setInterval(function () {
//         ++second
//         updateDisplay()

//     }, 1000)

// }

// function updateDisplay() {
//     var hours = String(Math.floor(second / 3600)).padStart(2, "0")
//     var mint = String(Math.floor((second % 3600) / 60)).padStart(2, "0")
//     var sec = String(Math.floor(second % 60)).padStart(2, "0")

//     console.log(`${hours}:${mint}:${sec}`)
//     timer.innerText = hours + ":" + mint + ":" + sec
// }




//SECOND




// var timer = document.getElementById("timer");

// let second = 0;
// let interval = null;

// function start() {
//     if (interval !== null) return;

//     interval = setInterval(function () {
//         second++;
//         updateDisplay();
//     }, 1000);
// }

// function stopfunc() {
//     clearInterval(interval);
//     interval = null;
// }

// function reset() {
//     clearInterval(interval);
//     interval = null;
//     second = 0;
//     updateDisplay();
// }

// function updateDisplay() {
//     var hours = String(Math.floor(second / 3600)).padStart(2, "0");
//     var mint = String(Math.floor((second % 3600) / 60)).padStart(2, "0");
//     var sec = String(second % 60).padStart(2, "0");

//     timer.innerText = `${hours}:${mint}:${sec}`;
// }

// // Page load hote hi 00:00:00 show karne ke liye
// updateDisplay();





//THIRD


let timer = document.getElementById("timer")
let startbtn = document.getElementById("startbtn")
let stopbtn = document.getElementById("stopbtn") 
let restbtn = document.getElementById("restbtn") 
stopbtn.style.display="none"
restbtn.style.display="none"
let second = 0;
let interval = null;


function start() {
    interval = setInterval(function () {
        ++second
        startbtn.style.display="none"
        stopbtn.style.display="inline"
        restbtn.style.display="none"

        updateDisplay()

    }, 1000)

}

function stopfunc() {
    stopbtn.style.display="none"
    clearInterval(interval);
    interval = null;
    startbtn.style.display="inline"
    restbtn.style.display="inline"

}

function reset() {
    clearInterval(interval);
    interval = null;
    second = 0;
    updateDisplay();
    startbtn.style.display="inline"
    restbtn.style.display="none"



}

function updateDisplay(){
    var hours = String(Math.floor(second/3600)).padStart(2,"0")
    var mint = String(Math.floor((second%3600)/60)).padStart(2,"0")
    var sec = String(Math.floor(second%60)).padStart(2,"0")
    console.log(`${hours}:${mint}:${sec}`);
    timer.innerText = hours + ":" + mint + ":" + sec
}





