var Montage = require('montage/montage');
// global.XMLHttpRequest = require('xhr2');

var Worker = require("tiny-worker");

/*
EDIT: Found a solution - by passing a string for "filename" to the executing function from vm. For example:

vm.runInThisContext(codeToRun, "someFilename.js");

this way the debugger "figures out" where exactly the code came from.

*/


//var dataWorker = new Worker(__dirname+"data-worker.js");
var dataWorker = new Worker(__dirname+"data-worker.js",[],{ stdio: 'pipe', execArgv: [] });
//var dataWorker = new Worker(__dirname+"data-worker.js",[],{noDebugRedirection: true, stdio: 'pipe', execArgv: [] });

// var dataWorker = new Worker(__dirname+"data-worker.js", [], {noDebugRedirection: true, execArgv: ["--inspect=1235"]});

/*
var mainService = require("data/main.datareel/main.mjson").montageObject,
DataOperation = require("montage/data/service/data-operation").DataOperation,
DataStream = require("montage/data/service/data-stream").DataStream,
DataQuery = require("montage/data/model/data-query").DataQuery,
Criteria = require("montage/core/criteria").Criteria,
PhrontCollection = require("phront-data/data/main.datareel/model/collection").Collection,
PhrontImage = require("phront-data/data/main.datareel/model/image").Image,
PhrontPerson = require("phront-data/data/main.datareel/model/person").Person,
PhrontService = require("phront-data/data/main.datareel/model/service").Service,
PhrontProductVariant = require("phront-data/data/main.datareel/model/product-variant").ProductVariant,
phrontProductVariantDescriptor = mainService.objectDescriptorForType(PhrontProductVariant),
PhrontOrganization = require("phront-data/data/main.datareel/model/organization").Organization,
PhrontAddress = require("phront-data/data/main.datareel/model/messaging-channel/address").Address,
ShopifyCustomer = require("montage-shopify/data/main.datareel/model/vendor").Vendor,
ShopifyAddress = require("montage-shopify/data/main.datareel/model/messaging-channel/address").Address,
ShopifyCollection = require("montage-shopify/data/main.datareel/model/collection").Collection,
phrontOrganizations = [];
*/

dataWorker.onmessage = function (ev) {
    console.log(ev.data);
    //dataWorker.terminate();
};

dataWorker.postMessage("ping!");


