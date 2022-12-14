
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
//outputDiv.innerText = "Neha"
//console.log(txtInput)
function getTranslationURL(text){
    return serverURL + "?" +"text=" + text;
}
function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server!try again after some time");
    console.log("Error : " + error);
}
function clickHandler(){
    //outputDiv.innerText="aredsserfr   "+txtInput.value;
    var inputText = txtInput.value;
    //calling server
    fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) =>   {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
    .catch(errorHandler);
};
btnTranslate.addEventListener("click",clickHandler);