import * as board2d from 'board2d';
// export * from 'board2d';

export class Game {
  /**
   * コンストラクタ
   * 
   * ゲームを始める際は`Game.init()`を使ってください。
   * 
   * @param turn 出番
   * @param board 盤
   * @param winner 勝者 決まってない場合はnull
   * @param _eventList 履歴
   */
  constructor(
    readonly turn: Disk, 
    readonly board: board2d.Board<Disk>, 
    readonly winner: Disk | null = null, 
    private readonly _eventList: Event[] = []
  ) {}

  /**
   * ゲームを始める
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
   * 決着がついたかどうか
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
        if(i > 20) throw new Error("無限ループ");
      }
      return this.board.getValue(currentPos) === disk ? result : []
    }).reduce((memo, list) => memo.concat(list), [])
  }

  getTunableDiskPosListFromXY(x: board2d.X, y: board2d.Y, disk: Disk): board2d.Pos[] {
    return this.getTunableDiskPosList(new board2d.Pos(x, y), disk);
  }

  /**
   * 指定の位置にすでに石があるか
   * @param pos 
   */
  isPlaced(pos: board2d.PosReadable): boolean {
    return this.board.exists(pos);
  }

  /**
   * 指定の位置にすでに石があるか
   * @param x 
   * @param y 
   */
  isPlacedFromXY(x: board2d.X, y: board2d.Y): boolean {
    return this.isPlaced(new board2d.Pos(x, y));
  }

  /**
   * 石を置く。結果はcallbackで返る
   * 
   * コールバックでエラーになる条件
   * - 石の種類と出番が合っていない
   * - 石を置けない位置を指定している
   * @param pos 
   * @param disk 
   * @param callback 
   */
  placeDisk(pos: board2d.Pos, disk: Disk, callback?: (e: Error | null, game?: Game)=>void) {
    callback = callback || ((e:any | null, game?: Game) => {})
    if(this.turn != disk) {
      callback(new Error('順番が違います'));
      return;
    }

    var list = this.getTunableDiskPosList(pos, disk);
    if(list.length == 0) {
      callback(new Error('置けません'));
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
    if(preGame.hasTurnableDiskPos(nextTurn)) {// 次のターンにひっくり返す場所がある
      callback(null, preGame);
      return;
    } else if(preGame.hasTurnableDiskPos(this.turn)) {
      callback(null, new Game(this.turn, newBoard.toImmutable(), winner, newEventList));
      return;
    } else { // 勝者決定
      callback(null, new Game(nextTurn, newBoard.toImmutable(), preGame.score.winner, newEventList));
      return;
    }
  }

  /**
   * ディスクを置ける場所があるか？
   */
  hasTurnableDiskPos(disk: Disk): boolean {
    return this.board.some((pos, _) => this.getTunableDiskPosList(pos, disk).length > 0)
  }

  /**
   * 石を置く。結果はcallbackで返る
   * @param x 
   * @param y 
   * @param disk 
   * @param callback 
   */
  placeDiskFromXY(x: board2d.X, y: board2d.Y, disk: Disk, callback?: (e: Error | null, game?: Game)=>void) {
    return this.placeDisk(new board2d.Pos(x, y), disk, callback);
  }

  /**
   * 盤を文字列に変換する(デバッグ用)
   * @param board 
   */
  static boardToString(board: board2d.Board<Disk>): string {
    return board.toMutable().boardCore.values.map(row => row.map(v => v || '_').join('')).join('\n')
  }
}

/**
 * ディスク
 */
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

  getDiscCount(disk: Disk): number {
    return disk === Disk.light ? this.lightCount : this.darkCount;
  }

  get winner(): Disk | null {
    if(this.lightCount == this.darkCount) {
      return null; // 引き分け
    }
    return this.lightCount > this.darkCount ? Disk.light : Disk.dark;
  }
}
