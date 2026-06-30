fetch("navi.html")
    .then(whole => {
    document.getElementById("navi").innerHTML = whole.text();
  })
  
