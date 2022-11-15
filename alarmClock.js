var alHours = "";
var alMinutes = "";
var alarmTime = "";

function digitalClock() {
  var date = new Date();
  var hours = date.getHours()%12 + "";
  var minutes = date.getMinutes() + "";
  var seconds = date.getSeconds() + "";
  var day = date.getDay();

  if (hours.length < 2) {
    hours = "0" + hours;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var clock = weekDays[day] + " " + hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = clock;

  // Alarm Set Time -- > Chime Sounds 12 times
  if (minutes == alMinutes && hours == alHours && date.getSeconds() < 12) {
    playBeep();
  }
}

function setAlrmTime() {
    var timeString = String(document.getElementById("alarmTimeSelect").value);
    alHours = timeString.charAt(0) + timeString.charAt(1);
    alMinutes = timeString.charAt(3) + timeString.charAt(4);
    alHours = alHours%12;
    if (alHours < 10) {
      alHours = "0" + alHours;
    }
    document.getElementById("alarm").innerHTML = 'Alarm at: ' + alHours + ':' + alMinutes;    
}

function clearAlrmTime() {
  document.getElementById("alarm").innerHTML = 'Alarm not set';    
}


function snooze() {
    if (alMinutes != '' || alHours != ''){
        var snoozMinutes = 10;
        if  (Number(alMinutes) < 50)  {
            snoozMinutes += Number(alMinutes);
            alMinutes = String(snoozMinutes);
            alHours = alHours;

        } else if (Number(alMinutes) >= 50) {
            snoozMinutes = (Number(alMinutes)+snoozMinutes) - 60;
            if (snoozMinutes === 0 ){
                alMinutes = '00';            
            }else {
                alMinutes = '0' + String(snoozMinutes);
            }
                    
            alHours = Number(alHours) +1;
            String(alHours );
        }
    
        document.getElementById("startup").innerHTML = 'Next Alarm at: ' + alHours + ':' + alMinutes;
    }    
}

function playBeep() {
    var audio = new Audio('audio');
    audio.src = "chime.wav";
    audio.play();
}  
    
digitalClock();
setInterval(digitalClock, 1000);
