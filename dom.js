//document.getElementById("bio").innerHTML="Erdem Kiliclar 1997"
// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML= intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler=tumListeler[0]
// tumElemanlar= sehirler.getElementsByTagName("li");

// for(i=0;i<tumElemanlar.length;i++){
//     alert(tumElemanlar[i].innerHTML);
    
// }

// var classElements = document.getElementsByClassName("intro1");
// alert(classElements.length)

// var queryElemanları = document.querySelectorAll("p.intro1")
// alert(queryElemanları.length)

// var nameElements = document.getElementsByName("musteriAdi");
// alert(nameElements[0].value)

// var sena = document.getElementById("sena").addEventListener("mouseover", changeColor);

// function changeColor(){
//     document.getElementById("sena").style.color="red"; 
//     var nameElements = document.getElementsByName("musteriAdi");
//     nameElements[0].value="Erdem"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue)

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba Java Script");

baslik.appendChild(node)

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2)

alert("p2 siliniyor")
div1.removeChild(p2)

alert("p1 değiştiriliyor")
div1.replaceChild(baslik,p1)