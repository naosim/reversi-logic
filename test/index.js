"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board2d = require("board2d");
class Game {
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
    constructor(turn, board, winner = null, _eventList = []) {
        this.turn = turn;
        this.board = board;
        this.winner = winner;
        this._eventList = _eventList;
    }
    /**
     * ゲームを始める
     */
    static init() {
        var board = board2d.BoardMutable.empty(8, 8)
            .put(new board2d.Pos(3, 3), Disk.light)
            .put(new board2d.Pos(4, 3), Disk.dark)
            .put(new board2d.Pos(3, 4), Disk.dark)
            .put(new board2d.Pos(4, 4), Disk.light)
            .toImmutable();
        return new Game(Disk.light, board);
    }
    get score() {
        var lightCount = 0;
        var darkCount = 0;
        this.board.forEach((pos, disk) => {
            if (disk === Disk.light) {
                lightCount++;
            }
            if (disk === Disk.dark) {
                darkCount++;
            }
        });
        return new Score(lightCount, darkCount);
    }
    /**
     * 決着がついたかどうか
     */
    get isGameOver() {
        return this.winner != null;
    }
    getTunableDiskPosList(pos, disk) {
        if (this.isMarked(pos)) {
            return [];
        }
        const otherDisk = this.turn == Disk.light ? Disk.dark : Disk.light;
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
            var result = [];
            var i = 0;
            while (this.isMarked(currentPos) && this.board.getValue(currentPos) !== disk) {
                result.push(currentPos);
                currentPos = currentPos.add(d);
                i++;
                if (i > 20)
                    throw new Error("無限ループ");
            }
            return this.board.getValue(currentPos) === disk ? result : [];
        }).reduce((memo, list) => memo.concat(list), []);
    }
    getTunableDiskPosListFromXY(x, y, disk) {
        return this.getTunableDiskPosList(new board2d.Pos(x, y), disk);
    }
    /**
     * 指定の位置がすでにマークされてるかどうか
     * @param pos
     */
    isMarked(pos) {
        return this.board.exists(pos);
    }
    /**
     * 指定の位置がすでにマークされてるかどうか
     * @param x
     * @param y
     */
    isMarkedFromXY(x, y) {
        return this.isMarked(new board2d.Pos(x, y));
    }
    /**
     * マークする。結果はcallbackで返る
     * @param pos
     * @param mark
     * @param callback
     */
    placeDisk(pos, disk, callback) {
        callback = callback || ((e, game) => { });
        var list = this.getTunableDiskPosList(pos, disk);
        if (list.length == 0) {
            callback(new Error('置けません'));
            return;
        }
        var newBoard = this.board.toMutable();
        newBoard.put(pos, disk);
        list.forEach(p => newBoard.put(p, disk));
        newBoard.toImmutable();
        var newEventList = [...this._eventList, new Event(pos, disk)];
        var nextTurn = this.turn == Disk.light ? Disk.dark : Disk.light;
        var winner = null;
        var preGame = new Game(nextTurn, newBoard.toImmutable(), winner, newEventList);
        if (preGame.hasTurnableDiskPos(nextTurn)) { // 次のターンにひっくり返す場所がある
            callback(null, preGame);
            return;
        }
        else if (preGame.hasTurnableDiskPos(this.turn)) {
            callback(null, new Game(this.turn, newBoard.toImmutable(), winner, newEventList));
            return;
        }
        else { // 勝者決定
            callback(null, new Game(nextTurn, newBoard.toImmutable(), preGame.score.winner, newEventList));
            return;
        }
    }
    /**
     * ディスクを置ける場所があるか？
     */
    hasTurnableDiskPos(disk) {
        return this.board.some((pos, _) => this.getTunableDiskPosList(pos, disk).length > 0);
    }
    /**
     * マークする。結果はcallbackで返る
     * @param x
     * @param y
     * @param mark
     * @param callback
     */
    placeDiskFromXY(x, y, mark, callback) {
        return this.placeDisk(new board2d.Pos(x, y), mark, callback);
    }
    /**
     * 盤を文字列に変換する(デバッグ用)
     * @param board
     */
    static boardToString(board) {
        return board.toMutable().boardCore.values.map(row => row.map(v => v || '_').join('')).join('\n');
    }
}
exports.Game = Game;
/**
 * ディスク
 */
var Disk;
(function (Disk) {
    Disk["light"] = "l";
    Disk["dark"] = "d";
})(Disk = exports.Disk || (exports.Disk = {}));
class Event {
    constructor(pos, mark) {
        this.pos = pos;
        this.mark = mark;
    }
}
class Score {
    constructor(lightCount, darkCount) {
        this.lightCount = lightCount;
        this.darkCount = darkCount;
    }
    getDiscCount(disk) {
        return disk === Disk.light ? this.lightCount : this.darkCount;
    }
    get winner() {
        if (this.lightCount == this.darkCount) {
            return null; // 引き分け
        }
        return this.lightCount > this.darkCount ? Disk.light : Disk.dark;
    }
}
