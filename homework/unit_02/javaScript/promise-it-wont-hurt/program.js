

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        onReject(error);}, 300);
    function onReject(error) {
        return reject("REJECTED!")
    }
});
    
promise
    // .then(function (fulfill) {
    //     return console.log("FULFILLED!");
    // })
    .then(function (error) {
        return console.log(error);
    });
