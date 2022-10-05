// ########## RENDER HTML-GAME START CONTENT ##########
function renderHTMLQuiz() {
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
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="startHTML()">Go somewhere</a></div>`;
}


function startHTML() {
    enterGameMode();
}