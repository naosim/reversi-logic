# reversi
Reversi game logic library. UI is not included.

# design concept
- Object is immutable
- The reference method returns the result as a return value
- Update method returns result in callback

# install
## npm
```
npm install reversi-logic
```

## browser
in html
```html
<script src="https://naosim.github.io/reversi-logic/reversi.js"></script>
```

# import
```javascript
import * as reversi from 'reversi-logic';
```

# sample
```javascript
import * as reversi from 'reversi-logic';
var game = reversi.Game.init();
game.placeDisk({x: 4, y: 2}, reversi.Disk.light, (e, nextGame) => {
  if(e) {
    throw e;
  }
  game = nextGame;// update global value
  var values = game.board.values; // as 2d array
  /* values are
    [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,  'l', null, null, null],
      [null, null, null,  'l',  'l', null, null, null],
      [null, null, null,  'd',  'l', null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ]
  */
  
  // you can get each values
  game.board.forEach((pos, disk) => {
    console.log(pos.x, pos.y, disk)
  })
})
```

