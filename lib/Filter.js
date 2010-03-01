var Filter = function() {
    this.replace();
};
Filter.prototype = {
    findAncestor: function(el, name)
    {
        if (el.nodeName==name) {
            return true;
        } else {
            if (el.parentNode) {
                return arguments.callee(el.parentNode, name);
            } else {
                return false;
            }
        }
    },
    replace: function() { }
}
