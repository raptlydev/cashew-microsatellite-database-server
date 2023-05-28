"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var transcript = _mongoose["default"].Schema({
  transcript: String
}, {
  collection: 'transcripts'
});
var Transcript = _mongoose["default"].model('transcripts', transcript);
var _default = Transcript;
exports["default"] = _default;