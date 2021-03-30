const txt = document.getElementById("txt");

txt.addEventListener("input", txtChange);

function txtChange(){
    console.log(txt.value);
}