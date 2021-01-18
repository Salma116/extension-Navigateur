document.body.style.border = "5px solid #7386fb";

var h4Elements = document.getElementsByTagName("h4");
for(var i = 0; i < h4Elements.length; i++) {
   h4Elements[i].style.color = "blue";
}

var ulElements = document.getElementsByTagName("ul");
for(var i = 0; i < ulElements.length; i++){
    ulElements[i].style.color = "green";
    ulElements[i].style.fontSize = "20px";
}

var h1Elements = document.getElementsByTagName("h1");
for(var i = 0;i < h1Elements.length; i++){
    h1Elements[i].style.fontSize = "50px";
    h1Elements[i].style.color = "orangered";
}

var aElements = document.getElementsByTagName("a");
for(var i = 0;i < aElements.length; i++){
    aElements[i].style.color = "orange";
    aElements[i].style.fontFamily = "Georgia,serif";
}
var imgElements = document.getElementsByTagName("img");  
for (var i = 0; i <imgElements.length; i++) {
    imgElements[i].src="https://img2.freepng.fr/20171208/107/pink-flowers-vector-5a2ac51af27891.7886274815127524109932.jpg";
  }