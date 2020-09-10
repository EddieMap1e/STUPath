cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        window.startButton = this.node.getComponent(cc.Button);
    },

    onClick() {
        for (let i = 0; i < flags.length; i++) {
            flags[i].getChildByName('red1').active = false;
            flags[i].getChildByName('red2').active = false;
            flags[i].getChildByName('blue1').active = false;
            flags[i].getChildByName('blue2').active = false;
            flags[i].getChildByName('green2').active = false;
            flags[i].getChildByName('green1').active = true;
        }
        mode = 1;
    },
});