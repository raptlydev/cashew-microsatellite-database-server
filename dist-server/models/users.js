"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var users = _mongoose["default"].Schema({
  searchName: String,
  searchInstituteName: String,
  searchEmail: String
}, {
  collection: 'users'
});
var Users = _mongoose["default"].model('users', users);
var _default = Users;
exports["default"] = _default;