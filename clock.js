function the_clock(){
    var date = new Date();
    var hr = date.getHours();
    var min =date.getMinutes();
    var sec =date.getSeconds()
    console.log("Hour : " + hr, "Minutes : " + min, "Seconds: " + sec)

    let hourPosition = hr*360/12 + ((min * 360/60)/12) ;
    let minutePosition = (min * 360/60) + (sec* 360/60)/60;
    let secondPosition = sec * 360/60;

    hour.style.transform = "rotate(" + hourPosition + "deg)";
    minute.style.transform = "rotate(" + minutePosition + "deg)";
    second.style.transform = "rotate(" + secondPosition + "deg)";

}
var interval=setInterval (the_clock, 1000);