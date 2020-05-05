import * as board2d from 'board2d';
export declare class Game {
    readonly turn: Disk;
    readonly board: board2d.Board<Disk>;
    readonly winner: Disk | null;
    private readonly _eventList;
    /**
     *
     * Use `Game.init ()` instead of the constructor to start the game.
     *
     * @param turn
     * @param board
     * @param winner null if no win or loss has been decide
     * @param _eventList history
     */
    constructor(turn: Disk, board: board2d.Board<Disk>, winner?: Disk | null, _eventList?: Event[]);
    /**
     * Start the game
     */
    static init(): Game;
    get score(): Score;
    /**
     * Whether the win or loss has been decided
     */
    get isGameOver(): boolean;
    getTunableDiskPosList(pos: board2d.PosReadable, disk: Disk): board2d.Pos[];
    getTunableDiskPosListFromXY(x: board2d.X, y: board2d.Y, disk: Disk): board2d.Pos[];
    /**
     * Whether the disk is placed in the passed position
     * @param pos
     */
    isPlaced(pos: board2d.PosReadable): boolean;
    /**
     * Whether the disk is placed in the passed position
     * @param x
     * @param y
     */
    isPlacedFromXY(x: board2d.X, y: board2d.Y): boolean;
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
    placeDisk(pos: board2d.Pos, disk: Disk, callback?: (e: Error | null, game?: Game) => void): void;
    /**
     * Is there a place to put the disk?
     */
    hasTurnableDiskPos(disk: Disk): boolean;
    /**
     * Place a disk with x and y
     * @param x
     * @param y
     * @param disk
     * @param callback
     */
    placeDiskFromXY(x: board2d.X, y: board2d.Y, disk: Disk, callback?: (e: Error | null, game?: Game) => void): void;
    /**
     * Convert board to string (for debugging)
     * @param board
     */
    static boardToString(board: board2d.Board<Disk>): string;
}
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
    getDiskCount(disk: Disk): number;
    get winner(): Disk | null;
}
export {};
