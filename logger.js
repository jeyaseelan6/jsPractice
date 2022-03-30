
    var url = 'http://mylogger.io/log';

    console.log(__filename);
    console.log(__dirname);

    function log(message){
        //send an HTTP request
        console.log(message);
    }
    module.exports = log;





// var url = 'http://mylogger.io/log'
// //url is private
//
// function log(message){
//     // send an HTTP request
//     console.log(message);
// }
//
// module.exports.log = log //log is exported as the log to the outside
// // module.exports.endPoint = url; // url is exported as endPoint to the outside but url should be private
//
// // this implementation details is hidden from outside
//


