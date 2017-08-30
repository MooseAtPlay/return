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
    tileEls = byQ(".row div");
}

function scaleRoom() {
    var scale = 1;
    W.innerWidth <= W.innerHeight ? (roomEl.style.width = W.innerWidth, scale = W.innerWidth / 224) : (scale = W.innerHeight / 144, 
    console.log(scale)), roomEl.style.transform = "scale(" + scale + ")";
}

function loadRoom(r) {
    console.log(r[0]), console.log(roomEl), console.log(tileEls);
    for (var t = 0; t < tileEls.length; t++) tileKey = r[t], tile = tiles[tileKey], 
    tileEls[t].style.backgroundPositionX = "-" + 16 * tile.s[0] + "px", tileEls[t].style.backgroundPositionY = "-" + 16 * tile.s[1] + "px";
}

function movePlayer(x, y) {
    player.pos = [ x, y ], playerEl.style.left = x + "px", playerEl.style.top = y + "px";
}

function checkMove(x, y) {}

function onKeyDown(e) {
    switch (console.log(e.keyCode), e.keyCode) {
      case 37:
      case 39:
        movePlayer(player.pos[0] + (e.keyCode - 38), player.pos[1]);
        break;

      case 38:
      case 40:
        movePlayer(player.pos[0], player.pos[1] + (e.keyCode - 39));
    }
}

function start() {
    createRoom(), scaleRoom(), loadRoom(rooms[0]), movePlayer(32, 32), W.addEventListener("keydown", onKeyDown);
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
}, rowCount = 9, colCount = 14, playerWidth = 16, playerHeight = 8, rooms = [ "WWWWWWWWWWWWWWWooooooooooooWWoooWooooWoooWWooooooooooooWWooWooooooWooWWoooWWWWWWoooWWooooooooooooWWooooooooooooWWWWWWWWWWWWWWW" ], player = {
    pos: [ 0, 0 ],
    hitbox: [ 4, 8, 8, 8 ]
}, D = document, W = window, byId = D.getElementById.bind(D), byQ = D.querySelectorAll.bind(D), crEl = D.createElement.bind(D), roomEl = byId("room"), playerEl = byId("player"), tileEls = null;
//# sourceMappingURL=scripts.js.map