cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {

    },

    onClick() {
        mode = 0;
        start = null;
        redSelected = null;
        end = null;
        ansNode.active = false;
        pen.clear();
        for (let i = 0; i < flags.length; i++) {
            selected[i] = false;
            flags[i].getChildByName('red1').active = true;
            flags[i].getChildByName('red2').active = false;
            flags[i].getChildByName('blue1').active = false;
            flags[i].getChildByName('blue2').active = false;
            flags[i].getChildByName('green1').active = false;
            flags[i].getChildByName('green2').active = false;
            flags[i].getComponent(cc.Button).interactable = true;
            shows[i].getComponent(cc.Button).interactable = true;
            shows[i].color = cc.color(255, 255, 255);
            flags[i].getChildByName('red1').getComponent(cc.Button).interactable = true;
            flags[i].getChildByName('red2').getComponent(cc.Button).interactable = true;
            flags[i].getChildByName('green1').getComponent(cc.Button).interactable = true;
            flags[i].getChildByName('green2').getComponent(cc.Button).interactable = true;
            flags[i].getChildByName('blue1').getComponent(cc.Button).interactable = true;
            flags[i].getChildByName('blue2').getComponent(cc.Button).interactable = true;
        }
        startButton.interactable = true;
        getButton.interactable = false;
        pathButton.interactable = false;
        endButton.interactable = false;
    }
});