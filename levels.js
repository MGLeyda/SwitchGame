const options = ["option1", "option2", "option3"];
const optionLabels = ["option1Label", "option2Label", "option3Label"];
const answers = ["3241", "2314", "2143", "4321", "3241"];
const levels = ["level1","level2","level3","level4", "level5"];
const results = [];

function goToLevel(level) {
  if(level < 6){
    window.location.href =
      "https://valiant-adjoining-wolf.glitch.me/easyLevels/level" + level + ".html";
  }
  else{
    window.location.href =
      "https://valiant-adjoining-wolf.glitch.me/mediumLevels/level" + level + ".html";
  }
}

function checkAnswer(level) {
  var options = document.getElementsByName("option");
  var option_value;
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      option_value = options[i].value;
      if (option_value == answers[level - 1]) {
        results[level - 1] = "Correct";
        document.getElementById(optionLabels[i]).style.backgroundColor = "green";
        
      } else {
        results[level - 1] = "False";
        document.getElementById(optionLabels[i]).style.backgroundColor = "red";
      }
    }
  }
}

function next(level){
  if (results[level - 2] == "Correct"){
    window.location.href =
      "https://valiant-adjoining-wolf.glitch.me/easyLevels/level" + level + ".html";
  }
  else{
    alert("You must correctly answer Level " + (level - 1).toString() + " to move on.");
  }
}
