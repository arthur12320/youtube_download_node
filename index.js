let http = require('request');
let fs = require("fs");
let yargs = require('yargs');
var sanitize = require("sanitize-filename");


let ytjson = require('./youtube/request/jsonReturn');
let manjson = require('./youtube/manipulateJson/getUrl')
let manjsontitle = require('./youtube/manipulateJson/getTitle')
let scrape = require('./scrape/getPage');
let down = require('./download/download')

const args = yargs.argv;

let vin = args.v;
console.log(vin);
let arg = vin.replace(new RegExp('_', 'g')," ");
//let arg = '1hr long light jazz'
console.log(arg);
let title;



ytjson.getQueryJson(arg)
    .then(json=>{
        title = manjsontitle.getFirstTitle(json);
        console.log(title);
        return manjson.getFirstUrl(json)
    })
    .then(url => scrape.getPage(url))
    .then(page => down.downloadMp3(page,sanitize(title)))
    









