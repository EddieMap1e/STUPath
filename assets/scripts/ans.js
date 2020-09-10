cc.Class({
    extends: cc.Component,

    properties: {
    },

    start() {
        window.ansNode = this.node;
        this.node.active = false;
    },
});