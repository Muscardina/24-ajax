function hazElAjax() {
   var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
          console.log(this.responseText)
          document.getElementById("resultado").innerHTML = this.responseText
        }
    };
    xhttp.open("GET", "/suma?sumando1=1&sumando2=8", true);
    xhttp.send();
}

setTimeout(hazElAjax, 1000)
