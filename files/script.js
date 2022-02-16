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
  window.location = "http://qbifiles.000webhostapp.com/" + file;
}
