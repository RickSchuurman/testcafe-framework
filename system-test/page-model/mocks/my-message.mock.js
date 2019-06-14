import {RequestMock} from 'testcafe';

export const myMessages = RequestMock()
    .onRequestTo({url: 'http://34.255.161.140:3000/api/posts/?pagesize=2&page=1', method: 'GET'})
    .respond((req, res) => { // a custom response
        res.headers["content-type"] = "application/json;charset=UTF-8";
        res.headers["Access-Control-Allow-Credentials"] = 'true';
        res.headers["Access-Control-Allow-Origin"] = "*";
        res.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS";
        res.headers["Access-Control-Allow-Headers"] = "X-Requested-With";
        res.headers["Access-Control-Allow-HeaderX-Frame-Options"] = "SAMEORIGIN";
        res.statusCode = 200;
        res.setBody(
            {
                "message": "Posts fetched succesfully",
                "posts": [
                    {
                        "_id": "5d021aa7f9ad9d7a15e8e5b9",
                        "title": "Aap",
                        "content": "Test content",
                        "creator": "5d01f903f9ad9d7a15e8e5b8",
                        "__v": 0
                    },
                    {
                        "_id": "5d021b58f9ad9d7a15e8e5ba",
                        "title": "Noot",
                        "content": "Test content",
                        "creator": "5d01f903f9ad9d7a15e8e5b8",
                        "__v": 0
                    }
                ],
                "maxPosts": 2
            }
        );
        console.log(res);
    });



