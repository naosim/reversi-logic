// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C988":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Direction = exports.PosMutable = exports.Pos = void 0;

/**
 * Position on the board (immutable)
 */
class Pos {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(pos) {
    return this.addXY(pos.x, pos.y);
  }

  addXY(x, y) {
    return new Pos(this.x + x, this.y + y);
  }
  /**
   *  Get the position moved one step in the specified direction
   *
   * If you are currently at (x, y) = (0, 0):
   * up    is  ( 0, -1)
   * down  is  ( 0,  1)
   * right is  ( 1,  0)
   * left  is  (-1,  0)
   * @param direction
   */


  addDirection(direction) {
    return this.add(Pos.createFromDirection(direction));
  }

  static createFromPos(pos) {
    return new Pos(pos.x, pos.y);
  }

  static createFromDirection(direction) {
    if (direction == Direction.up) {
      return new Pos(0, -1);
    } else if (direction == Direction.down) {
      return new Pos(0, 1);
    } else if (direction == Direction.right) {
      return new Pos(1, 0);
    } else if (direction == Direction.left) {
      return new Pos(-1, 0);
    } else if (direction == Direction.upRight) {
      return new Pos(1, -1);
    } else if (direction == Direction.upLeft) {
      return new Pos(-1, -1);
    } else if (direction == Direction.downRight) {
      return new Pos(1, 1);
    } else if (direction == Direction.downLeft) {
      return new Pos(-1, 1);
    } else {
      throw new Error('unknown direction');
    }
  }

}
/**
 * Position on the board (mutable)
 *
 * Use of pos class is recommended, but it is used when the processing speed and memory usage efficiency are required.
 */


exports.Pos = Pos;

class PosMutable {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(pos) {
    return this.addXY(pos.x, pos.y);
  }

  addXY(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  }

  addDirection(direction) {
    return this.add(Pos.createFromDirection(direction));
  }

  static createFromPos(pos) {
    return new PosMutable(pos.x, pos.y);
  }

}

exports.PosMutable = PosMutable;
var Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction[Direction["up"] = 0] = "up";
  Direction[Direction["down"] = 1] = "down";
  Direction[Direction["left"] = 2] = "left";
  Direction[Direction["right"] = 3] = "right";
  Direction[Direction["upLeft"] = 4] = "upLeft";
  Direction[Direction["upRight"] = 5] = "upRight";
  Direction[Direction["downLeft"] = 6] = "downLeft";
  Direction[Direction["downRight"] = 7] = "downRight";
})(Direction || (exports.Direction = Direction = {}));
},{}],"tzAf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoardMutable = exports.Board = exports.BoardCore = void 0;

var _pos = require("../pos/pos");

var __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var _poses, _boardCore;

class BoardCore {
  /**
   * Create with board size.
   */
  constructor(xSize, ySize) {
    this.xSize = xSize;
    this.ySize = ySize;

    _poses.set(this, void 0);

    this.values = new Array(ySize).fill(null).map(_ => new Array(xSize).fill(null));

    __classPrivateFieldSet(this, _poses, new Array(ySize).fill(null).map((_, y) => new Array(xSize).fill(null).map((__, x) => new _pos.Pos(x, y))));
  }

  forEach(callback) {
    for (var y = 0; y < this.ySize; y++) {
      for (var x = 0; x < this.xSize; x++) {
        callback(__classPrivateFieldGet(this, _poses)[y][x], this.values[y][x]);
      }
    }
  }

  getValue(pos) {
    return this.getValueFromXY(pos.x, pos.y);
  }
  /**
   * @deprecated
   * @ignore
   */


  getValueFromXY(x, y) {
    return this.getValueWithXY(x, y);
  }

  getValueWithXY(x, y) {
    if (x < 0 || y < 0) {
      return undefined;
    }

    if (this.values.length <= y || this.values[0].length <= x) {
      return undefined;
    }

    return this.values[y][x];
  }

  exists(pos) {
    return this.getValue(pos) !== null && this.getValue(pos) !== undefined;
  }

  some(check) {
    for (var y = 0; y < this.ySize; y++) {
      for (var x = 0; x < this.xSize; x++) {
        if (check(__classPrivateFieldGet(this, _poses)[y][x], this.values[y][x])) {
          return true;
        }
      }
    }

    return false;
  }

  find(check) {
    for (var y = 0; y < this.ySize; y++) {
      for (var x = 0; x < this.xSize; x++) {
        if (check(__classPrivateFieldGet(this, _poses)[y][x], this.values[y][x])) {
          return {
            pos: __classPrivateFieldGet(this, _poses)[y][x],
            value: this.values[y][x]
          };
        }
      }
    }

    return null;
  }

