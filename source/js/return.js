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
var byQ = D.querySelectorAll.bind( D );
var crEl = D.createElement.bind( D );

var roomEl = byId( 'room' );
var tileEls = null;


function apCh( p, c ) {
  // like Element.appendChild but can be uglified
  p.appendChild( c );
}

function createRoom( ) {
  // create the initial room div layout
  // #room should already exist in HTML
  // 9 div.row elements, each having 14 (unclassed) child div elements
  // 126 tile elements total
  // the array of tile elements is saved as tileEls

  for ( var row = 0; row < rowCount; row++ ) {
    var rowEl = crEl( 'div' );
    rowEl.className = 'row';
    for ( var col = 0; col < colCount; col++ ) {
      apCh( rowEl, crEl( 'div' ) );
    }
    apCh( roomEl, rowEl );
  }
  tileEls = byQ( '.row div' );
}

function loadRoom( r ) {
  console.log( r[0] );
  console.log( roomEl );
  console.log( tileEls  );
}

function start() {
  createRoom();

  loadRoom( rooms[ 0 ] );

}
