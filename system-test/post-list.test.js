import {MyMessagePage} from "./po/my-message.page";

const myMessagePage = new MyMessagePage();

fixture('Test MEAN example app')
    .page('http://34.255.161.140/');

test('list contains posts', async t => {
    await t.expect(myMessagePage.posts.count).eql(2);
});