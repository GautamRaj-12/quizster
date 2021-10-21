let displayName = prompt("What is your name?");
document.querySelector(".display-name").textContent = `Name: ${displayName}`;
const correctAnswers = [
  "D",
  "C",
  "C",
  "B",
  "A",
  "A",
  "C",
  "A",
  "D",
  "A",
  "C",
  "B",
  "D",
  "A",
  "C",
];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
    form.q11.value,
    form.q12.value,
    form.q13.value,
    form.q14.value,
    form.q15.value,
  ];

  //check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  //testing
  // for (let i = 0; i < userAnswers.length; i++) {
  //   if (correctAnswers[i] === userAnswers[i]) {
  //     let correct = userAnswers[i];
  //   }
  // }
  //testing

  //solution
  for (let i = 0; i <= correctAnswers.length; i++) {
    let showAnswer = document.querySelector(".show-answer");
    showAnswer.querySelector("span").textContent = `${correctAnswers}`;
    showAnswer.classList.remove("d-none");
  }
  //scroll to top
  scrollTo(0, 0);

  //show result on page
  let finalResult = document.querySelector(".result");
  finalResult.querySelector("span").textContent = `${score}`;
  finalResult.querySelector("span").textContent += `/${correctAnswers.length}`;
  finalResult.classList.remove("d-none");
  let percent = document.querySelector(".percent");

  let output = 0;

  const timer = setInterval(() => {
    let percentage = Math.round((score / userAnswers.length) * 100);
    percent.querySelector("span").textContent = `${output}%`;
    percent.classList.remove("d-none");
    if (output === percentage) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
