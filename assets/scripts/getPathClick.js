cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        window.getButton = this.node.getComponent(cc.Button);
    },

    onClick() {
        pen.clear();
        ansNode.active = true;
        endButton.interactable = false;
        let ansLabel = ansNode.getChildByName('Label').getComponent(cc.Label);
        ansLabel.string = "";
        var arr = new Array();
        arr.push(start.name);
        for (let i = 0; i < selected.length; i++)
            if (selected[i]) arr.push(i);
        arr.push(end.name);
        let n = arr.length;
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++)
                g[i][j] = 0;
        }
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                g[i][j] = G[arr[i]][arr[j]];
        window.ansLen = 0;
        var path = this.work(n);
        window.ansPath = new Array();
        this.getAns(n - 1, (1 << n) - 1, path);
        pen.moveTo(flags[arr[ansPath[0]]].x, flags[arr[ansPath[0]]].y);
        for (let i = 0; i < ansPath.length - 1; i++) {
            ansLabel.string += names[arr[ansPath[i]]] + " -> ";
            pen.lineTo(flags[arr[ansPath[i]]].x, flags[arr[ansPath[i]]].y);
            pen.stroke();
            pen.moveTo(flags[arr[ansPath[i]]].x, flags[arr[ansPath[i]]].y);
        }
        pen.lineTo(flags[arr[ansPath[ansPath.length - 1]]].x, flags[arr[ansPath[ansPath.length - 1]]].y);
        pen.stroke();
        ansLabel.string += names[arr[ansPath[ansPath.length - 1]]];
        ansLabel.string += "\n(约为" + ansLen + "米)";
    },

    work(n) {
        var f = new Array(1 << n);
        for (let i = 0; i < f.length; i++) {
            f[i] = new Array();
            for (let j = 0; j < n; j++)
                f[i][j] = 66666.66;
        }
        var path = new Array(1 << n);
        for (let i = 0; i < f.length; i++) {
            path[i] = new Array();
            for (let j = 0; j < n; j++)
                path[i][j] = 0;
        }
        f[1][0] = 0;
        for (let i = 0; i < (1 << n); i++)
            for (let j = 0; j < n; j++)
                if ((i >> j) & 1)
                    for (let k = 0; k < n; k++)
                        if (((i ^ (1 << j)) >> k) & 1) {
                            if (f[i ^ (1 << j)][k] + g[k][j] < f[i][j]) {
                                path[i][j] = k;
                                f[i][j] = f[i ^ (1 << j)][k] + g[k][j];
                            }
                        }
        ansLen = f[(1 << n) - 1][n - 1] * 100;
        ansLen = parseInt(ansLen);
        return path;
    },

    getAns(x, s, path) {
        if (!x) {
            ansPath.push(x);
            return;
        }
        this.getAns(path[s][x], s - (1 << x), path);
        ansPath.push(x);
    }
});