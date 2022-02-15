const params = new URLSearchParams(window.location.search);
const file = params.get("f");
var msg = document.getElementById('msg')

if (file == "") {
  msg.innerHTML = "Error: no file id provided"
}
else{
  window.location.replace("qbifiles.000webhostapp.com/"+file);
}
