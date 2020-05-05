import * as board2d from 'board2d';
export declare class Game {
    readonly turn: Disk;
    readonly board: board2d.Board<Disk>;
    readonly winner: Disk | null;
    private readonly _eventList;
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
    constructor(turn: Disk, board: board2d.Board<Disk>, winner?: Disk | null, _eventList?: Event[]);
    /**
     * ゲームを始める
     */
    static init(): Game;
    get score(): Score;
    /**
     * 決着がついたかどうか
     */
    get isGameOver(): boolean;
    getTunableDiskPosList(pos: board2d.PosReadable, disk: Disk): board2d.Pos[];
    getTunableDiskPosListFromXY(x: board2d.X, y: board2d.Y, disk: Disk): board2d.Pos[];
    /**
     * 指定の位置にすでに石があるか
     * @param pos
     */
    isPlaced(pos: board2d.PosReadable): boolean;
    /**
     * 指定の位置にすでに石があるか
     * @param x
     * @param y
     */
    isPlacedFromXY(x: board2d.X, y: board2d.Y): boolean;
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
    placeDisk(pos: board2d.Pos, disk: Disk, callback?: (e: Error | null, game?: Game) => void): void;
    /**
     * ディスクを置ける場所があるか？
     */
    hasTurnableDiskPos(disk: Disk): boolean;
    /**
     * 石を置く。結果はcallbackで返る
     * @param x
     * @param y
     * @param disk
     * @param callback
     */
    placeDiskFromXY(x: board2d.X, y: board2d.Y, disk: Disk, callback?: (e: Error | null, game?: Game) => void): void;
    /**
     * 盤を文字列に変換する(デバッグ用)
     * @param board
     */
    static boardToString(board: board2d.Board<Disk>): string;
}
/**
 * ディスク
 */
export declare enum Disk {
    light = "l",
    dark = "d"
}
declare class Event {
    readonly pos: board2d.Pos;
    readonly disk: Disk;
    constructor(pos: board2d.Pos, disk: Disk);
}
declare class Score {
    readonly lightCount: number;
    readonly darkCount: number;
    constructor(lightCount: number, darkCount: number);
    getDiscCount(disk: Disk): number;
    get winner(): Disk | null;
}
export {};
