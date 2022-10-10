// ########## SMART FUNCTIONS ##########
function getInnerHtmlOf(id, todo) {
    document.getElementById(id).innerHTML = todo;
}


function getInnerHtmlOfPlus(id, todo) {
    document.getElementById(id).innerHTML += todo;
}


function addClasslistOf(id, theclass) {
    document.getElementById(id).classList.add(theclass);
}


function removeClasslistOf(id, theclass) {
    document.getElementById(id).classList.remove(theclass);
}


function hide(id) {
    document.getElementById(id).classList.add('d-none');
}

// ########## RENDER QUIZ ##########
function renderQuiz(quiz) {
    resetVariables();
    selectNav(quiz);
    getInnerHtmlOf('card-img', renderStartContent(quiz));
    renderStartBody(quiz);
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
}


function selectNav(quiz) {
    resetNavSelection();
    if(`${quiz}` == 'html') {selectedHTML = 1;}
    else if (`${quiz}` == 'css') {selectedCSS = 1;}
    else {selectedJS = 1;}
    navSelection();
}


function renderStartContent(quiz) {
    if(`${quiz}` == 'html') {
        return `<div class="start-screen flex column">Welcome to <br> The Awesome HTML Quiz <br> <span>Ready for the Challange?</span></div>`;
    } else if (`${quiz}` == 'css') {
        return `<div class="start-screen flex column">Welcome to <br> The Awesome CSS Quiz <br> <span>Ready for the Challange?</span></div>`;
    } else {
        return `<div class="start-screen flex column">Welcome to <br> The Awesome Javascript Quiz <br> <span>Ready for the Challange?</span></div>`;
    }
}


function renderStartBody(quiz) {
    if(`${quiz}` == 'html') {
        getInnerHtmlOf('card-body', renderHTMLStartBodyContent());
    } else if (`${quiz}` == 'css') {
        getInnerHtmlOf('card-body', renderCSSStartBodyContent());
    } else {
        getInnerHtmlOf('card-body', renderJSStartBodyContent());
    }
}

// ########## GAME MODES CHANGING THE SCREEN ##########
function enterGameMode() {
    enterGameModeResponsive();
    addClasslistOf('card-body', 'card-body-game');
    removeClasslistOf('card-img', 'card-img-startscreen');
    removeClasslistOf('card-body', 'flex-centering-result');
    addClasslistOf('card-body', 'space');
}


function enterGameModeResponsive() {
    addClasslistOf('card-img', 'card-img-game-resp');
    addClasslistOf('card-body', '.card-body-game-resp');
}


function quitGameMode() {
    quitGameModeResponsive();
    removeClasslistOf('card-img', '.card-img-game-resp');
    removeClasslistOf('card-body', 'card-body-game');
    removeClasslistOf('card', 'no-border');
    addClasslistOf('card-img', 'card-img-startscreen'); 
    removeClasslistOf('card-body', 'flex-centering-result');  
}


function quitGameModeResponsive() {
    removeClasslistOf('card-img', 'card-img-game-resp');
    removeClasslistOf('card-body', '.card-body-game-resp');
}



// ########## RESET ##########
function resetVariables() {
    page = 0;
    selectedAnswers = [];
    rightAnswers = 0;
    progress = 0;
}

// ########## NAV ITEM SELECTION ##########
function resetNavSelection() {
    selectedHTML = 0;
    selectedCSS = 0;
    selectedJS = 0;
}


function navSelection() {
    if(selectedHTML) {
        hideSelectionAll();
        showSelection('htmlNavSelection');
    } else if (selectedCSS) {
        hideSelectionAll();
        showSelection('cssNavSelection');
    } else {
        hideSelectionAll();
        showSelection('jsNavSelection');
    }
}


function hideSelectionAll() {
    hideSelection(`htmlNavSelection`);
    hideSelection(`cssNavSelection`);
    hideSelection(`jsNavSelection`);
}


function showSelection(id) {
    document.getElementById(id).classList.add('selected-nav-item');
}


function hideSelection(id) {
    document.getElementById(id).classList.remove('selected-nav-item');
}



// ########## PROGRESS BAR ##########
function renderProgressBar() {
    getInnerHtmlOfPlus('card-img', renderProgressBarContent());
    document.getElementById('progress-bar').style = `width: ${progress}%`;
}


