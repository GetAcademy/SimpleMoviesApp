function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Logg inn</h1>
        <div style="display: grid; grid-template-columns: 100px 200px">
            <div>Brukernavn:</div>
            <input 
                type="text"
                oninput="model.inputs.loginPage.userName = this.value" 
                value="${model.inputs.loginPage.userName || ''}"
                />
            <div>Passord:</div>
            <input 
                type="password"
                oninput="model.inputs.loginPage.password = this.value" 
                value="${model.inputs.loginPage.password || ''}"
                />
        </div>    
        <button onclick="logIn()">Logg inn</button>
        <br/>Du er logget inn som ${model.app.loggedInAs || '(IKKE)'}
        <div style="color: red">${model.inputs.loginPage.error || ''}</div>

        <button onclick="model.app.loggedInAs = 'per'; updateView()">.</button>
    `;
}
