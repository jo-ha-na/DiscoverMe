var questions = [
    { question: "Quelle est ma couleur préférée?", answer: "bleu" },
    { question: "Quel est mon animal préféré?", answer: "éléphant" },
    { question: "Quel est mon film préféré?", answer: "À la recherche du bonheur" }
];
var currentQuestionIndex = 0;
var score = 0;

function displayQuestion() {
    var questionElement = document.getElementById('question');
    var userAnswer = document.getElementById('answer');
    userAnswer.value = ''; 
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
    } else {
        document.querySelector('.score').textContent = "Votre score : " + score;
        document.querySelector('.link').style.display = 'block'; 
    }
}
function displayCharacter() {
    var character = document.getElementById('character');
    if (score >= 3) { 
        character.style.display = 'block';
        character.style.transform = 'translateY(0)'; 
    } else {
        character.style.display = 'none';
    }
}


function verifier() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    if (userAnswer === questions[currentQuestionIndex].answer.toLowerCase()) {
        score++;
        alert("Correct!");
    } else {
        alert("Faux! La réponse correcte était : " + questions[currentQuestionIndex].answer);
    }
    currentQuestionIndex++;
    displayQuestion();
    displayCharacter();
}


document.addEventListener('DOMContentLoaded', function() {
    displayQuestion(); 
});
