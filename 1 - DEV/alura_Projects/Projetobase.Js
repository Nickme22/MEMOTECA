
var header = document.querySelector("header");
var section = document.querySelector("section");



fetch('C:\Users\Hc Gestão de Frotas\Desktop\alura_Projects\base.Json') .then(res => console.log(res))

var request = new XMLHttpRequest();
request.responseType = "json";
request.send();

request.onload = function () {

var mostrausuarios = request.response;


}