import {Selector} from 'testcafe';

export class HeaderComponent {

    constructor() {
        this.signup = Selector('[data-test="signup"]');
        this.login = Selector('[data-test="login"]');
        this.logout = Selector('[data-test="logout"]');
        this.newPost = Selector('[data-test="new-post"]');
    }
}