const questions = [
    {
        question: "What was Depeche Mode's first album?",
        answers: ["A Broken Frame", "Speak and Spell", "Violator"]
    },
    {
        question: "Who was The Smiths's vocalist?",
        answers: ["Paul Heaton", "Steven Morrissey", "Kevin Shields"]
    },
    {
        question: "What year the band Radiohead was formed?",
        answers: ["1992", "1985", "1988"]
    },
    {
        question: "How many studio albums Pet Shop Boys has released?",
        answers: ["9", "7", "6"]
    },
    {
        question: "Where Massive Attack was founded?",
        answers: ["London", "Bristol", "Manchester"]
    },
    {
        question: "Which band's debut album released in 1981 was 'Movement'?",
        answers: ["Joy Division", "New Order", "Goldfrapp"]
    },
    {
        question: "Which female artist was featuring in Coldplay's song 'Princess of China'?",
        answers: ["Alicia Keys", "Rihanna", "Sara Bareilles"]
    }
];

const start = document.querySelector('.start').addEventListener('click', startQuiz);
let i = 0;
let points = 0;

function startQuiz() {
    document.querySelector('#startBtn').style.display = "none";
    showQuestion();
}

function nextQuestion() {
    i++;
    if (i < questions.length) {
        showQuestion();
    }
    else {
        endQuiz();
    }
}

function addPoints() {
    points++;
}

function showQuestion() {
    const choice = [`<button type="button" class="answer" onclick="nextQuestion()">${questions[i].answers[0]}</button>`,
    `<button type="button" class="answer" onclick="addPoints(), nextQuestion()">${questions[i].answers[1]}</button>`,
    `<button type="button" class="answer" onclick="nextQuestion()">${questions[i].answers[2]}</button>`];
    document.querySelector('.title').innerHTML = questions[i].question;
    shuffle(choice);
    document.querySelector('.choices').innerHTML = choice.join('<br>');
}

function endQuiz() {
    document.querySelector('.choices').style.display = "none";
    document.querySelector('.title').innerHTML = `Your points: ${points} / ${questions.length}`;
}

function shuffle(choice) {
    choice.sort(() => Math.random() - 0.5);
}