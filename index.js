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

let querry_strings = args.q;
let youtube_id = args.i


if(querry_strings != null){  //download by querry strings
    console.log(`Input querry: ${querry_strings}`);
    //for testing
    //let querry_strings = '1hr long light jazz'

    let title;

    
    ytjson.getQueryJson(querry_strings)
    .then(json=>{
        title = manjsontitle.getFirstTitle(json);
        console.log(`The title choosen was: ${title}`);
        return manjson.getFirstUrl(json)
    })
    .then(url => scrape.getPage(url))
    .then(page => down.downloadMp3(page,sanitize(title)))

}







//download by youtube id







