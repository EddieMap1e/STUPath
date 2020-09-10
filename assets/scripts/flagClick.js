cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        flags[parseInt(this.node.name)] = this.node;
        this.node.getChildByName('red1').scaleX = 1.2;
        this.node.getChildByName('red1').scaleY = 1.2;
        this.node.getChildByName('red2').scaleX = 1.2;
        this.node.getChildByName('red2').scaleY = 1.2;
        this.node.getChildByName('green1').scaleX = 1.2;
        this.node.getChildByName('green1').scaleY = 1.2;
        this.node.getChildByName('green2').scaleX = 1.2;
        this.node.getChildByName('green2').scaleY = 1.2;
        this.node.getChildByName('blue1').scaleX = 1.2;
        this.node.getChildByName('blue1').scaleY = 1.2;
        this.node.getChildByName('blue2').scaleX = 1.2;
        this.node.getChildByName('blue2').scaleY = 1.2;
    },

    flagClick(event) {
        let t = event.target;
        if (mode == 0) this.redFlagClick(t.getChildByName('red1'));
        else if (mode == 1) this.greenFlagClick(t.getChildByName('green1'));
        else if (mode == 2) this.blueFlagClick(t.getChildByName('blue1'));
        else if (mode == 3) this.redFlagClick(t.getChildByName('red1'));
    },

    redFlagClick(event) {
        let t = event.parent || event.target.parent;
        let r1 = t.getChildByName('red1'),
            r2 = t.getChildByName('red2');
        if (r1.active) {
            r1.active = false;
            r2.active = true;
            if (redSelected && redSelected != t) {
                shows[redSelected.name].color = cc.color(255, 255, 255);
                redSelected.getChildByName('red1').active = true;
                redSelected.getChildByName('red2').active = false;
            }
            redSelected = t;
            if (mode == 3) {
                getButton.interactable = true;
                shows[this.node.name].color = cc.color(255, 0, 0);
            }
            end = redSelected;
        } else {
            r1.active = true;
            r2.active = false;
            if (redSelected == t) {
                redSelected = null;
                if (mode == 3) {
                    shows[this.node.name].color = cc.color(255, 255, 255);
                    getButton.interactable = false;
                    end = null;
                }
            }
        }
    },

    greenFlagClick(event) {
        let t = event.parent || event.target.parent;
        let g1 = t.getChildByName('green1'),
            g2 = t.getChildByName('green2');
        if (g1.active) {
            g1.active = false;
            g2.active = true;
            shows[t.name].color = cc.color(0, 255, 0);
            if (start && start != t) {
                start.getChildByName('green1').active = true;
                start.getChildByName('green2').active = false;
                shows[start.name].color = cc.color(255, 255, 255);
            }
            start = t;
            pathButton.interactable = true;
            endButton.interactable = true;
        } else {
            g1.active = true;
            g2.active = false;
            shows[t.name].color = cc.color(255, 255, 255);
            if (start == t) {
                start = null;
                pathButton.interactable = false;
                endButton.interactable = false;
            }
        }
    },

    blueFlagClick(event) {
        let t = event.parent || event.target.parent;
        let b1 = t.getChildByName('blue1'),
            b2 = t.getChildByName('blue2');
        if (b1.active) {
            b1.active = false;
            b2.active = true;
            shows[this.node.name].color = cc.color(0, 0, 255);
            selected[parseInt(this.node.name)] = true;
        } else {
            b1.active = true;
            b2.active = false;
            shows[this.node.name].color = cc.color(255, 255, 255);
            selected[parseInt(this.node.name)] = false;
        }
    },
});