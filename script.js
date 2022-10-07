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

// ########## GAME MODES CHANGING THE SCREEN ##########
function enterGameMode() {
    addClasslistOf('card-body', 'card-body-game');
    removeClasslistOf('card-img', 'card-img-startscreen');
    removeClasslistOf('card-body', 'flex-centering-result');
    addClasslistOf('card-body', 'space');
}


function quitGameMode() {
    removeClasslistOf('card-body', 'card-body-game');
    removeClasslistOf('card', 'no-border');
    addClasslistOf('card-img', 'card-img-startscreen'); 
    removeClasslistOf('card-body', 'flex-centering-result');  
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


function selectedCategory() {
    if(selectedHTML) {
        hideBorderAll();
        showBorder('htmlNavBorder');
    } else if (selectedCSS) {
        hideBorderAll();
        showBorder('cssNavBorder');
    } else {
        hideBorderAll();
        showBorder('jsNavBorder');
    }
}


function hideBorderAll() {
    hideBorder(`htmlNavBorder`);
    hideBorder(`cssNavBorder`);
    hideBorder(`jsNavBorder`);
}


function showBorder(id) {
    document.getElementById(id).classList.add('selected-nav-item');
}


function hideBorder(id) {
    document.getElementById(id).classList.remove('selected-nav-item');
}

// ########## RENDER QUESTION ##########
function renderQuestionContent(category) {
    if(category) {
        return `<div class="start-screen flex column">
                    ${htmlQuestions[page].question}
                </div>`;
    } else if (category) {
        return `<div class="start-screen flex column">
                    ${cssQuestions[page].question}
                </div>`;
    } else if(category) {
        return `<div class="start-screen flex column">
                    ${jsQuestions[page].question}
                </div>`;
    }
}

// ########## PROGRESS BAR ##########
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

// ########## RENDER GAME BODY ##########
function renderGameBody() {
    getInnerHtmlOf('card-body', renderGameBodyContent());
}


function renderGameBodyContent() {
    return `<div class="answers flex column" id="answers"></div>
            <div class="nextPage flex" id="nextPage"></div>`;
}

// ########## RENDER BUTTONS BACK/NEXT ##########
function renderArrowButtons() {
    if (page == 0) {
        return alreadyDidOrNot();
    } else if ((0 < page) && (page < 5)) {
        return alreadyDidOrNot();
    } else {
        return addClasslistOf('nextPage', 'd-none');
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
    return `<img class="buttons next cursor-d" src="img/nextNone.png">`;
}


function renderNextButton() {
    return `<img class="buttons next cursor-p" src="img/next.png" onclick="nextPage()">`;
}


function renderBackNextButtonDisabled() {
    return `<img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">
            <img class="buttons next cursor-d" src="img/nextNone.png">`;
}


function renderBackNextButtons() {
    return `<img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">
            <img class="buttons next cursor-p" src="img/next.png" onclick="nextPage()">`;
}


function backPage() {
    page--;
    let selected = selectedAnswers[page];
    if(selectedHTML) {
        renderFullAnswersResultHTML(selected);
    } else if(selectedCSS) {
        renderFullAnswersResultCSS(selected);
    } else {
        renderFullAnswersResultJS(selected);
    }
}


function nextPage() {
    if(selectedHTML) {
        renderNextPageHTML();
    } else if(selectedCSS) {
        renderNextPageCSS();
    } else {
        renderNextPageJS();
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

// ########## RESULT ##########
function renderResultContent() {
    return `<div class="start-screen end-screen flex column">
                <img class="brain-result" src="img/brain result.png">
                <div class="quizTitle" id="quizCategory"></div>
                <span id="result-line">Du hast <b>${rightAnswers} von 5</b> Fragen richtig beantwortet!</>
            </div>
            <img class="trophy show-trophy absolute" src="img/tropy.png">`;
}
