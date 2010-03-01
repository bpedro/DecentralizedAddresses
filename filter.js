function filter_cache()
{
    time1 = new Timer();
    if(tmp != document.body.innerHTML)
    {
        console.log("new_stuff");
        tmp = document.body.innerHTML;
        for (var i in filter) {
            filter[i].replace();
        }
    }
    console.log("time total : "+time1.end());
}
var filter = [new Filter_Facebook(), new Filter_Twitter()];
var tmp = document.body.innerHTML;
setInterval('filter_cache()', 5000);
