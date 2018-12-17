const fs = require('fs');
var http = require('http');


module.exports={
    downloadMp3:(url,name)=>{
        let file = fs.createWriteStream(`./output/${name}.mp3`);

        console.log('downloading...')
        var request = http.get("http"+url.slice(5), function(response) {
          response.pipe(file);
        });
    }
}