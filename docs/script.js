fetch('navi.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navi').innerHTML = data;
    });
