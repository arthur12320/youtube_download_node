module.exports= {
    getFirstUrl:(json)=>{
        let i = 0;
        let id;
        //console.log(json.items)
        let items = json.items
        while (i < items.length) {
            //console.log(data.items[i]);
            if (items[i].id.kind === 'youtube#video') {
                console.log(items[i].id.videoId);
                id = items[i].id.videoId;
                break;
            }
            i++;
        }
        return json.items[i].id.videoId;
    }
}