cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        window.pathButton = this.node.getComponent(cc.Button);
    },

    onClick() {
        startButton.interactable = false;
        for (let i = 0; i < flags.length; i++) {
            if (flags[i] == start) {
                flags[i].getComponent(cc.Button).interactable = false;
                shows[i].getComponent(cc.Button).interactable = false;
                flags[i].getChildByName('red1').getComponent(cc.Button).interactable = false;
                flags[i].getChildByName('red2').getComponent(cc.Button).interactable = false;
                flags[i].getChildByName('green1').getComponent(cc.Button).interactable = false;
                flags[i].getChildByName('green2').getComponent(cc.Button).interactable = false;
                flags[i].getChildByName('blue1').getComponent(cc.Button).interactable = false;
                flags[i].getChildByName('blue2').getComponent(cc.Button).interactable = false;
                continue;
            }
            flags[i].getChildByName('red1').active = false;
            flags[i].getChildByName('red2').active = false;
            flags[i].getChildByName('blue1').active = true;
            flags[i].getChildByName('blue2').active = false;
            flags[i].getChildByName('green1').active = false;
            flags[i].getChildByName('green2').active = false;
        }
        mode = 2;
    },
});