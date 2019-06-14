import {myMessages} from '../../page-model/mocks/my-message.mock'
import MyMessageModel from "../../page-model/model/my-message.model";

fixture`Test MyMessages page`
    .page`http://tactrl.nl`
    .requestHooks(myMessages);

const myMessageModel = new MyMessageModel();

test('MyMessage show default two items per page', async t => {
    await t.expect(myMessageModel.post.count).eql(2)

});