let fetch = require('node-fetch');

module.exports = {
    getQueryJson: async (query)=>{                  //get the complete json response from the youtube api with the title choosen
        let encodedQuery = encodeURIComponent(query);
        let youtubeKey = "AIzaSyAWd83Jm-4NyVgEWysguepLDlRm2UfDfhw";   //!get this out of here!
        let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + youtubeKey + '&q=' + encodedQuery;
        

        await fetch(url)
                .then(res => {json = res.json()})
                
        
       return json;
        
    }   
}