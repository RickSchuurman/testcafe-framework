import {Selector, t} from 'testcafe';

export default class LoginModel {
    constructor() {
        this.emailInput = Selector('#email-input');
        this.passwordInput = Selector('#password-input');
        this.loginBtn = Selector('#login-btn');
    }

    async loginForm(email, password) {
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginBtn);
    }
}


