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

# main classes
## Game
### Constructors
- **constructor** (turn: Disk, board: Board, winner: Disk | null, _eventList: Event[]): Game   
  Use `Game.init ()` instead of the constructor to start the game.
### Properties
- board: Board
- turn: Disk
- winner: Disk | null  
  null if no win or loss has been decide
- isGameOver: boolean  
  Whether the win or loss has been decided
- score: Score
### Methods
- **getTunableDiskPosList** (pos: PosReadable, disk: Disk): Pos[]
- **getTunableDiskPosListFromXY** (x: board2d.X, y: board2d.Y, disk: Disk): Pos[]
- **hasTurnableDiskPos** (disk: Disk): boolean   
  Is there a place to put the disk?
- **isPlaced** (pos: PosReadable): boolean   
  Whether the disk is placed in the passed position
- **isPlacedFromXY** (x: board2d.X, y: board2d.Y): boolean   
  Whether the disk is placed in the passed position
- **placeDisk** (pos: Pos, disk: Disk, callback: (e: Error | null, game: Game) => void): void   
  Place a disk
  
  The result is returned in callback.
  Conditions that cause an error in callback
  - The type of disk and the turn do not match
  - The position where the disk cannot be placed is specified
- **placeDiskFromXY** (x: board2d.X, y: board2d.Y, disk: Disk, callback: (e: Error | null, game: Game) => void): void   
  Place a disk with x and y
- **boardToString** (board: Board): string [static]  
  Convert board to string (for debugging)
- **init** (): Game [static]  
  Start the game

## Board
### Constructors
- **constructor** (boardCore: BoardCore, skipCopy: SkipCopy): Board
### Properties
- values: undefined  
  Two-dimensional array as raw data on the board
- xSize: number
- ySize: number
### Methods
- **copy** (): Board
- **exists** (pos: PosReadable): boolean   
  whether there is a piece at the specified position
- **find** (check: (pos: Pos, value: T | null) => boolean): ValueAndPos | null
- **findAll** (check: (pos: Pos, value: T | null) => boolean): ValueAndPos[]
- **forEach** (callback: (pos: Pos, value: T | null) => void): void   
  executes a provided function once for each positions on the board.
- **getValue** (pos: PosReadable): T | null | undefined   
  Get the piece at the specified position
- **getValueWithDirection** (pos: PosReadable, direction: Direction): ValueAndPos | undefined   
  Get a piece that is one step ahead in the direction from position.
- **getValueWithXY** (x: X, y: Y): T | null | undefined
- **indexToPos** (index: number): Pos
- **posToIndex** (pos: PosReadable): number
- **put** (pos: PosReadable, value: T | null): Board   
  Put pieces on the board (immutable)
- **putWithXY** (x: X, y: Y, value: T | null): Board
- **some** (check: (pos: Pos, value: T | null) => boolean): boolean   
  Tests whether at least one piece in the board passes the test implemented by the provided check function. It returns a Boolean value.
- **toMutable** (): BoardMutable
- **empty** (xSize: number, ySize: number): Board [static]