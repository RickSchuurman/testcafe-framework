import {Selector, t} from 'testcafe';

export default class SignupModel {
    constructor() {
        this.emailInput = Selector('[data-test="email-input"]');
        this.passwordInput = Selector('[data-test="password-input"]');
        this.signupBtn = Selector('[data-test="signup-button"]');
        this.invalidEmailErr = Selector('#invalid-email');
        this.invalidPasswordErr = Selector('#invalid-password');
    }

    async signupForm(email, password) {
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.signupBtn);
    }
}

