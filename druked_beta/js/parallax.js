function Main() {
  setInterval(()=> {
    var scrollpospercent = (((-this.scrollY/window.screen.availHeight)*100)/5)+35;
    var imagepos = "0% " + scrollpospercent + "%"
    var main = document.getElementById('mainid');

    main.style.backgroundPosition = imagepos;
  }, 1)
}

Main()