function renderProgressBarContent() {
    return `<div class="progress bar absolute" id="progress" style="height: 5px;">
                <div class="progress-bar bg-success-acid" id="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
}


function progressBarNext() {
    progress = 20*(selectedAnswers.length);
    document.getElementById('progress-bar').style = `width: ${progress}%`;
}

// ########## RENDER GAME BODY ##########
function renderGameBody() {
    getInnerHtmlOf('card-body', renderGameBodyContent());
}


function renderGameBodyContent() {
    return `<div class="answers flex column" id="answers"></div>
            <div class="nextPage flex" id="nextPage"></div>`;
}

// ########## START THE GAME ##########
function start(quiz) {
    page++;
    if(selectedAnswers[page]) {
        renderFullAnswersResult(quiz, selectedAnswers[page]);
    } else {
        enterGameMode();
        renderQuestion(quiz);
        renderGameBody();
        renderAnswers(quiz);
    }
}

// ########## RENDER QUESTION ##########
function renderQuestion(quiz) {
    if(`${quiz}` == 'html') {
        getInnerHtmlOf('card-img', renderQuestionContent(quiz));
    } else if (`${quiz}` == 'css') {
        getInnerHtmlOf('card-img', renderQuestionContent(quiz));
    } else {
        getInnerHtmlOf('card-img', renderQuestionContent(quiz));
    }
    renderProgressBar();
}


function renderQuestionContent(quiz) {
    if(`${quiz}` == 'html') {
        return renderHTMLQuestion();
    } else if (`${quiz}` == 'css') {
        return renderCSSQuestion();
    } else {
        return renderJSQuestion();
    }
}

function renderHTMLQuestion() {
    return `<div class="start-screen question-screen flex">
                <p class="question">${htmlQuestions[page].question}</p>
            </div>`;
}


function renderCSSQuestion() {
    return `<div class="start-screen question-screen flex">
                <p class="question">${cssQuestions[page].question}</p>
            </div>`;
}


function renderJSQuestion() {
    return `<div class="start-screen question-screen flex">
                <p class="question">${jsQuestions[page].question}</p>
            </div>`;
}

// ########## RENDER THE POSSIBLE ANSWERS ##########
function renderAnswers(quiz) {
    let answer;
    for (let i = 1; i < 5; i++) {
        if(`${quiz}` == 'html') {answer = htmlQuestions[page][`answer_${i}`];}
        else if (`${quiz}` == 'css') {answer = cssQuestions[page][`answer_${i}`];}
        else {answer = jsQuestions[page][`answer_${i}`];}
        getInnerHtmlOfPlus('answers', `<div class="answer selected card-body cursor-p" id="${quiz}Answer${i}" onclick="clickAnswer('${quiz}', ${i})">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}

// ########## CLICK ON A POSSIBLE ANSWER ##########
function clickAnswer(quiz, i) {
    selectedAnswers.push(i);
    let selected = selectedAnswers[page];
    let rightAnswer;
    rightAnswer = thatsTheRightAnswer(quiz);
    if (selected == rightAnswer) {
        rightAnswers++;
        AUDIO_SUCCESS.play();
    } else {AUDIO_FAIL.play();}
    renderFullAnswersResult(quiz, selected);  //also in the backPage() function
    progressBarNext();
}

// ########## RENDER ANSWERS WHEN ALREADY CLICKED ON AN ANSWER ##########
function renderFullAnswersResult(quiz, selected) {
    renderAnswersResult(quiz);
    coloringAnswersResult(quiz, selected);
}


function renderAnswersResult(quiz) {
    renderGameBody();
    for (let i = 1; i < 5; i++) {
        if(`${quiz}` == 'html') {answer = htmlQuestions[page][`answer_${i}`];}
        else if (`${quiz}` == 'css') {answer = cssQuestions[page][`answer_${i}`];}
        else {answer = jsQuestions[page][`answer_${i}`];}
        getInnerHtmlOfPlus('answers', `<div class="answer card-body cursor-d" id="${quiz}Answer${i}">${answer}</div>`);
    }
    getInnerHtmlOf('nextPage', renderArrowButtons());
}


function coloringAnswersResult(quiz, selected) {
    document.getElementById(`${quiz}Answer${selected}`).style.border = '2px solid black';
    let rightAnswer;
    rightAnswer = thatsTheRightAnswer(quiz);
    if (selected == rightAnswer) {
        addClasslistOf(`${quiz}Answer${selected}`, 'bg-success-acid');
    } else {
        addClasslistOf(`${quiz}Answer${selected}`, 'bg-danger');
        colorThatAnswer(quiz);
    }
}

