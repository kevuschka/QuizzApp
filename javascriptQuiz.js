// ########## RENDER JAVASCRIPT START PAGE ##########
function renderJSQuiz() {
    resetVariables();
    selectJS();
    getInnerHtmlOf('card-img', renderJSStartContent());
    renderJSStartBody();
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
}

// ########## MARK THE CURRENT NAV ITEM ##########
function selectJS() {
    resetNavSelection();
    selectedJS = 1;
    selectedCategory();
}


function renderJSStartContent() {
    return `<div class="start-screen flex column">Welcome to <br> The Awesome Javascript Quiz <br> <span>Ready for the Challange?</span></div>`;
}


function renderJSStartBody() {
    getInnerHtmlOf('card-body', renderJSStartBodyContent());
}


function renderJSStartBodyContent() {
    return `
        <h5 class="card-title">Javascript</h5>
        <p class="card-text">Bist du bereit für die Javascript-Challange? Nimm dir 5 Minuten Zeit dafür.</p>
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="pageMinusOne();startJS()">Spiel starten</a></div>`;
}

// ########## START THE GAME ##########
function startJS() {
    page++;
    if(selectedAnswers[page]){
        renderFullAnswersResultJS(selectedAnswers[page]);
    } else {
        enterGameMode();
        renderQuestionJS();
        renderGameBody();
        renderAnswersJS();
    }
}

// ########## RENDER QUESTION ##########
function renderQuestionJS() {
    getInnerHtmlOf('card-img', renderQuestionContentJS());
    renderProgressBar();
}


function renderQuestionContentJS() {
    return `<div class="start-screen flex column">
                ${jsQuestions[page].question}
            </div>`;
}

// ########## RENDER THE POSSIBLE ANSWERS ##########
function renderAnswersJS() {
    let answer;
    for (let i = 1; i < 5; i++) {
        answer = jsQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer selected card-body cursor-p" id="jsAnswer${i}" onclick="clickAnswerJS(${i})">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}

// ########## CLICK ON A POSSIBLE ANSWER ##########
function clickAnswerJS(i) {
    selectedAnswers.push(i);
    let selected = selectedAnswers[page];
    if (selected == jsQuestions[page].right_answer) {
        rightAnswers++;
    }
    renderFullAnswersResultJS(selected);  //also in the backPage() function
    progressBarNext();
}

// ########## RENDER ANSWERS WHEN ALREADY CLICKED ON AN ANSWER ##########
function renderFullAnswersResultJS(selected) {
    renderAnswersResultJS();
    coloringAnswersResultJS(selected);
}


function renderAnswersResultJS() {
    renderGameBody();
    for (let i = 1; i < 5; i++) {
        answer = jsQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer card-body cursor-d" id="jsAnswer${i}">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}


function coloringAnswersResultJS(selected) {
    document.getElementById(`jsAnswer${selected}`).style.border = '2px solid black';
    if(selected == jsQuestions[page].right_answer) {
        addClasslistOf(`jsAnswer${selected}`, 'bs-success-acid');
    } else {
        addClasslistOf(`jsAnswer${selected}`, 'bg-danger');
        addClasslistOf(`jsAnswer${jsQuestions[page].right_answer}`, 'bs-success-acid');
    }
}

// ########## WHEN CLICK ON ARROW FOR NEXT PAGE ##########
function renderNextPageJS() {
    if(page < (jsQuestions.length-1)) {
        startJS();
    } else {
        resultJS();
    }
}

// ########## RENDER LAST PAGE (RESULT PAGE) ##########
function resultJS() {
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
    getInnerHtmlOf('card-img', renderResultContent());
    getInnerHtmlOf('quizCategory', 'Javascript');
    renderJSResultBody();
    removeClasslistOf('card-body', 'space');
    addClasslistOf('card-body', 'flex-centering-result');
}


function renderJSResultBody() {
    getInnerHtmlOf('card-body', renderJSResultBodyContent());
}


function renderJSResultBodyContent() {
    return `
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="renderJSQuiz();pageMinusOne();startJS()">Spiel wiederholen!</a></div>`;
}