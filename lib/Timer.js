var Timer = function()
{
    this.start()
};
Timer.prototype = {
    start : function()
    {
        var date1 = new Date();
        this.start_mili = date1.getTime();
    },
    end : function()
    {
        var date2 = new Date();
        var milliseconds2 = date2.getTime();
        return milliseconds2 - this.start_mili;
    }
}
