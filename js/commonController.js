function goToPage(pageName) {
    model.app.currentPage = pageName;
    updateView();
}

function logOut() {
    model.app.loggedInAs = null;
    updateView();
}