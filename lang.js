// var username = prompt("Give me username ")
// console.log("Script is working from different file")
// alert("This script works "+ username )
var translate = document.querySelector("#translate");
var txtinput = document.querySelector("#txt-input");
var results = document.querySelector("#result");

var server = "https://api.funtranslations.com/translate/shakespeare.json"

function getTranslationURL(input){
    return server + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something is wrong")
}



function clickHandler(){
    var inputtext = txtinput.value

    fetch(getTranslationURL(inputtext))

    .then (response=>response.json())
    .then (json =>{
        var translatedText=json.contents.translated;
        results.innerText = translatedText;
    })
    .catch(errorHandler)
};
translate.addEventListener("click", clickHandler)