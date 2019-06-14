import {Selector, t} from 'testcafe';

export default class NewPostModel {
    constructor() {
        this.postTitleInput = Selector('.post-title');
        this.postContentInput = Selector('.post-content');
        this.savePostButton = Selector('.save-post');

    }
}


