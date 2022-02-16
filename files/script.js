const params = new URLSearchParams(window.location.search);
const file = params.get("f");
var msg = document.getElementById('msg')
var bar = document.getElementById('bar')
var title = document.getElementById('title')

if (!file) {
  msg.innerHTML = "Error: no file id provided";
  msg.style.color = "Red";
  bar.style.opacity = 0;
  title.innerHTML = "File ID not found";
}
else{
  msg.innerHTML = "Checking file...";
  msg.style.color = "White";

  var url = "http://qbifiles.000webhostapp.com/" + file;
  var img = new Image();
  img.src = url;
  img.onload = function()
  {
    msg.innerHTML = "You will be redirected soon...";
    msg.style.color = "Green";
    window.location = "http://qbifiles.000webhostapp.com/" + file;
  }
  img.onerror = function()
  {
    msg.innerHTML = "Error: selected file doesn't exist";
    msg.style.color = "Red";
    bar.style.opacity = 0;
    title.innerHTML = "File doesn't exist";
  }
}
