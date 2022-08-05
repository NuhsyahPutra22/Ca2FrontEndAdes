function submit() {
  // variables declaration
  var points = 0;
  // var q = JSON.stringify(document.quiz.q.value);
  var q1 = document.getElementById("q1-input").value;
  var q2 = document.getElementById("q2-input").value;
  var q3 = document.getElementById("q3-input").value;
  var q4 = document.getElementById("q4-input").value;
  var q5 = document.getElementById("q5-input").value;
  var q6 = document.getElementById("q6-input").value;
  var q7 = document.getElementById("q7-input").value;
  var q7Arr = q7.split(',');
  // var answer = document.getElementById("");
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  var button = document.getElementById("button");

  // if else conditions here
  // Question 1
  if (q1 == "1") {
    points += 2;
  } else if (q1 == "2") {
    points++;
  } else {
    points = points;
  }

  //Question 2
  if (q2 == "1") {
    points += 2;
  } else if (q2 == "2") {
    points++;
  } else {
    points = points;
  }

    //Question 3
    if (q3 == "1") {
      points += 2;
    } else if (q3 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 4
    if (q4 == "1") {
      points += 2;
    } else if (q4 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 5
    if (q5 == "1") {
      points += 2;
    } else if (q5 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 6
    if (q6 == "1") {
      points += 2;
    } else if (q6 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 7
    for (i=0; i< q7Arr.length; i++) {
      let x = q7Arr[i];
    
    switch (x) {
      case "HTML":
        points++;
        break;
      case "CSS":
        points++;
        break;
      case "Java":
        points++;
        break;
      case "JavScript":
        points++;
        break;
      case "Python":
        points++;
        break;
      case "C#":
        points++;
        break;
      case "C++":
        points++;
        break;
      case "C":
        points++;
        break;
      case "Swift":
        points++;
        break;
      case "Ruby":
        points++;
        break;
      case "R":
        points++;
        break;
      case "Golang":
        points++;
        break;
      case "PHP":
        points++;
        break;
      case "Objective-C":
        points++;
        break;
      default:
        points = points;
    }
  }

    quiz.style.display = "none";
    button.style.display = "none";

    // points results
    if (points > 14) {
      // result.textContext = `Your result s ${result}/20. Software Development`;
      result.innerHTML = `Your result is ${points}. Software Development`;
    } else if (points > 9) {
      // result.textContext = `Your result s ${result}/20. Immersive Simulation`;
      result.innerHTML = `Your result is ${points}. Immersive Simulation`;
    } else {
      // result.textContext = `Your result s ${result}/20. User Experience`;
      result.innerHTML = `Your result is ${points}. User Experience`;
    }
}

function refresh() {
  location.reload();
}
