var hours = prompt("Enter Hours = ");
var minutes = prompt("Enter Minutes = ");
var seconds = prompt("Enter Seconds = ");
var t;

function add() {
seconds--;
if (seconds === 0) {
    seconds = 60;
    minutes--;
    if (minutes === 0) {
        minutes = 60;
        hours--;
        if (hours === 0 && minutes === 0 && seconds === 0) {
            seconds = 0; minutes = 0; hours = 0;
            document.getElementById("demo").innerHTML = hours + " : " + minutes + " : " + seconds;
        }
        
    }
}

document.getElementById("demo").innerHTML = hours + " : " + minutes + " : " + seconds;

timer();

}
function timer() {
t = setTimeout(add, 1000);
}   

    var start = document.getElementById('start')
    var stop = document.getElementById('stop')   
    var clear = document.getElementById('clear')

start.onclick = timer;

stop.onclick = function() {
    clearTimeout(t);
}

clear.onclick = function() {
    clearTimeout(t);
    seconds = 0; minutes = 0; hours = 0;
    document.getElementById("demo").innerHTML = hours + " : " + minutes + " : " + seconds;
    
}