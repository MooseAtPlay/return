function apCh(p, c) {
    p.appendChild(c);
}

function createRoom() {
    for (var row = 0; row < rowCount; row++) {
        var rowEl = crEl("div");
        rowEl.className = "row";
        for (var col = 0; col < colCount; col++) apCh(rowEl, crEl("div"));
        apCh(roomEl, rowEl);
    }
    tileEls = byQ(".row div"), roomEl.width = window.innerWidth, roomEl.style.transform = "scale(" + roomEl.width / 224 + ")";
}

function loadRoom(r) {
    console.log(r[0]), console.log(roomEl), console.log(tileEls);
    for (var t = 0; t < tileEls.length; t++) tileKey = r[t], tile = tiles[tileKey], 
    tileEls[t].style.backgroundPositionX = "-" + 16 * tile.s[0] + "px", tileEls[t].style.backgroundPositionY = "-" + 16 * tile.s[1] + "px";
}

function start() {
    createRoom(), loadRoom(rooms[0]);
}

var tiles = {
    W: {
        s: [ 1, 1 ],
        w: !1
    },
    o: {
        s: [ 6, 2 ],
        t: "Nice path!"
    }
}, rowCount = 9, colCount = 14, rooms = [ "WWWWWWWWWWWWWWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWWWWWWWWWWWWWW" ], D = document, byId = D.getElementById.bind(D), byQ = D.querySelectorAll.bind(D), crEl = D.createElement.bind(D), roomEl = byId("room"), tileEls = null;
//# sourceMappingURL=scripts.js.map