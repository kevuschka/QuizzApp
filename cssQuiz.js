
// ########## RENDER CSS-GAME START CONTENT ##########
function renderCSSQuiz() {
    resetVariables();
    selectCSS();
    getInnerHtmlOf('card-img', renderCSSStartContent());
    renderCSSStartBody();
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
}


function renderCSSStartContent() {
    return `<div class="start-screen flex column">Welcome to <br> The Awesome CSS Quiz <br> <span>Ready for the Challange?</span></div>`;
}

function selectCSS() {
    resetNavSelection();
    selectedCSS = 1;
    selectedCategory();
}


function renderCSSStartBody() {
    getInnerHtmlOf('card-body', renderCSSStartBodyContent());
}

function renderCSSStartBodyContent() {
    return `
        <h5 class="card-title">CSS</h5>
        <p class="card-text">Mache die Challenge erst, wenn du vorherige Challange fehlerfrei bestanden hast.</p>
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="pageMinusOne();startCSS()">Spiel starten</a></div>`;
}


// ########## START THE GAME ##########
function startCSS() {
    page++;
    if(selectedAnswers[page]){
        renderFullAnswersResultCSS(selectedAnswers[page]);
    } else {
        enterGameMode();
        renderQuestionCSS();
        renderGameBody();
        renderAnswersCSS();
    }
}

// ########## RENDER QUESTION ##########
function renderQuestionCSS() {
    getInnerHtmlOf('card-img', renderQuestionContentCSS());
    renderProgressBar();
}


function renderQuestionContentCSS() {
    return `<div class="start-screen flex column">
                ${cssQuestions[page].question}
            </div>`;
}

// ########## RENDER THE POSSIBLE ANSWERS ##########
function renderAnswersCSS() {
    let answer;
    for (let i = 1; i < 5; i++) {
        answer = cssQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer selected card-body cursor-p" id="cssAnswer${i}" onclick="clickAnswerCSS(${i})">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}

// ########## CLICK ON A POSSIBLE ANSWER ##########
function clickAnswerCSS(i) {
    selectedAnswers.push(i);
    let selected = selectedAnswers[page];
    if (selected == cssQuestions[page].right_answer) {
        rightAnswers++;
        AUDIO_SUCCESS.play();
    } else {
        AUDIO_FAIL.play();
    }
    renderFullAnswersResultCSS(selected);  //also in the backPage() function
    progressBarNext();
}

// ########## RENDER ANSWERS WHEN ALREADY CLICKED ON AN ANSWER ##########
function renderFullAnswersResultCSS(selected) {
    renderAnswersResultCSS();
    coloringAnswersResultCSS(selected);
}


function renderAnswersResultCSS() {
    renderGameBody();
    for (let i = 1; i < 5; i++) {
        answer = cssQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer card-body cursor-d" id="cssAnswer${i}">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}


function coloringAnswersResultCSS(selected) {
    document.getElementById(`cssAnswer${selected}`).style.border = '2px solid black';
    if(selected == cssQuestions[page].right_answer) {
        addClasslistOf(`cssAnswer${selected}`, 'bs-success-acid');
    } else {
        addClasslistOf(`cssAnswer${selected}`, 'bg-danger');
        addClasslistOf(`cssAnswer${cssQuestions[page].right_answer}`, 'bs-success-acid');
    }
}

// ########## WHEN CLICK ON ARROW FOR NEXT PAGE ##########
function renderNextPageCSS() {
    if(page < cssQuestions.length-1) {
        startCSS();
    } else {
        resultCSS();
    }
}

// ########## RENDER LAST PAGE (RESULT PAGE) ##########
function resultCSS() {
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
    getInnerHtmlOf('card-img', renderResultContent());
    getInnerHtmlOf('quizCategory', 'CSS');
    renderCSSResultBody();
    removeClasslistOf('card-body', 'space');
    addClasslistOf('card-body', 'flex-centering-result');
}


// function renderCSSResultContent() {
//     return `<div class="start-screen end-screen flex column" id="start-screen">
//                 <img class="brain-result" src="img/brain result.png">
//                 <span id="result-line">Du hast <b>${rightAnswers} von 5</b> Fragen richtig beantwortet!</>
//             </div>
//             <img class="trophy show-trophy absolute" src="img/tropy.png">`;
// }


function renderCSSResultBody() {
    getInnerHtmlOf('card-body', renderCSSResultBodyContent());
}


function renderCSSResultBodyContent() {
    return `
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="renderCSSQuiz();pageMinusOne();startCSS()">Spiel wiederholen!</a></div>`;
}