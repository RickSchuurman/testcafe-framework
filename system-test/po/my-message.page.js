import { Selector } from 'testcafe';

export class MyMessagePage {

    constructor() {
        this.posts = Selector('.mat-expansion-panel')
    }
}