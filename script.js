var luck = ["Extremely Lucky","Very Lucky","Lucky","Common","Unlucky","Misfortune","Strange","Heavy"];
var heading = document.getElementById("title");
var clickButton = document.getElementById("clickButton");
var userInput = document.getElementById("myInput");
var outputText = document.getElementById("outputText");
var times = 3;

clickButton.addEventListener("click",function(){
  var currentInputText = userInput.value;
  generate(currentInputText,times);
  restyle();
})

function generate(userInput,times){
  if (times>0) {
    var randomIndex = Math.floor(Math.random()*luck.length);
    var select = luck[randomIndex];
    outputText.innerText = userInput + ", today's key word for you might be" + " "+ select;
    console.log(randomIndex);
  }
  else{
    outputText.innerText = "Sorry, you only have 3 times for today."
  }
  

}
function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb(0,0,"+randB+")";
  var randOutputColor2 = "rgb( "+randR+","+randG+","+randB+",20)";
  outputText.style.color = randOutputColor;
  outputText.style.backgroundColor = randOutputColor2;
  heading.style.color = "rgb( "+randR+","+randG+","+randB+",40)";
}