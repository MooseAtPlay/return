var tiles = {
  W: { s: [ 1, 1 ], w: false },
  o: { s: [ 6, 2 ], t: 'Nice path!' }
};

var tileWidth = 16;
var tileHeight = 16;

var rowCount = 9;
var colCount = 14;

var velocityInUnitsPerSecond = 35;

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

var D = document;
var W = window;
var M = Math;
var byId = D.getElementById.bind( D );
var byQ = D.querySelectorAll.bind( D );
var crEl = D.createElement.bind( D );
var floor = M.floor.bind( M );

var roomEl = byId( 'room' );
var playerEl = byId( 'player' );
var tileEls = null;

var isLeftDown = false;
var isRightDown = false;
var isUpDown = false;
var isDownDown = false;

var player = {
  pos: [ 0, 0 ],
  hitbox: [ 4, 8, 8, 8 ]
};

var currentTile = '';
var currentRoom = null;
var then = 0; /* used for FPS management */

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
  scaleWidth = W.innerWidth/(14*16);
  scaleHeight = (W.innerHeight)/(9*16);

  console.log( scaleWidth, scaleHeight );

  roomEl.style.transform = 'scale(' + M.min( scaleWidth, scaleHeight ) + ')';
  /*
  if ( W.innerWidth <= W.innerHeight ) {
    roomEl.style[ 'width' ] = W.innerWidth;
  } else {
    scale = (W.innerHeight - 40)/(9*16);
  }
  console.log(scale);
    
  */
}

function loadRoom( r ) {
  console.log( r[0] );
  console.log( roomEl );
  console.log( tileEls  );

  currentRoom = r;

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
  // x, y are in pixels for the top-left of the player's sprite

  player.pos = [ x, y ];
  playerEl.style[ 'left' ] = '' + x + 'px';
  playerEl.style[ 'top' ] = '' + y + 'px';

}

function tileAtPos( x, y ) {
  var tileX = floor( x / tileWidth );
  var tileY = floor( y / tileHeight );
  return currentRoom[ tileY * colCount + tileX ];
}

function onKeyDown( e ) {
  switch ( e.keyCode ) {
    case 37:
      isLeftDown = true;
      break;

    case 38:
      isUpDown = true;
      break;

    case 39:
      isRightDown = true;
      break;

    case 40:
      isDownDown = true;
      break;

  }
}

function onKeyUp( e ) {
  switch ( e.keyCode ) {
    case 37:
      isLeftDown = false;
      break;

    case 38:
      isUpDown = false;
      break;

    case 39:
      isRightDown = false;
      break;

    case 40:
      isDownDown = false;
      break;

  }
}

function render( time ) {
   var timeInSeconds = time * 0.001;
   var deltaTimeInSeconds = timeInSeconds - then;

   then = timeInSeconds;

   var newX = player.pos[ 0 ];
   var newY = player.pos[ 1 ];

   if ( isLeftDown ) {
     newX -= velocityInUnitsPerSecond * deltaTimeInSeconds;
   }
   if ( isRightDown ) {
     newX += velocityInUnitsPerSecond * deltaTimeInSeconds;
   }
   if ( isUpDown ) {
     newY -= velocityInUnitsPerSecond * deltaTimeInSeconds;
   }
   if ( isDownDown ) {
     newY += velocityInUnitsPerSecond * deltaTimeInSeconds;
   }

   if ( newX !== 0 ) {

   }

   movePlayer( newX, newY );

   var newCurTile = tileAtPos( newX, newX );
   if ( newCurTile !== currentTile ) {
     console.log( newCurTile );
   }
   currentTile = newCurTile;


   requestAnimationFrame( render );
}

function start() {
  createRoom();
  scaleRoom();

  loadRoom( rooms[ 0 ] );

  movePlayer( 32, 32 );
  currentTile = tileAtPos( 32, 32 );

  W.addEventListener( 'keydown', onKeyDown );
  W.addEventListener( 'keyup', onKeyUp );

  requestAnimationFrame( render );

}
