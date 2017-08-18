function createRoom() {}

function start() {
    console.log(tiles), console.log(rooms), console.log(room);
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
}, rooms = [ "WWWWWWWWWWWWWWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWooooooooooooWWWWWWWWWWWWWWW" ], D = document, byId = D.getElementById.bind(D), room = byId("room");
//# sourceMappingURL=scripts.js.map