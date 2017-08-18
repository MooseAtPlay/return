function apCh(p, c) {
    p.appendChild(c);
}

function createRoom() {
    for (var row = 0; row < rowCount; row++) {
        var rowEl = crEl("div");
        rowEl.className = "row";
        for (var col = 0; col < colCount; col++) apCh(rowEl, crEl("div"));
        apCh(room, rowEl);
    }
}

function start() {
    console.log(tiles), console.log(rooms), console.log(room), createRoom();
}

var tiles = {
    W: {
        s: [ -1, -1 ],
        w: !1
    },
    o: {
        s: [ -6, -2 ],
        t: "Nice path!"
    }
}, rowCount = 9, colCount = 14, rooms = [ "WWWWWWWWWWWWWWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWWWWWWWWWWWWWW" ], D = document, byId = D.getElementById.bind(D), crEl = D.createElement.bind(D), room = byId("room");
//# sourceMappingURL=scripts.js.map