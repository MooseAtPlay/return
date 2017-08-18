var tiles = {
  W: { s: [ -1, -1 ], w: false },
  o: { s: [ -6, -2 ], t: 'Nice path!' }
};


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
var room = byId( 'room' );

function createRoom() {
  // create the initial room div layout
  // #room should already exist in HTML
  // 9 div.row elements, each having 14 (unclassed) child div elements
}

function start() {
  console.log( tiles );
  console.log( rooms );
  console.log( room );

}