  findAll(check) {
    var result = [];

    for (var y = 0; y < this.ySize; y++) {
      for (var x = 0; x < this.xSize; x++) {
        if (check(__classPrivateFieldGet(this, _poses)[y][x], this.values[y][x])) {
          result.push({
            pos: __classPrivateFieldGet(this, _poses)[y][x],
            value: this.values[y][x]
          });
        }
      }
    }

    return result;
  }
  /**
   * @deprecated
   * @ignore
   */


  getFromDrection(pos, direction) {
    return this.getValueWithDirection(pos, direction);
  }

  getValueWithDirection(pos, direction) {
    var p = _pos.Pos.createFromPos(pos).addDirection(direction);

    var v = this.getValue(p);

    if (v === undefined) {
      return undefined;
    }

    return {
      pos: p,
      value: v
    };
  }

  indexToPos(index) {
    if (index < 0 || index >= this.xSize * this.ySize) {
      throw new Error('out of index');
    }

    return new _pos.Pos(index % this.xSize, Math.floor(index / this.xSize));
  }

  posToIndex(pos) {
    if (pos.x < 0 || pos.x >= this.xSize || pos.y < 0 || pos.y >= this.ySize) {
      throw new Error('out of index');
    }

    return pos.y * this.xSize + pos.x;
  }

  copy() {
    var result = new BoardCore(this.xSize, this.ySize);
    this.forEach((pos, v) => result.values[pos.y][pos.x] = v);
    return result;
  }

}

exports.BoardCore = BoardCore;
_poses = new WeakMap();
/**
 * Two-dimensional board
 */

class Board {
  constructor(boardCore, skipCopy = false) {
    _boardCore.set(this, void 0);

    __classPrivateFieldSet(this, _boardCore, skipCopy ? boardCore : boardCore.copy());
  }

  get xSize() {
    return __classPrivateFieldGet(this, _boardCore).xSize;
  }

  get ySize() {
    return __classPrivateFieldGet(this, _boardCore).ySize;
  }
  /**
   * Two-dimensional array as raw data on the board
   *
   * @return Return a copy. Updating the returned value does not affect the board.
   */


  get values() {
    return __classPrivateFieldGet(this, _boardCore).copy().values;
  }
  /**
   * Put pieces on the board (immutable)
   */


  put(pos, value) {
    var newBoardCore = __classPrivateFieldGet(this, _boardCore).copy();

    newBoardCore.values[pos.y][pos.x] = value;
    return new Board(newBoardCore, true);
  }
  /**
   * @deprecated
   * @ignore
   */


  putFromXY(x, y, value) {
    return this.put(new _pos.Pos(x, y), value);
  }

  putWithXY(x, y, value) {
    return this.put(new _pos.Pos(x, y), value);
  }

  forEach(callback) {
    __classPrivateFieldGet(this, _boardCore).forEach(callback);
  }

  getValue(pos) {
    return __classPrivateFieldGet(this, _boardCore).getValue(pos);
  }
  /**
   * @deprecated
   * @ignore
   */


  getValueFromXY(x, y) {
    return __classPrivateFieldGet(this, _boardCore).getValueWithXY(x, y);
  }

  getValueWithXY(x, y) {
    return __classPrivateFieldGet(this, _boardCore).getValueWithXY(x, y);
  }

  exists(pos) {
    return __classPrivateFieldGet(this, _boardCore).exists(pos);
  }

  copy() {
    return new Board(__classPrivateFieldGet(this, _boardCore).copy());
  }

  some(check) {
    return __classPrivateFieldGet(this, _boardCore).some(check);
  }

  find(check) {
    return __classPrivateFieldGet(this, _boardCore).find(check);
  }

  findAll(check) {
    return __classPrivateFieldGet(this, _boardCore).findAll(check);
  }
  /**
   * @deprecated
   * @ignore
   */


  getFromDrection(pos, direction) {
    return __classPrivateFieldGet(this, _boardCore).getValueWithDirection(pos, direction);
  }

  getValueWithDirection(pos, direction) {
    return __classPrivateFieldGet(this, _boardCore).getValueWithDirection(pos, direction);
  }

  indexToPos(index) {
    return __classPrivateFieldGet(this, _boardCore).indexToPos(index);
  }

  posToIndex(pos) {
    return __classPrivateFieldGet(this, _boardCore).posToIndex(pos);
  }

  toMutable() {
    return new BoardMutable(__classPrivateFieldGet(this, _boardCore));
  }

  static empty(xSize, ySize) {
    return new Board(new BoardCore(xSize, ySize), true);
  }

}

