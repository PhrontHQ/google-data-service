var Montage = require('montage/montage');
var PATH = require("path");
global.XMLHttpRequest = require('xhr2');

var exitCode = 0;

// //From Montage
// Load package
Montage.loadPackage(PATH.join(__dirname, "."), {
    mainPackageLocation: PATH.join(__filename, ".")
})
// Preload montage to avoid montage-testing/montage to be loaded
.then(function (mr) {
    // // Execute
    // return Promise.all([mr.async("phront/data/main.datareel/main.mjson"),
    //  mr.async('test-google-clendar-service')]);
     return mr.async('test-google-clendar-service');
})
// .then(function (values) {
//     console.log('Done:',values);
// }, function (err) {
//     console.error('Fail', err, err.stack);
//     exitCode = 1;
// })

/*
.then(function () {
    console.log('Done');
}, function (err) {
    console.error('Fail', err, err.stack);
    exitCode = 1;
}).then(function () {
    process.exit(exitCode);
})
*/