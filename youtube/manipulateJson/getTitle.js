module.exports= {
    getFirstTitle:(json)=>{
        let i = 0;
        let title;
        //console.log(json.items)
        let items = json.items
        while (i < items.length) {
            //console.log(data.items[i]);
            if (items[i].id.kind === 'youtube#video') {
                //console.log(data.items[i].id.videoId);
                title = items[i].snippet.title;
                break;
            }
            i++;
        }
        return title
    }
}