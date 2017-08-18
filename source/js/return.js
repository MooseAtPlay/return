var tiles = {
  W: { s: [ -1, -1 ], w: false },
  o: { s: [ -6, -2 ], t: 'Nice path!' }
};

var rowCount = 9;
var colCount = 14;

var rooms = [
  // 0 - What now?
  'WWWWWWWWWWWWWW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WWWWWWWWWWWWWW' 
];

var D = document;
var byId = D.getElementById.bind( D );
var crEl = D.createElement.bind( D );

var room = byId( 'room' );

function apCh( p, c ) {
  // like Element.appendChild but can be uglified
  p.appendChild( c );
}

function createRoom() {
  // create the initial room div layout
  // #room should already exist in HTML
  // 9 div.row elements, each having 14 (unclassed) child div elements

  for ( var row = 0; row < rowCount; row++ ) {
    var rowEl = crEl( 'div' );
    rowEl.className = 'row';
    for ( var col = 0; col < colCount; col++ ) {
      apCh( rowEl, crEl( 'div' ) );
    }
    apCh( room, rowEl );
  }
}

function start() {
  console.log( tiles );
  console.log( rooms );
  console.log( room );

  createRoom();

}