/** The right answer depends on the current quiz category. */
function thatsTheRightAnswer(quiz) {
    if (`${quiz}` == 'html') {return htmlQuestions[page].right_answer;}
    else if (`${quiz}` == 'html') {return  cssQuestions[page].right_answer;}
    else {return jsQuestions[page].right_answer;}
}

function colorThatAnswer(quiz) {
    if(`${quiz}` == 'html') {addClasslistOf(`${quiz}Answer${htmlQuestions[page].right_answer}`, 'bg-success-acid');}
    else if (`${quiz}` == 'css') {addClasslistOf(`${quiz}Answer${cssQuestions[page].right_answer}`, 'bg-success-acid');}
    else {addClasslistOf(`${quiz}Answer${jsQuestions[page].right_answer}`, 'bg-success-acid');}
}

// ########## RENDER BUTTONS BACK/NEXT ##########
function renderArrowButtons() {
    if (page == 0) {
        return firstPageAlreadyDidOrNot();
    } else if ((0 < page) && (page < 5)) {
        return alreadyDidOrNot();
    } else {
        addClasslistOf('nextPage', 'd-none');
    }
}


function firstPageAlreadyDidOrNot() {
    if(selectedAnswers[page]) {
        return renderNextButton();
    } else {
        return renderNextButtonDisabled();
    }
}


function alreadyDidOrNot() {
    if(selectedAnswers[page]) {
        return renderBackNextButtons();
    } else {
        return renderBackNextButtonDisabled();
    }
}


function renderNextButtonDisabled() {
    return `<div>Seite ${page+1} von ${jsQuestions.length}</div>
            <img class="buttons next cursor-d" src="img/nextNone.png">`;
}


function renderNextButton() {
    return `<div>Seite ${page+1} von ${jsQuestions.length}</div>
            <img class="buttons next cursor-p" src="img/next.png" onclick="nextPage()">`;
}


function renderBackNextButtonDisabled() {
    return `<div>Seite ${page+1} von ${jsQuestions.length}</div>
            <div>
                <img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">
                <img class="buttons next cursor-d" src="img/nextNone.png">
            </div>`;
}


function renderBackNextButtons() {
    return `<div>Seite ${page+1} von ${jsQuestions.length}</div>
            <div>
                <img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">
                <img class="buttons next cursor-p" src="img/next.png" onclick="nextPage()">
            </div>`;
}


function backPage() {
    page--;
    let selected = selectedAnswers[page];
    if(selectedHTML) {
        renderFullAnswersResult('html', selected);
    } else if(selectedCSS) {
        renderFullAnswersResult('css', selected);
    } else {
        renderFullAnswersResult('js', selected);
    }
}


function nextPage() {
    if(selectedHTML) {
        renderNextPage('html');
    } else if(selectedCSS) {
        renderNextPage('css');
    } else {
        renderNextPage('js');
    }
}

/** The first gamepage should always have page=0.
    We start with page=0 (declaration), than page=-1 (pageMinusOne())
    and with function startHTML()/startCSS()/startJS (add 1 to page) 
    we get page=0.
    We need to start with page=0, because when page=-1, we get
    an error ('Cannot read properties of null).
*/
function pageMinusOne() {
    page = -1;
}

// ########## WHEN CLICK ON ARROW FOR NEXT PAGE ##########
function renderNextPage(quiz) {
    if(page < htmlQuestions.length-1) {
        start(quiz);
    } else {
        result();
        resultQuiz(quiz);
    }
}

// ########## RESULT ##########
function result() {
    removeClasslistOf('card-body', 'bg-gray');
    quitGameMode();
    getInnerHtmlOf('card-img', renderResultContent());
    removeClasslistOf('card-body', 'space');
    addClasslistOf('card-body', 'flex-centering-result');
}


function renderResultContent() {
    return `<div class="start-screen end-screen flex column">
                <img class="brain-result" src="img/brain result.png">
                <div class="quizTitle" id="quizCategory"></div>
                <span id="result-line">Du hast <b>${rightAnswers} von 5</b> Fragen richtig beantwortet!</>
            </div>
            <img class="trophy show-trophy absolute" src="img/tropy.png">`;
}

// ########## RESULT Body ##########
function resultQuiz(quiz) {
    getInnerHtmlOf('quizCategory', quiz.toUpperCase());
    renderResultBody(quiz);
    AUDIO_RESULT.play();
}


function renderResultBody(quiz) {
    getInnerHtmlOf('card-body', renderResultBodyContent(quiz));
}


function renderResultBodyContent(quiz) {
    return `
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="renderQuiz('${quiz}');pageMinusOne();start('${quiz}')">Spiel wiederholen!</a></div>`;
}