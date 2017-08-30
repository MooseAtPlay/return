var tiles = {
  W: { s: [ 1, 1 ], w: false },
  o: { s: [ 6, 2 ], t: 'Nice path!' }
};

var rowCount = 9;
var colCount = 14;
var playerWidth = 16;
var playerHeight = 8;

var rooms = [
  // 0 - What now?
  'WWWWWWWWWWWWWW' + 
  'WooooooooooooW' + 
  'WoooWooooWoooW' + 
  'WooooooooooooW' + 
  'WooWooooooWooW' + 
  'WoooWWWWWWoooW' + 
  'WooooooooooooW' + 
  'WooooooooooooW' + 
  'WWWWWWWWWWWWWW' 
];

var player = {
  pos: [ 0, 0 ]
};

var D = document;
var W = window;
var byId = D.getElementById.bind( D );
var byQ = D.querySelectorAll.bind( D );
var crEl = D.createElement.bind( D );

var roomEl = byId( 'room' );
var playerEl = byId( 'player' );
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

function scaleRoom( ) {
  var scale = 1;
  if ( W.innerWidth <= W.innerHeight ) {
    roomEl.style[ 'width' ] = W.innerWidth;
    scale = W.innerWidth/(14*16);
  } else {
    scale = W.innerHeight/(9*16);
    console.log(scale);
  }
    
  roomEl.style.transform = 'scale(' + scale + ')';
}

function loadRoom( r ) {
  console.log( r[0] );
  console.log( roomEl );
  console.log( tileEls  );


  for ( var t = 0; t < tileEls.length; t++ ) {
    tileKey = r[ t ];
    tile = tiles[ tileKey ];
    tileEls[t].style[ 'backgroundPositionX' ] = '-' + ( tile.s[ 0 ] * 16 ) + 'px';
    tileEls[t].style[ 'backgroundPositionY' ] = '-' + ( tile.s[ 1 ] * 16 ) + 'px';
  }
}

function movePlayer( x, y ) {
  // actually move the player
  // update internal position, update element's CSS
  // x, y are in pixels for the origin (hotbox) of the player
  // inside the player's tile at [ 8, 8 ]

  player.pos = [ x, y ];
  playerEl.style[ 'left' ] = '' + (x - 8) + 'px';
  playerEl.style[ 'top' ] = '' + (y - 8) + 'px';

}

function checkMove( x, y ) {
}

function onKeyDown( e ) {
  console.log( e.keyCode );
  switch ( e.keyCode ) {
    case 37:
    case 39:
      movePlayer( player.pos[ 0 ] + (e.keyCode - 38), player.pos[ 1 ] );
      break;

    case 38:
    case 40:
      movePlayer( player.pos[ 0 ], player.pos[ 1 ] + (e.keyCode - 39) );
      break;

  }
}

function start() {
  createRoom();
  scaleRoom();

  loadRoom( rooms[ 0 ] );

  movePlayer( 40, 40 );

  W.addEventListener( 'keydown', onKeyDown );
}
