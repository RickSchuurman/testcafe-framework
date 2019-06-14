import {HeaderComponent} from "../page-model/components/header.component";
import LoginModel from "../page-model/model/login.model";


fixture`Test login page`
    .page`http://tactrl.nl/`
    .beforeEach(async t => {
        await t.click(headerComponent.login);
    });

const headerComponent = new HeaderComponent();
const loginModel = new LoginModel();


test('Login on the page', async t => {
    await loginModel.loginForm('info@joyoftesting.nl', 'test');
    await t.expect(await headerComponent.logout.exists).ok();
    await t.expect(await headerComponent.newPost.exists).ok();
});

