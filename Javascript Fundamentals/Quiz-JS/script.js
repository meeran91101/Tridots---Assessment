const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyper Tool Multi Language",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "c"
  },
  {
    question: "Which is the national animal of India?",
    a: "Lion",
    b: "Tiger",
    c: "Elephant",
    d: "Leopard",
    correct: "b"
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    a: "Indira Gandhi",
    b: "Sarojini Naidu",
    c: "Pratibha Patil",
    d: "Mother Teresa",
    correct: "a"
  },
  {
    question: "What is the name of the highest peak in India?",
    a: "K2",
    b: "Kangchenjunga",
    c: "Nanda Devi",
    d: "Everest",
    correct: "b"
  },
  {
    question: "Which city is known as the 'Pink City' of India??",
    a: "Jaipur",
    b: "Udaipur",
    c: "HJodhpur",
    d: "Bikaner",
    correct: "a"
  },
  {
    question: "Which river is considered the holiest river in India?",
    a: "Yamuna",
    b: "Godavari",
    c: "Ganga",
    d: "Narmada",
    correct: "c"
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    a: "Jawaharlal Nehru",
    b: "Sardar Vallabhbhai Patel",
    c: "Mahatma Gandhi",
    d: "Bhagat Singh",
    correct: "c"
  },
  {
    question: "In which year did India gain independence?",
    a: "1942",
    b: "1947",
    c: "1950",
    d: "1965",
    correct: "b"
  },
  {
    question: "Which state is known as the 'Land of Five Rivers'?",
    a: "Uttar Pradesh",
    b: "Punjab",
    c: "Haryana",
    d: "Rajasthan",
    correct: "b"
  },
  {
    question: "What is the name of India's first satellite?",
    a: "Aryabhata",
    b: "Bhaskara",
    c: "Rohini",
    d: "INSAT-1B",
    correct: "a"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize?",
    a: "Rabindranath Tagore",
    b: " C.V. Raman",
    c: "Mother Teresa",
    d: "Hargobind Khorana",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "Which is the largest state in India by area?",
    a: "Rajasthan",
    b: "Madhya Pradesh",
    c: " Uttar Pradesh",
    d: "Maharashtra",
    correct: "a"
  },
  {
    question: "What is the name of India's famous monument built by Shah Jahan?",
    a: "Red Fort",
    b: "Qutub Minar",
    c: "Taj Mahal",
    d: "Humayun's Tomb",
    correct: "c"
  },
  {
    question: "Who is the author of the book 'Wings of Fire'?",
    a: "A.P.J. Abdul Kalam",
    b: "awaharlal Nehru ",
    c: "R.K. Narayan",
    d: "Vikram Seth",
    correct: "a"
  },
  {
    question: "Which is the smallest state in India by area?",
    a: "Sikkim",
    b: "Goa",
    c: "Mizoram",
    d: "Tripura",
    correct: "b"
  },
  {
    question: "Which city is known as the 'Silicon Valley of India'?",
    a: "Chennai",
    b: "Bangalore",
    c: "Hyderabad",
    d: "Pune",
    correct: "b"
  },
  {
    question: "Who is the current President of India?",
    a: "Pranab Mukherjee",
    b: "Ram Nath Kovind",
    c: "Draupadi Murmu",
    d: "Narendra Modi",
    correct: "c"
  },
  {
    question: "Which is India's longest river?",
    a: "Brahmaputra",
    b: "Godavari",
    c: "Narmada",
    d: "Indus",
    correct: "b"
  },
  {
    question: "Which planet is known as the 'Red Planet'? ",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b"
  },
  {
    question: "What is the chemical symbol for water?",
    a: "NaCl",
    b: "H2O",
    c: "CO2",
    d: "O2",
    correct: "b"
  },
  {
    question: "What is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    a: "Oxygen",
    b: "Nitrogen",
    c: "Carbon Dioxide",
    d: "Hydrogen",
    correct: "c"
  },
  {
    question: "What is the capital of Australia",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Perth",
    correct: "c"
  },
  {
    question: "Which is the longest river in the world?",
    a: "Amazon",
    b: "Nile",
    c: "Yangtze",
    d: "Mississippi",
    correct: "b"
  },
  {
    question: "What is the highest mountain in the world?",
    a: "K2",
    b: "Kangchenjunga",
    c: "Lhotse",
    d: "Mount Everest",
    correct: "d"
  },
  {
    question: "Which continent is known as the 'Land of the Midnight Sun'?",
    a: "Africa",
    b: "Asia",
    c: "Europe",
    d: "Antarctica",
    correct: "c"
  },
  {
    question: "What is the name of the deepest lake in the world?",
    a: "Lake Superior",
    b: "Lake Victoria",
    c: "Lake Baikal",
    d: "Caspian Sea",
    correct: "c"
  },


];

// For demo: Duplicate to make 50 questions
while (quizData.length < 30) {
  quizData.push({ ...quizData[quizData.length] });
}

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = `${currentQuiz + 1}. ${currentQuizData.question}`;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  } else {
    alert("Please select an answer!");
  }
});
