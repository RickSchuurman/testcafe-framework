import SignupModel from "../page-model/model/signup.model";
import {HeaderComponent} from "../page-model/components/header.component";
import {ClientFunction} from 'testcafe';

fixture`Test signup page`
    .page`http://tactrl.nl/`
    .beforeEach(async t => {
        await t.click(headerComponent.signup);
    });

const headerComponent = new HeaderComponent();
const signupModel = new SignupModel();

// Returns the URL of the current web page
const getPageUrl = ClientFunction(() => window.location.href);

// Returns the stored time value in milliseconds
const timestamp = new Date().valueOf();

test('Create a new account', async t => {
    await t.expect(await signupModel.emailInput.exists).ok();
    await t.expect(await signupModel.passwordInput.exists).ok();

    await signupModel.signupForm(`${timestamp}@test.nl`, 'test1234');
    await t.expect(getPageUrl()).contains('http://ec2-34-255-161-140.eu-west-1.compute.amazonaws.com/')
});

test('Can\'t create a new account without an address and password', async t => {
    await t.click(signupModel.signupBtn);
    await t.expect(getPageUrl()).contains('http://ec2-34-255-161-140.eu-west-1.compute.amazonaws.com/auth/signup');
    await t.expect(await signupModel.invalidEmailErr.innerText).eql('Please enter a valid email.');
    await t.expect(await signupModel.invalidPasswordErr.innerText).eql('Please enter a valid password.');

});

test('Can\'t create a new account with an invalid address', async t => {
    await signupModel.signupForm(`${timestamp}`, 'test1234');
    await t.expect(getPageUrl()).contains('http://ec2-34-255-161-140.eu-west-1.compute.amazonaws.com/auth/signup');
    await t.expect(await signupModel.invalidEmailErr.innerText).eql('Please enter a valid email.');

});
