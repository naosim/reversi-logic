import * as board2d from 'board2d';

export class Game {
  /**
   * 
   * Use `Game.init ()` instead of the constructor to start the game.
   * 
   * @param turn
   * @param board
   * @param winner null if no win or loss has been decide
   * @param _eventList history
   */
  constructor(
    readonly turn: Disk, 
    readonly board: board2d.Board<Disk>, 
    readonly winner: Disk | null = null, 
    private readonly _eventList: Event[] = []
  ) {}

  /**
   * Start the game
   */
  static init(): Game {
    var board = board2d.BoardMutable.empty<Disk>(8, 8)
      .put(new board2d.Pos(3 as board2d.X, 3 as board2d.Y), Disk.light)
      .put(new board2d.Pos(4 as board2d.X, 3 as board2d.Y), Disk.dark)
      .put(new board2d.Pos(3 as board2d.X, 4 as board2d.Y), Disk.dark)
      .put(new board2d.Pos(4 as board2d.X, 4 as board2d.Y), Disk.light)
      .toImmutable();
    return new Game(
      Disk.light,
      board
    )
  }

  get score(): Score {
    var lightCount = 0;
    var darkCount = 0;
    this.board.forEach((pos, disk) => {
      if(disk === Disk.light) {
        lightCount++;
      }
      if(disk === Disk.dark) {
        darkCount++;
      }
    })
    return new Score(lightCount, darkCount);
  }

  /**
   * Whether the win or loss has been decided
   */
  get isGameOver(): boolean {
    return this.winner != null;
  }

  getTunableDiskPosList(pos: board2d.PosReadable, disk: Disk): board2d.Pos[] {
    if(this.isPlaced(pos)) {
      return []
    }

    const direction8 = [
      board2d.Direction.up,
      board2d.Direction.down,
      board2d.Direction.right,
      board2d.Direction.left,
      board2d.Direction.upRight,
      board2d.Direction.upLeft,
      board2d.Direction.downRight,
      board2d.Direction.downLeft
    ].map(v => board2d.Pos.createFromDirection(v));

    return direction8.map(d => {
      var currentPos = d.add(pos);
      var result: board2d.Pos[] = [];
      var i = 0;
      while(this.isPlaced(currentPos) && this.board.getValue(currentPos) !== disk) {
        result.push(currentPos);
        currentPos = currentPos.add(d);
        i++;
        if(i > 20) throw new Error("infinite loop");
      }
      return this.board.getValue(currentPos) === disk ? result : []
    }).reduce((memo, list) => memo.concat(list), [])
  }

  getTunableDiskPosListFromXY(x: board2d.X, y: board2d.Y, disk: Disk): board2d.Pos[] {
    return this.getTunableDiskPosList(new board2d.Pos(x, y), disk);
  }

  /**
   * Whether the disk is placed in the passed position
   * @param pos 
   */
  isPlaced(pos: board2d.PosReadable): boolean {
    return this.board.exists(pos);
  }

  /**
   * Whether the disk is placed in the passed position
   * @param x 
   * @param y 
   */
  isPlacedFromXY(x: board2d.X, y: board2d.Y): boolean {
    return this.isPlaced(new board2d.Pos(x, y));
  }

  /**
   * Place a disk  
   * 
   * The result is returned in callback.
   * Conditions that cause an error in callback
   * - The type of disk and the turn do not match
   * - The position where the disk cannot be placed is specified
   * @param pos 
   * @param disk 
   * @param callback 
   */
  placeDisk(pos: board2d.Pos, disk: Disk, callback?: (e: Error | null, game?: Game)=>void) {
    callback = callback || ((e:any | null, game?: Game) => {})
    if(this.turn != disk) {
      callback(new Error('The turn is different'));
      return;
    }

    var list = this.getTunableDiskPosList(pos, disk);
    if(list.length == 0) {
      callback(new Error('Cannot be placed'));
      return;
    }
    var newBoard: board2d.BoardMutable<Disk> = this.board.toMutable();
    newBoard.put(pos, disk);
    list.forEach(p => newBoard.put(p, disk));
    newBoard.toImmutable();
    var newEventList = [...this._eventList, new Event(pos, disk)]

    var nextTurn = this.turn == Disk.light ? Disk.dark : Disk.light;
    var winner = null;
    var preGame = new Game(nextTurn, newBoard.toImmutable(), winner, newEventList);
    if(preGame.hasTurnableDiskPos(nextTurn)) {
      callback(null, preGame);
      return;
    } else if(preGame.hasTurnableDiskPos(this.turn)) {
      callback(null, new Game(this.turn, newBoard.toImmutable(), winner, newEventList));
      return;
    } else { // winner decided
      callback(null, new Game(nextTurn, newBoard.toImmutable(), preGame.score.winner, newEventList));
      return;
    }
  }

  /**
   * Is there a place to put the disk?
   */
  hasTurnableDiskPos(disk: Disk): boolean {
    return this.board.some((pos, _) => this.getTunableDiskPosList(pos, disk).length > 0)
  }

  /**
   * Place a disk with x and y
   * @param x 
   * @param y 
   * @param disk 
   * @param callback 
   */
  placeDiskFromXY(x: board2d.X, y: board2d.Y, disk: Disk, callback?: (e: Error | null, game?: Game)=>void) {
    return this.placeDisk(new board2d.Pos(x, y), disk, callback);
  }

  /**
   * Convert board to string (for debugging)
   * @param board 
   */
  static boardToString(board: board2d.Board<Disk>): string {
    return board.toMutable().boardCore.values.map(row => row.map(v => v || '_').join('')).join('\n')
  }
}

export enum Disk {
  light = 'l',
  dark = 'd'
}

class Event {
  constructor(readonly pos: board2d.Pos, readonly disk: Disk) {

  }
}

class Score {
  constructor(readonly lightCount: number, readonly darkCount: number) {
  }

  getDiskCount(disk: Disk): number {
    return disk === Disk.light ? this.lightCount : this.darkCount;
  }

  get winner(): Disk | null {
    if(this.lightCount == this.darkCount) {
      return null; // draw
    }
    return this.lightCount > this.darkCount ? Disk.light : Disk.dark;
  }
}
