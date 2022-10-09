// ########## RENDER HTML-GAME START CONTENT ##########
function renderHTMLQuiz() {
    resetVariables();
    selectHTML();
    getInnerHtmlOf('card-img', renderHTMLStartContent());
    renderHTMLStartBody();
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
}


function renderHTMLStartContent() {
    return `<div class="start-screen flex column">Welcome to <br> The Awesome HTML Quiz <br> <span>Ready for the Challange?</span></div>`;
}


function selectHTML() {
    resetNavSelection();
    selectedHTML = 1;
    selectedCategory();
}


function renderHTMLStartBody() {
    getInnerHtmlOf('card-body', renderHTMLStartBodyContent());
}

function renderHTMLStartBodyContent() {
    return `
        <h5 class="card-title">HTML</h5>
        <p class="card-text">Die HTML-Challange ist zum warm werden. Solltest du ohne Probleme hinbekommen!</p>
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="pageMinusOne();startHTML()">Spiel starten</a></div>`;
}


// ########## START THE GAME ##########
function startHTML() {
    page++;
    if(selectedAnswers[page]) {
        renderFullAnswersResultHTML(selectedAnswers[page]);
    } else {
        enterGameMode();
        renderQuestionHTML();
        renderGameBody();
        renderAnswersHTML();
    }
}

// ########## RENDER QUESTION ##########
function renderQuestionHTML() {
    getInnerHtmlOf('card-img', renderQuestionContentHTML());
    renderProgressBar();
}


function renderQuestionContentHTML() {
    return `<div class="start-screen question-screen flex column">
                <p class="question">${htmlQuestions[page].question}</p>
            </div>`;
}

// ########## RENDER THE POSSIBLE ANSWERS ##########
function renderAnswersHTML() {
    let answer;
    for (let i = 1; i < 5; i++) {
        answer = htmlQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer selected card-body cursor-p" id="htmlAnswer${i}" onclick="clickAnswerHTML(${i})">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}

// ########## CLICK ON A POSSIBLE ANSWER ##########
function clickAnswerHTML(i) {
    selectedAnswers.push(i);
    let selected = selectedAnswers[page];
    if (selected == htmlQuestions[page].right_answer) {
        rightAnswers++;
        AUDIO_SUCCESS.play();
    } else {
        AUDIO_FAIL.play();
    }
    renderFullAnswersResultHTML(selected);  //also in the backPage() function
    progressBarNext();
}

// ########## RENDER ANSWERS WHEN ALREADY CLICKED ON AN ANSWER ##########
function renderFullAnswersResultHTML(selected) {
    renderAnswersResultHTML();
    coloringAnswersResultHTML(selected);
}


function renderAnswersResultHTML() {
    renderGameBody();
    for (let i = 1; i < 5; i++) {
        answer = htmlQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer card-body cursor-d" id="htmlAnswer${i}">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}


function coloringAnswersResultHTML(selected) {
    document.getElementById(`htmlAnswer${selected}`).style.border = '2px solid black';
    if(selected == htmlQuestions[page].right_answer) {
        addClasslistOf(`htmlAnswer${selected}`, 'bs-success-acid');
    } else {
        addClasslistOf(`htmlAnswer${selected}`, 'bg-danger');
        addClasslistOf(`htmlAnswer${htmlQuestions[page].right_answer}`, 'bs-success-acid');
    }
}

// ########## WHEN CLICK ON ARROW FOR NEXT PAGE ##########
function renderNextPageHTML() {
    if(page < htmlQuestions.length-1) {
        startHTML();
    } else {
        resultHTML();
    }
}

// ########## RENDER LAST PAGE (RESULT PAGE) ##########
function resultHTML() {
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
    getInnerHtmlOf('card-img', renderResultContent());
    getInnerHtmlOf('quizCategory', 'HTML');
    renderHTMLResultBody();
    removeClasslistOf('card-body', 'space');
    addClasslistOf('card-body', 'flex-centering-result');
}


// function renderHTMResultContent() {
//     return `<div class="start-screen end-screen flex column" id="start-screen">
//                 <img class="brain-result" src="img/brain result.png">
//                 <span id="result-line">Du hast <b>${rightAnswers} von 5</b> Fragen richtig beantwortet!</>
//             </div>
//             <img class="trophy show-trophy absolute" src="img/tropy.png">`;
// }


function renderHTMLResultBody() {
    getInnerHtmlOf('card-body', renderHTMLResultBodyContent());
}


function renderHTMLResultBodyContent() {
    return `
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="renderHTMLQuiz();pageMinusOne();startHTML()">Spiel wiederholen!</a></div>`;
}