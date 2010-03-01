function filter_cache()
{
    time1 = new Timer();
    if(tmp != document.body.innerHTML)
    {
        console.log("new_stuff");
        tmp = document.body.innerHTML;
        filter.replace();
    }
    console.log("time total : "+time1.end());
}
var filter = new Filter();
var tmp = document.body.innerHTML;
setInterval('filter_cache()', 5000);
