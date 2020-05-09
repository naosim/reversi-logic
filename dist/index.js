import * as board2d from 'board2d';
export { Board, BoardMutable, Pos, Direction } from 'board2d';
/**
 * Reversi game class
 *
 * entry point
 */
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
    constructor(turn, board, winner = null, _eventList = []) {
        this.turn = turn;
        this.board = board;
        this.winner = winner;
        this._eventList = _eventList;
    }
    /**
     * Start the game
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
     * Whether the win or loss has been decided
     */
    get isGameOver() {
        return this.winner != null;
    }
    getTunableDiskPosList(pos, disk) {
        if (this.isPlaced(pos)) {
            return [];
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
            var result = [];
            var i = 0;
            while (this.isPlaced(currentPos) && this.board.getValue(currentPos) !== disk) {
                result.push(currentPos);
                currentPos = currentPos.add(d);
                i++;
                if (i > 20)
                    throw new Error("infinite loop");
            }
            return this.board.getValue(currentPos) === disk ? result : [];
        }).reduce((memo, list) => memo.concat(list), []);
    }
    getTunableDiskPosListFromXY(x, y, disk) {
        return this.getTunableDiskPosList(new board2d.Pos(x, y), disk);
    }
    /**
     * Whether the disk is placed in the passed position
     * @param pos
     */
    isPlaced(pos) {
        return this.board.exists(pos);
    }
    /**
     * Whether the disk is placed in the passed position
     * @param x
     * @param y
     */
    isPlacedFromXY(x, y) {
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
    placeDisk(pos, disk, callback) {
        if (this.turn != disk) {
            callback(new Error('The turn is different'));
            return;
        }
        var list = this.getTunableDiskPosList(pos, disk);
        if (list.length == 0) {
            callback(new Error('Cannot be placed'));
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
        if (preGame.hasTurnableDiskPos(nextTurn)) {
            callback(null, preGame);
            return;
        }
        else if (preGame.hasTurnableDiskPos(this.turn)) {
            callback(null, new Game(this.turn, newBoard.toImmutable(), winner, newEventList));
            return;
        }
        else { // winner decided
            callback(null, new Game(nextTurn, newBoard.toImmutable(), preGame.score.winner, newEventList));
            return;
        }
    }
    /**
     * Is there a place to put the disk?
     */
    hasTurnableDiskPos(disk) {
        return this.board.some((pos, _) => this.getTunableDiskPosList(pos, disk).length > 0);
    }
    /**
     * Place a disk with x and y
     * @param x
     * @param y
     * @param disk
     * @param callback
     */
    placeDiskFromXY(x, y, disk, callback) {
        return this.placeDisk(new board2d.Pos(x, y), disk, callback);
    }
    /**
     * Convert board to string (for debugging)
     * @param board
     */
    static boardToString(board) {
        return board.toMutable().boardCore.values.map(row => row.map(v => v || '_').join('')).join('\n');
    }
}
export var Disk;
(function (Disk) {
    Disk["light"] = "l";
    Disk["dark"] = "d";
})(Disk || (Disk = {}));
class Event {
    constructor(pos, disk) {
        this.pos = pos;
        this.disk = disk;
    }
}
class Score {
    constructor(lightCount, darkCount) {
        this.lightCount = lightCount;
        this.darkCount = darkCount;
    }
    getDiskCount(disk) {
        return disk === Disk.light ? this.lightCount : this.darkCount;
    }
    get winner() {
        if (this.lightCount == this.darkCount) {
            return null; // draw
        }
        return this.lightCount > this.darkCount ? Disk.light : Disk.dark;
    }
}