exports.Board = Board;
_boardCore = new WeakMap();
/**
 * Use of Board class is recommended, but it is used when the processing speed and memory usage efficiency are required.
 */

class BoardMutable {
  constructor(boardCore, skipCopy = false) {
    this.boardCore = skipCopy ? boardCore : boardCore.copy();
  }

  get xSize() {
    return this.boardCore.xSize;
  }

  get ySize() {
    return this.boardCore.ySize;
  }
  /**
   * Put pieces on the board (mutable)
   */


  put(pos, value) {
    this.boardCore.values[pos.y][pos.x] = value;
    return this;
  }

  forEach(callback) {
    this.boardCore.forEach(callback);
  }

  getValue(pos) {
    return this.boardCore.getValue(pos);
  }
  /**
   * @deprecated
   * @ignore
   */


  getValueFromXY(x, y) {
    return this.boardCore.getValueWithXY(x, y);
  }

  getValueWithXY(x, y) {
    return this.boardCore.getValueWithXY(x, y);
  }

  exists(pos) {
    return this.boardCore.exists(pos);
  }

  copy() {
    return new Board(this.boardCore.copy());
  }

  some(check) {
    return this.boardCore.some(check);
  }

  find(check) {
    return this.boardCore.find(check);
  }

  findAll(check) {
    return this.boardCore.findAll(check);
  }
  /**
   * @deprecated
   * @ignore
   */


  getFromDrection(pos, direction) {
    return this.boardCore.getValueWithDirection(pos, direction);
  }

  getValueWithDirection(pos, direction) {
    return this.boardCore.getValueWithDirection(pos, direction);
  }

  indexToPos(index) {
    return this.boardCore.indexToPos(index);
  }

  posToIndex(pos) {
    return this.boardCore.posToIndex(pos);
  }

  static empty(xSize, ySize) {
    return new BoardMutable(new BoardCore(xSize, ySize), true);
  }

  toImmutable() {
    return new Board(this.boardCore);
  }

}

exports.BoardMutable = BoardMutable;
},{"../pos/pos":"C988"}],"T0QY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true
};
exports.version = void 0;

var _pos = require("./pos/pos");

Object.keys(_pos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pos[key];
    }
  });
});

var _board = require("./board/board");

Object.keys(_board).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _board[key];
    }
  });
});

/**
 * 盤ライブラリ
 * バージョン: 1.1.1
 */
const version = '1.1.1';
exports.version = version;
},{"./pos/pos":"C988","./board/board":"tzAf"}],"QCba":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Board", {
  enumerable: true,
  get: function () {
    return board2d.Board;
  }
});
Object.defineProperty(exports, "BoardMutable", {
  enumerable: true,
  get: function () {
    return board2d.BoardMutable;
  }
});
Object.defineProperty(exports, "Pos", {
  enumerable: true,
  get: function () {
    return board2d.Pos;
  }
});
Object.defineProperty(exports, "Direction", {
  enumerable: true,
  get: function () {
    return board2d.Direction;
  }
});
Object.defineProperty(exports, "X", {
  enumerable: true,
  get: function () {
    return board2d.X;
  }
});
Object.defineProperty(exports, "Y", {
  enumerable: true,
  get: function () {
    return board2d.Y;
  }
});
exports.Disk = exports.Game = void 0;

