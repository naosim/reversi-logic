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

# getting started
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

# sample
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="naosim" data-slug-hash="xxwpBdL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="reversi-sample">
  <span>See the Pen <a href="https://codepen.io/naosim/pen/xxwpBdL">
  reversi-sample</a> by なおしむ (<a href="https://codepen.io/naosim">@naosim</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>