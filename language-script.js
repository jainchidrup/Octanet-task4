// language-script.js
function startLesson() {
    const lessonText = document.getElementById('lessonText');
    lessonText.textContent = "Today's lesson: Basic Greetings in Spanish. 'Hello' is 'Hola'.";
    document.getElementById('quizButton').style.display = 'block';
}

function showQuiz() {
    document.getElementById('lessonArea').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const feedback = document.getElementById('feedback');

    if (answer === 'hola') {
        feedback.textContent = "Correct! 'Hello' in Spanish is 'Hola'.";
        feedback.style.color = 'green';
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = 'red';
    }
}
