// ########## RENDER JS-GAME START CONTENT ##########
function renderJSQuiz() {
    resetVariables();
    selectJS();
    getInnerHtmlOf('card-img', renderJSStartContent());
    renderJSStartBody();
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
}

// for marking the current nav item
function selectJS() {
    resetNavSelection();
    selectedJS = 1;
    selectedCategory();
}


function renderJSStartContent() {
    return `<div class="start-screen flex column" id="start-screen">Welcome to <br> The Awesome Javascript Quiz <br> <span>Ready for the Challange?</span></div>`;
}


function renderJSStartBody() {
    getInnerHtmlOf('card-body', renderJSStartBodyContent());
}


function renderJSStartBodyContent() {
    return `
        <h5 class="card-title">Javascript</h5>
        <p class="card-text">Bist du bereit für die Javascript-Challange? Nimm dir 5 Minuten Zeit dafür.</p>
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="startJS()">Spiel starten</a></div>`;
}


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


function renderQuestionJS() {
    getInnerHtmlOf('card-img', renderQuestionContentJS());
    renderProgressBar();
}


function renderQuestionContentJS() {
    return `<div class="start-screen flex column" id="start-screen">
                ${jsQuestions[page].question}
            </div>`;
}



//############## ALLGEMEIN

function renderProgressBar() {
    getInnerHtmlOfPlus('card-img', renderProgressBarContent());
    document.getElementById('progress-bar').style = `width: ${progress}%`;
}


function renderProgressBarContent() {
    return `<div class="progress bar absolute" id="progress" style="height: 5px;">
                <div class="progress-bar bs-success-acid" id="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
}

function progressBarNext() {
    progress = 20*(selectedAnswers.length);
    document.getElementById('progress-bar').style = `width: ${progress}%`;
}

function progressBarBack() {
    progress -= 20;
}
// ALLGEMEIN ###############



function renderAnswersJS() {
    let answer;
    for (let i = 1; i < 5; i++) {
        answer = jsQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer selected card-body cursor-p" id="answer${i}" onclick="clickAnswerJS(${i})">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}


function clickAnswerJS(i) {
    selectedAnswers.push(i);
    let selected = selectedAnswers[page];
    if (selected == jsQuestions[page].right_answer) {
        rightAnswers++;
    }
    renderFullAnswersResultJS(selected);  //also in the backPage() function
    progressBarNext();
}


function renderFullAnswersResultJS(selected) {
    renderAnswersResultJS();
    coloringAnswersResultJS(selected);
}


function renderAnswersResultJS() {
    renderGameBody();
    for (let i = 1; i < 5; i++) {
        answer = jsQuestions[page][`answer_${i}`];
        getInnerHtmlOfPlus('answers', `<div class="answer card-body cursor-d" id="answer${i}">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}


function coloringAnswersResultJS(selected) {
    document.getElementById(`answer${selected}`).style.border = '2px solid black';
    if(selected == jsQuestions[page].right_answer) {
        addClasslistOf(`answer${selected}`, 'bs-success-acid');
    } else {
        addClasslistOf(`answer${selected}`, 'bg-danger');
        addClasslistOf(`answer${jsQuestions[page].right_answer}`, 'bs-success-acid');
    }
}


function renderNextPageJS() {
    if(page < 4) {
        startJS();
    } else {
        resultJS();
    }
}


function resultJS() {
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
    getInnerHtmlOf('card-img', renderJSResultContent());
    renderJSResultBody();
    removeClasslistOf('card-body', 'space');
    addClasslistOf('card-body', 'flex-centering-result');
}


function renderJSResultContent() {
    return `<div class="start-screen end-screen flex column" id="start-screen">
                <img class="brain-result" src="img/brain result.png">
                <span id="result-line">Du hast <b>${rightAnswers} von 5</b> Fragen richtig beantwortet!</>
            </div>
            <img class="trophy show-trophy absolute" src="img/tropy.png">`;
}



function renderJSResultBody() {
    getInnerHtmlOf('card-body', renderJSResultBodyContent());
}


function renderJSResultBodyContent() {
    return `
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="renderJSQuiz();startJS()">Spiel wiederholen!</a></div>`;
}