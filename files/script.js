const params = new URLSearchParams(window.location.search);
const file = params.get("f");
var msg = document.getElementById('msg')

if (file == "null") {
  msg.innerHTML = "Error: no file id provided"
}
else{
  window.location = "https://qbifiles.000webhostapp.com/" + file;
}
