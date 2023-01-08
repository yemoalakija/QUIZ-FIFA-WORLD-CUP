const questions = [
    {
      id: 1,
      question: "Which nation has won the most World Cups?",
      answer: "Brazil",
      options: ["France", "Brazil", "England"],
    },
    {
      id: 2,
      question: "How often is the World Cup held?",
      answer: "Every 4 years",
      options: ["Every 4 years", "Every 3 years", "Every 2 years"],
    },
    {
      id: 3,
      question:
        "What animal was the official mascot for the 1998 World Cup in France?",
      answer: "A Cockerel",
      options: ["An Eagle", "A Lion", "A Cockerel"],
    },
    {
      id: 4,
      question:
        "Which African footballer is the oldest person ever to score in a World Cup?",
      answer: "Roger Milla",
      options: ["Taribu West", "Roger Milla", "Rashidi Yekini"],
    },
    {
      id: 5,
      question:
        "Who was the manager of the German national team when they won in 2014?",
      answer: "Joachim Löw",
      options: ["Joachim Löw", "Jürgen Klinsmann", "Hansi Flick"],
    },
    {
      id: 6,
      question: "Which nation hosted the 1994 FIFA World Cup?",
      answer: "USA",
      options: ["Japan", "South Africa", "USA"],
    },
    {
      id: 7,
      question:
        "What musical instrument was banned by FIFA after the 2010 World Cup?",
      answer: "Vuvuzela",
      options: ["Vuvuzela", "Trumpet", "Violin"],
    },
    {
      id: 8,
      question: "How many times have Italy won the World Cup so far?",
      answer: "4",
      options: ["4", "1", "3"],
    },
    {
      id: 9,
      question:
        "Which British pop star performed at the opening ceremony of the 2018 tournament?",
      answer: "Robbie Williams",
      options: ["Elton John", "Craig Davis", "Robbie Williams"],
    },
    {
      id: 10,
      question: "Which nation will have its World Cup debut in 2022?",
      answer: "Morocco",
      options: ["Morocco", "Qatar", "Senegal"],
    },
    {
      id: 11,
      question: "In what year was the first FIFA Women’s World Cup?",
      answer: "1991",
      options: ["1991", "1992", "1993"],
    },
    {
      id: 12,
      question: "Which nation is the only one to top the FIFA World Rankings without ever winning a World Cup?",
      answer: "Belgium",
      options: ["France", "Scotland", "Belgium"],
    },
  ];

  let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;

  question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    </ul>`;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function next() {
  if (question_count == questions.length - 1) {
    location.href = "result.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function randomize(){
  let myRandom = questions.length;
  randomizeQuestions = questions[Math.floor(Math.random() * myRandom)];
  document.getElementById("questions") = randomizeQuestions;
}