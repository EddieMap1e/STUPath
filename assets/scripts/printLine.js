cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        window.pen = this.getComponent(cc.Graphics);
        pen.clear();
    },
});