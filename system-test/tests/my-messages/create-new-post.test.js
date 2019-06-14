import {HeaderComponent} from "../../page-model/components/header.component";
import NewPostModel from "../../page-model/model/new-post.model";
import { regularUser, admin } from '../../page-model/role/auth-role'

fixture`Test MyMessages page`
    .page`http://tactrl.nl`;

const headerComponent = new HeaderComponent();
const newPostModel = new NewPostModel();

test('Create a new post', async t => {
    await t
        .useRole(regularUser)
        .click(headerComponent.newPost)
        .typeText(newPostModel.postTitleInput, 'Test')
        .typeText(newPostModel.postContentInput, 'Test content')
        .click(newPostModel.savePostButton);
});