var board2d = _interopRequireWildcard(require("board2d"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Reversi game class
 *
 * entry point
 */
var Game = /*#__PURE__*/function () {
  /**
   *
   * Use `Game.init ()` instead of the constructor to start the game.
   *
   * @param turn
   * @param board
   * @param winner null if no win or loss has been decide
   * @param _eventList history
   */
  function Game(turn, board) {
    var winner = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var _eventList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Game);

    this.turn = turn;
    this.board = board;
    this.winner = winner;
    this._eventList = _eventList;
  }
  /**
   * Start the game
   */


  _createClass(Game, [{
    key: "getTunableDiskPosList",
    value: function getTunableDiskPosList(pos, disk) {
      var _this = this;

      if (this.isPlaced(pos)) {
        return [];
      }

      var direction8 = [board2d.Direction.up, board2d.Direction.down, board2d.Direction.right, board2d.Direction.left, board2d.Direction.upRight, board2d.Direction.upLeft, board2d.Direction.downRight, board2d.Direction.downLeft].map(function (v) {
        return board2d.Pos.createFromDirection(v);
      });
      return direction8.map(function (d) {
        var currentPos = d.add(pos);
        var result = [];
        var i = 0;

        while (_this.isPlaced(currentPos) && _this.board.getValue(currentPos) !== disk) {
          result.push(currentPos);
          currentPos = currentPos.add(d);
          i++;
          if (i > 20) throw new Error("infinite loop");
        }

        return _this.board.getValue(currentPos) === disk ? result : [];
      }).reduce(function (memo, list) {
        return memo.concat(list);
      }, []);
    }
  }, {
    key: "getTunableDiskPosListFromXY",
    value: function getTunableDiskPosListFromXY(x, y, disk) {
      return this.getTunableDiskPosList(new board2d.Pos(x, y), disk);
    }
    /**
     * Whether the disk is placed in the passed position
     * @param pos
     */

  }, {
    key: "isPlaced",
    value: function isPlaced(pos) {
      return this.board.exists(pos);
    }
    /**
     * Whether the disk is placed in the passed position
     * @param x
     * @param y
     */

  }, {
    key: "isPlacedFromXY",
    value: function isPlacedFromXY(x, y) {
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

  }, {
    key: "placeDisk",
    value: function placeDisk(pos, disk, callback) {
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
      list.forEach(function (p) {
        return newBoard.put(p, disk);
      });
      newBoard.toImmutable();
      var newEventList = [].concat(_toConsumableArray(this._eventList), [new Event(pos, disk)]);
      var nextTurn = this.turn == Disk.light ? Disk.dark : Disk.light;
      var winner = null;
      var preGame = new Game(nextTurn, newBoard.toImmutable(), winner, newEventList);

      if (preGame.hasTurnableDiskPos(nextTurn)) {
        callback(null, preGame);
        return;
      } else if (preGame.hasTurnableDiskPos(this.turn)) {
        callback(null, new Game(this.turn, newBoard.toImmutable(), winner, newEventList));
        return;
      } else {
        // winner decided
        callback(null, new Game(nextTurn, newBoard.toImmutable(), preGame.score.winner, newEventList));
        return;
      }
    }
    /**
     * Is there a place to put the disk?
     */

  }, {
    key: "hasTurnableDiskPos",
    value: function hasTurnableDiskPos(disk) {
      var _this2 = this;

      return this.board.some(function (pos, _) {
        return _this2.getTunableDiskPosList(pos, disk).length > 0;
      });
    }
    /**
     * Place a disk with x and y
     * @param x
     * @param y
     * @param disk
     * @param callback
     */

  }, {
    key: "placeDiskFromXY",
    value: function placeDiskFromXY(x, y, disk, callback) {
      return this.placeDisk(new board2d.Pos(x, y), disk, callback);
    }
    /**
     * Convert board to string (for debugging)
     * @param board
     */

  }, {
    key: "score",
    get: function get() {
      var lightCount = 0;
      var darkCount = 0;
      this.board.forEach(function (pos, disk) {
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

  }, {
    key: "isGameOver",
    get: function get() {
      return this.winner != null;
    }
  }], [{
    key: "init",
    value: function init() {
      var board = board2d.BoardMutable.empty(8, 8).put(new board2d.Pos(3, 3), Disk.light).put(new board2d.Pos(4, 3), Disk.dark).put(new board2d.Pos(3, 4), Disk.dark).put(new board2d.Pos(4, 4), Disk.light).toImmutable();
      return new Game(Disk.light, board);
    }
  }, {
    key: "boardToString",
    value: function boardToString(board) {
      return board.toMutable().boardCore.values.map(function (row) {
        return row.map(function (v) {
          return v || '_';
        }).join('');
      }).join('\n');
    }
  }]);

  return Game;
}();

exports.Game = Game;
var Disk;
exports.Disk = Disk;

(function (Disk) {
  Disk["light"] = "l";
  Disk["dark"] = "d";
})(Disk || (exports.Disk = Disk = {}));

var Event = function Event(pos, disk) {
  _classCallCheck(this, Event);

  this.pos = pos;
  this.disk = disk;
};

var Score = /*#__PURE__*/function () {
  function Score(lightCount, darkCount) {
    _classCallCheck(this, Score);

    this.lightCount = lightCount;
    this.darkCount = darkCount;
  }

  _createClass(Score, [{
    key: "getDiskCount",
    value: function getDiskCount(disk) {
      return disk === Disk.light ? this.lightCount : this.darkCount;
    }
  }, {
    key: "winner",
    get: function get() {
      if (this.lightCount == this.darkCount) {
        return null; // draw
      }

      return this.lightCount > this.darkCount ? Disk.light : Disk.dark;
    }
  }]);

  return Score;
}();
},{"board2d":"T0QY"}]},{},["QCba"], "reversi")
//# sourceMappingURL=reversi.js.map