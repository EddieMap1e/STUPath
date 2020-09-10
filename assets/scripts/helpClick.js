cc.Class({
    extends: cc.Component,

    properties: {
        board: cc.Node,
    },

    start() {

    },

    onClick() {
        this.board.active = !this.board.active;
    },

    onCancel() {
        this.board.active = false;
    }
});