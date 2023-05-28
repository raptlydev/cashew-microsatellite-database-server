"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var scaffold = _mongoose["default"].Schema({
  Scaffold: String
}, {
  collection: 'scaffolds'
});
var Scaffold = _mongoose["default"].model('scaffolds', scaffold);
var _default = Scaffold;
exports["default"] = _default;