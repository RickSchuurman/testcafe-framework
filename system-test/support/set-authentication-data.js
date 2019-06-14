import {ClientFunction, t} from 'testcafe';

const setAuthenticationData = ClientFunction((key, val) => localStorage.setItem(key, val));
const localStorageGet = ClientFunction(key => localStorage.getItem(key));

export class SetAuthData {

    async setAuthData() {
        await setAuthenticationData('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm9Aam95b2Z0ZXN0aW5nLm5sIiwidXNlcklkIjoiNWQwMWY5MDNmOWFkOWQ3YTE1ZThlNWI4IiwiaWF0IjoxNTYwNDQ5NDgwLCJleHAiOjE1NjA0NTMwODB9.gU5_zfe5db-BEv2V3n5t-sZ6-PAAbCONLwP8Shqo3F8');
        await setAuthenticationData('expiration',3600);
        await setAuthenticationData('userId','5d01f903f9ad9d7a15e8e5b8');


        await t.expect(localStorageGet('token')).eql('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm9Aam95b2Z0ZXN0aW5nLm5sIiwidXNlcklkIjoiNWQwMWY5MDNmOWFkOWQ3YTE1ZThlNWI4IiwiaWF0IjoxNTYwNDQ5NDgwLCJleHAiOjE1NjA0NTMwODB9.gU5_zfe5db-BEv2V3n5t-sZ6-PAAbCONLwP8Shqo3F8');
        await t.expect(localStorageGet('expiration')).eql('3600');
        await t.expect(localStorageGet('userId')).eql('5d01f903f9ad9d7a15e8e5b8');

        await t.navigateTo('/');
    }
}


