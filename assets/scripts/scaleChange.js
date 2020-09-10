var w = 8888,
    h = 5555;
cc.Class({
    extends: cc.Component,

    properties: {
        scaleLabel: cc.Label,
        mapFrame: cc.Node,
        map: cc.Node
    },

    start() {
        window.status = 5;
        window.myEnlarge = this.enlarge;
        window.myShirink = this.shirink;
        window.scaleLabel = this.scaleLabel;
        window.mapFrame = this.mapFrame;
        window.map = this.map;
        scaleLabel.string = status * 10 + "%";
        mapFrame.width = w * status * 0.1;
        mapFrame.height = h * status * 0.1;
        map.scaleX = status * 0.1;
        map.scaleY = status * 0.1;
    },

    enlarge() {
        if (status < 10) {
            status++;
            scaleLabel.string = status * 10 + "%";
            mapFrame.width = w * status * 0.1;
            mapFrame.height = h * status * 0.1;
            map.scaleX = status * 0.1;
            map.scaleY = status * 0.1;
        }
    },

    shirink() {
        if (status > 2) {
            status--;
            scaleLabel.string = status * 10 + "%";
            mapFrame.width = w * status * 0.1;
            mapFrame.height = h * status * 0.1;
            map.scaleX = status * 0.1;
            map.scaleY = status * 0.1;
        }
    }

});