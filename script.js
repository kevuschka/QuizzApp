
function renderGameBody() {
    getInnerHtmlOf('card-body', renderGameBodyContent());
}


function renderGameBodyContent() {
    return `<div class="answers flex column" id="answers"></div>
            <div class="nextPage flex" id="nextPage"></div>`;
}


function renderArrowButtons() {
    if (page == 0) {
        if(selectedAnswers[page]) {
            return renderNextButton();
        } else {
            return renderNextButtonDisabled();
        }
    } else if ((0 < page) && (page < 5)) {
        if(selectedAnswers[page]) {
            return renderBackNextButtons();
        } else {
            return renderBackNextButtonDisabled();
        }
    } else {
        addClasslistOf('nextPage', 'd-none');
    }
}


function renderBackButton() {
    return `<img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">`;
}


function renderNextButton() {
    return `<img class="buttons next cursor-p" src="img/next.png" onclick="nextPage()">`;
}


function renderBackNextButtons() {
    return `<img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">
            <img class="buttons next cursor-p" src="img/next.png" onclick="nextPage()">`;
}


function renderNextButtonDisabled() {
    return `<img class="buttons next cursor-d" src="img/nextNone.png">`;
}


function renderBackNextButtonDisabled() {
    return `<img class="buttons back cursor-p" src="img/back.png" onclick="backPage()">
            <img class="buttons next cursor-d" src="img/nextNone.png">`;
}


function backPage() {
    page--;
    let selected = selectedAnswers[page];
    if(selectedHTML) {
        startHTML();
    } else if(selectedCSS) {
        startCSS();
    } else {
        renderFullAnswersResultJS(selected);
    }
}


function nextPage() {
    if(selectedHTML) {
        startHTML();
    } else if(selectedCSS) {
        startCSS();
    } else {
        renderNextPageJS();
    }
}


function resetNavSelection() {
    selectedHTML = 0;
    selectedCSS = 0;
    selectedJS = 0;
}


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


function showBorder(id) {
    document.getElementById(id).classList.add('selected-nav-item');
}


function hideBorderAll() {
    hideBorder(`htmlNavBorder`);
    hideBorder(`cssNavBorder`);
    hideBorder(`jsNavBorder`);
}


function hideBorder(id) {
    document.getElementById(id).classList.remove('selected-nav-item');
}


function enterGameMode() {
    addClasslistOf('card-body', 'card-body-game');
    removeClasslistOf('card-img', 'card-img-startscreen');
    removeClasslistOf('card-body', 'flex-centering');
    addClasslistOf('card-body', 'space');
}


function quitGameMode() {
    removeClasslistOf('card-body', 'card-body-game');
    removeClasslistOf('card', 'no-border');
    addClasslistOf('card-img', 'card-img-startscreen'); 
    removeClasslistOf('card-body', 'flex-centering');  
}

function resetVariables() {
    page = -1;
    selectedAnswers = [];
    rightAnswers = 0;
}


function renderQuestionContent(category) {
    if(category) {
        return `<div class="start-screen flex column" id="start-screen">
                    ${htmlQuestions[page].question}
                </div>`;
    } else if (category) {
        return `<div class="start-screen flex column" id="start-screen">
                    ${cssQuestions[page].question}
                </div>`;
    } else if(category) {
        return `<div class="start-screen flex column" id="start-screen">
                    ${jsQuestions[page].question}
                </div>`;
    }
}



