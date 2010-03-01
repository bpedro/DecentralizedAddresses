var Filter_Facebook = function()
{
    this.replace();
}
Filter_Facebook.prototype = new Filter();
Filter_Facebook.prototype.replace = function()
    {
        var xPathResult = document.evaluate('.//text()[normalize-space(.)!=""]',
        document.body,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null);
        for (var i=0, l=xPathResult.snapshotLength; i<l; i++) {
            var textNode = xPathResult.snapshotItem(i);
            if (textNode.data.match(/([^A-Za-z0-9_]|^)@([A-Za-z0-9_]+)@facebook\.com/g) &&
               !this.findAncestor(textNode,'A')) {
               textNode.parentNode.innerHTML = textNode.parentNode.innerHTML.replace(/([^A-Za-z0-9_]|^)@([A-Za-z0-9_]+)@\.facebook.com/g, '$1@<a href="http://facebook.com/$2">$2</a>');
            }
        }
    };
