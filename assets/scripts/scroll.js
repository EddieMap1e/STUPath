cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.node.on('mousewheel', (event) => {
            if (event._scrollY > 0) myEnlarge();
            else if (event._scrollY < 0) myShirink();
        })
    },
});