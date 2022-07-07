const endtime = 'July 13 2022 14:30:00 GMT+0200';

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function displayClock(){
  document.getElementById('clock').innerHTML =

  getTimeRemaining(endtime).days + "d "
  + getTimeRemaining(endtime).hours
  + "h " + getTimeRemaining(endtime).minutes
  + "m " + getTimeRemaining(endtime).seconds
  + "s " + "<br>"
  + (((getTimeRemaining(endtime).total/1000)/691200)*100).toFixed(2) + "%";

  document.getElementById('prog').style.width = (100-((getTimeRemaining(endtime).total/1000)/691200)*100).toFixed(2) + "vw";
}

displayClock();

var myInterval = setInterval(function() {
  displayClock();
}, 500);
