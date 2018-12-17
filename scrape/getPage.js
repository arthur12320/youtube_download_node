let request = require('request-promise');
let cheerio = require('cheerio');
let fetch = require('node-fetch');

module.exports = {
    getPage: async (url)=>{
        let page
        url = "https://www.easy-youtube-mp3.com/download.php?v=" + url;
        console.log(url);
        await request(url,(err,res,body)=>{
            if(err) console.log('erro'+err);

            let $ = cheerio.load(body);

             page = $('a')[2].attribs.href;
            console.log(page)
        })

        return page;
    }

}