import {Role} from 'testcafe';
import LoginModel from "../model/login.model";
import {HeaderComponent} from "../components/header.component";

const loginModel = new LoginModel();
const headerComponentModel = new HeaderComponent();

const loginPageUrl = 'ec2-34-255-161-140.eu-west-1.compute.amazonaws.com';

export const regularUser = Role(loginPageUrl, async t => {
    await t
        .click(headerComponentModel.login)
        .typeText(loginModel.emailInput, 'info@joyoftesting.nl')
        .typeText(loginModel.passwordInput, 'test')
        .click(loginModel.loginBtn);
});

export const admin = Role(loginPageUrl, async t => {
    await t
        .click(headerComponent.login)
        .typeText(loginModel.emailInput, 'info@joyoftesting.nl')
        .typeText(loginModel.passwordInput, 'test')
        .click(loginModel.loginBtn);
});