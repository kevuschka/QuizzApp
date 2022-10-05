
// ########## RENDER CSS-GAME START CONTENT ##########
function renderCSSQuiz() {
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
        <div class="button-container flex"><a href="#" class="btn btn-warning c-white" onclick="startCSS()">Go somewhere</a></div>`;
}


