function logIn() {
    if (model.inputs.loginPage.userName == 'terje'
        && model.inputs.loginPage.password == 'hemmelig') {
        model.app.loggedInAs = 'terje';
    } else {
        model.inputs.loginPage.error = 'Ugyldig brukernavn eller passord';
    }
    updateView();
}