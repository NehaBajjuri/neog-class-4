
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//outputDiv.innerText = "Neha"
//console.log(txtInput)
function getTranslationURL(text){
    return serverURL + "?" +"text=" + text
}
function errorHandler(error){
    console.log("error occured",error)
    alert("Something wrong with server!try again after some time");
}
function clickHandler(){
    //outputDiv.innerText="aredsserfr   "+txtInput.value;
    var inputText = txtInput.Value;
    //calling server
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json))
    .catch()
};
btnTranslate.addEventListener("click",clickHandler)