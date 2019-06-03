
function openType(evt, changeType) {
var i, x, tablinks;
x = document.getElementsByClassName("Type");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
}
document.getElementById(changeType).style.display = "block";
evt.currentTarget.className += " w3-red";
}
