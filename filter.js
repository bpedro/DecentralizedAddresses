time = {
    
    start_mili : null,
    start : function()
    {
        var date1 = new Date(); 
        this.start_mili= date1.getTime();
    },
    end : function(){
        var date2 = new Date(); 
        var milliseconds2 = date2.getTime(); 
        return milliseconds2 - this.start_mili;
    }
}

function findAncestor(el, name)
{
    if (el.nodeName==name) {
        return true;
    }
    else if (el.parentNode) {
      return arguments.callee(el.parentNode, name);
    }
    else return false;
}

function filter_cache()
{
    if(tmp != document.body.innerHTML)
    {
        console.log("new_stuff");
        tmp = document.body.innerHTML;
        filter(); 
    }
}

function filter()
{
        time.start();
        var xPathResult = document.evaluate('.//text()[normalize-space(.)!=""]',
        document.body,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null);
        for (var i=0, l=xPathResult.snapshotLength; i<l; i++) {
            var textNode = xPathResult.snapshotItem(i);
            
            if (textNode.data.match(/([^A-Za-z0-9_]|^)@([A-Za-z0-9_]+)/g) &&
                !findAncestor(textNode,'A')) {
                textNode.parentNode.innerHTML = textNode.parentNode.innerHTML.replace(/([^A-Za-z0-9_]|^)@([A-Za-z0-9_]+)/g, '$1@<a href="http://twitter.com/$2">$2</a>');
            }
        }
        console.log("time : "+time.end());
}

filter();
var tmp = document.body.innerHTML;
setInterval('filter_cache()', 5000);

