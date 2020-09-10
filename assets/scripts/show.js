cc.Class({
    extends: cc.Component,

    properties: {
        flagButton: cc.Button,
    },

    start() {
        shows[parseInt(this.node.name)] = this.node;
    },

    onClick() {
        var tmp = new Array();
        tmp['target'] = flags[this.node.name];
        this.flagButton.clickEvents[0].emit([tmp]);
    }
});