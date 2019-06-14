const testCafe = require('testcafe');
const fs = require('fs');

const stream = fs.createWriteStream('report.html');

function runTest(tcOptions) {
    testCafe('localhost', 8080, 8081)
        .then(function (tc) {
            let runner = tc.createRunner();
            return runner
                .src(['tests/**/*.test.js'])
                .browsers(['chrome','firefox'])
                .concurrency(4)
                .reporter('html', stream)
                .screenshots('reports/screenshots', true)
                .run(tcOptions)
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then( () =>  {
            stream.end();
            process.exit(0);
        });
}

const tcOptions = {
    debugMode: false,

};

runTest(tcOptions);