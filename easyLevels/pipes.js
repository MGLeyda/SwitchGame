const option1Pipes = [
  "top-left-vertical",
  "top-left-horizontal",
  "top-funnel",
  "bottom-left-vertical",
  "bottom-left-horizontal",
  "bottom-funnel",
];

const option2Pipes = ["top-center-vertical", "bottom-center-vertical"];

const option3Pipes = [
  "top-right-vertical",
  "top-right-horizontal",
  "top-funnel",
  "bottom-right-vertical",
  "bottom-right-horizontal",
  "bottom-funnel",
];

const allPipes = [
  "top-left-vertical",
  "top-left-horizontal",
  "top-center-vertical",
  "top-right-vertical",
  "top-right-horizontal",
  "top-funnel",
  "bottom-left-vertical",
  "bottom-left-horizontal",
  "bottom-right-vertical",
  "bottom-right-horizontal",
  "bottom-center-vertical",
  "bottom-funnel",
];

function changeColor(value) {
  for (var i = 0; i < allPipes.length - 1; i++) {
    document.getElementById(allPipes[i]).style.backgroundColor = "#3388ff";
    document.getElementById(allPipes[i]).style.zIndex = 50;
  }

  if (value == "option1") {
    var pipes = option1Pipes;
  }
  if (value == "option2") {
    var pipes = option2Pipes;
  }
  if (value == "option3") {
    var pipes = option3Pipes;
  }

  for (var i = 0; i < allPipes.length - 1; i++) {
    document.getElementById(pipes[i]).style.backgroundColor = "blue";
    document.getElementById(pipes[i]).style.zIndex = 100;
  }
}
