import {HeaderComponent} from "../../page-model/components/header.component";
import NewPostModel from "../../page-model/model/new-post.model";
import { regularUser, admin } from '../../page-model/role/auth-role'

fixture`Test MyMessages page`
    .page`ec2-34-255-161-140.eu-west-1.compute.amazonaws.com`;

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