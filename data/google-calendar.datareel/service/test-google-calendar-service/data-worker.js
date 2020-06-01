var Montage = require('montage/montage'),
    PATH = require("path"),
    DataOperation, DataStream, mainService, DataQuery, Criteria, OperationCoordinator,
    bootstrapPromise;


//From Montage
//Load package
bootstrapPromise = Montage.loadPackage(PATH.join(__dirname, "."), {
    mainPackageLocation: PATH.join(__filename, ".")
})
// //Preload montage to avoid montage-testing/montage to be loaded
.then(function (mr) {
    console.log("mr:",mr);
    var dependenciesPromises = [];

    dependenciesPromises.push(mr.async("montage/data/service/data-operation"));
    dependenciesPromises.push(mr.async("montage/data/service/data-stream"));
    dependenciesPromises.push(mr.async("phront/data/main.datareel/main.mjson"));
    dependenciesPromises.push(mr.async("montage/data/model/data-query"));
    dependenciesPromises.push(mr.async("montage/core/criteria"));
    dependenciesPromises.push(mr.async("phront/data/main.datareel/service/operation-coordinator"));

    return Promise.all(dependenciesPromises);
})
.then(function(resolvedValues) {
    DataOperation = resolvedValues[0].DataOperation;
    DataStream = resolvedValues[1].DataStream;
    mainService = resolvedValues[2].montageObject;
    DataQuery = resolvedValues[3].DataQuery;
    Criteria = resolvedValues[4].Criteria;
    OperationCoordinator = resolvedValues[5].OperationCoordinator;

    return [DataOperation,DataStream,mainService, DataQuery, Criteria, OperationCoordinator];
},function(rejectError) {
    console.error(rejectError);
    return Promise.reject(rejectError);
});

bootstrapPromise.then(function(value) {

onmessage = function (ev) {
        console.log("Data Worker received: ",ev);
        if(ev.data === "ping!") {
            console.log("Received ping!");
            postMessage("pong!");
        }
        postMessage(ev.data);
    
};
},function(rejectError) {
    console.error(rejectError);
});
