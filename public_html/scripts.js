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
    console.log(r[0]), console.log(roomEl), console.log(tileEls), currentRoom = r;
    for (var t = 0; t < tileEls.length; t++) tileKey = r[t], tile = tiles[tileKey], 
    tileEls[t].style.backgroundPositionX = "-" + 16 * tile.s[0] + "px", tileEls[t].style.backgroundPositionY = "-" + 16 * tile.s[1] + "px";
}

function movePlayer(x, y) {
    player.pos = [ x, y ], playerEl.style.left = x + "px", playerEl.style.top = y + "px";
}

function tileAtPos(x, y) {
    var tileX = floor(x / tileWidth), tileY = floor(y / tileHeight);
    return currentRoom[tileY * colCount + tileX];
}

function onKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        isLeftDown = !0;
        break;

      case 38:
        isUpDown = !0;
        break;

      case 39:
        isRightDown = !0;
        break;

      case 40:
        isDownDown = !0;
    }
}

function onKeyUp(e) {
    switch (e.keyCode) {
      case 37:
        isLeftDown = !1;
        break;

      case 38:
        isUpDown = !1;
        break;

      case 39:
        isRightDown = !1;
        break;

      case 40:
        isDownDown = !1;
    }
}

function render(time) {
    var timeInSeconds = .001 * time, deltaTimeInSeconds = timeInSeconds - then;
    then = timeInSeconds;
    var newX = player.pos[0], newY = player.pos[1];
    isLeftDown && (newX -= velocityInUnitsPerSecond * deltaTimeInSeconds), isRightDown && (newX += velocityInUnitsPerSecond * deltaTimeInSeconds), 
    isUpDown && (newY -= velocityInUnitsPerSecond * deltaTimeInSeconds), isDownDown && (newY += velocityInUnitsPerSecond * deltaTimeInSeconds), 
    movePlayer(newX, newY);
    var newCurTile = tileAtPos(newX, newX);
    newCurTile !== currentTile && console.log(newCurTile), currentTile = newCurTile, 
    requestAnimationFrame(render);
}

function start() {
    createRoom(), scaleRoom(), loadRoom(rooms[0]), movePlayer(32, 32), currentTile = tileAtPos(32, 32), 
    W.addEventListener("keydown", onKeyDown), W.addEventListener("keyup", onKeyUp), 
    requestAnimationFrame(render);
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
}, tileWidth = 16, tileHeight = 16, rowCount = 9, colCount = 14, velocityInUnitsPerSecond = 35, rooms = [ "WWWWWWWWWWWWWWWooooooooooooWWoooWooooWoooWWooooooooooooWWooWooooooWooWWoooWWWWWWoooWWooooooooooooWWooooooooooooWWWWWWWWWWWWWWW" ], D = document, W = window, M = Math, byId = D.getElementById.bind(D), byQ = D.querySelectorAll.bind(D), crEl = D.createElement.bind(D), floor = M.floor.bind(M), roomEl = byId("room"), playerEl = byId("player"), tileEls = null, isLeftDown = !1, isRightDown = !1, isUpDown = !1, isDownDown = !1, player = {
    pos: [ 0, 0 ],
    hitbox: [ 4, 8, 8, 8 ]
}, currentTile = "", currentRoom = null, then = 0;
//# sourceMappingURL=scripts.js.map