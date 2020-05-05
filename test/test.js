var sut = require('./dist/concat')
var reversi = sut.reversi;
var board2d = sut.board2d;

test('usage', () => {
  var game = reversi.Game.init();
  var firstTurn = game.turn;
  game.placeDisk({x: 4, y: 2}, reversi.Disk.light, (e, nextGame) => {
    if(e) {
      throw e;
    }
    game = nextGame;
    var expected = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,  'l', null, null, null],
      [null, null, null,  'l',  'l', null, null, null],
      [null, null, null,  'd',  'l', null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ]
    expect(game.board.values.length).toBe(8)
    game.board.forEach((pos, disk) => {
      expect(disk).toBe(expected[pos.y][pos.x])
    })
  })
})

describe('error of placeDisk()', () => {
  var game;
  beforeEach(() => {
    game = reversi.Game.init();
  })
  test('When placed dark on the light turn', () => {
    game.placeDisk({x: 3, y: 2}, reversi.Disk.dark, (e, nextGame) => {
      expect(e).not.toBeNull();
    })
  })
  test('When placed outside the board', () => {
    game.placeDisk({x: -1, y: -1}, reversi.Disk.light, (e, nextGame) => {
      expect(e).toEqual(new Error('Cannot be placed'));
      expect(nextGame).toBeUndefined();
    })
  })
  test('When placed in a place where stones are already placed', () => {
    game.placeDiskFromXY(3, 3, reversi.Disk.light, (e, nextGame) => {
      expect(e).toEqual(new Error('Cannot be placed'));
      expect(nextGame).toBeUndefined();
    })
  })
  test('When placed in a place where there is nothing to turn over', () => {
    game.placeDiskFromXY(3, 2, reversi.Disk.light, (e, nextGame) => {
      expect(e).toEqual(new Error('Cannot be placed'));
      expect(nextGame).toBeUndefined();
    })
  })
})

test('reversi', () => {
  var game = reversi.Game.init();
  expect(game.hasTurnableDiskPos(reversi.Disk.light)).toBe(true);
  game.placeDiskFromXY(4, 2, reversi.Disk.light, (e, gameAct) => {
    expect(e).toBe(null);
    expect(gameAct).not.toBe(null);
    expect(gameAct.board).not.toBe(null);
    expect(reversi.Game.boardToString(gameAct.board)).toBe(trimEachLine(`
      ________
      ________
      ____l___
      ___ll___
      ___dl___
      ________
      ________
      ________
    `));
    // immutable check
    expect(reversi.Game.boardToString(game.board)).toBe(trimEachLine(`
    ________
    ________
    ________
    ___ld___
    ___dl___
    ________
    ________
    ________
  `));
  })
});

test('boardToString', () => {
  var game = reversi.Game.init();
  expect(reversi.Game.boardToString(game.board)).toBe(trimEachLine(`
    ________
    ________
    ________
    ___ld___
    ___dl___
    ________
    ________
    ________
  `));
})


test('boundary', () => {
  var board = stringToBoard(trimEachLine(`
  _ddddddl
  d______d
  d______l
  d______l
  d______l
  d______l
  d______l
  ldlllll_
  `));
  var game = new reversi.Game(reversi.Disk.light, board);
  game.placeDiskFromXY(0, 0, reversi.Disk.light, (e, gameAct) => {
    gameAct.placeDiskFromXY(7, 7, reversi.Disk.dark, (e, gameAct2) => {
      expect(reversi.Game.boardToString(gameAct2.board)).toBe(trimEachLine(`
        llllllll
        l______d
        l______d
        l______d
        l______d
        l______d
        l______d
        lddddddd
      `));
    })
    
  })
})

function trimEachLine(text) {
  return text.split('\n').map(v => v.trim()).join('\n').trim();
}

function stringToBoard(text) {
  var board = board2d.BoardMutable.empty(8, 8);
  text.split('\n').forEach((row, y) => {
    row.split('').forEach((v, x) => {
      var disk = null;
      if(v == 'l') {
        disk = reversi.Disk.light;
      }
      if(v == 'd') {
        disk = reversi.Disk.dark;
      }
      board.put(new board2d.Pos(x, y), disk);
    })
  })
  return board.toImmutable();
}