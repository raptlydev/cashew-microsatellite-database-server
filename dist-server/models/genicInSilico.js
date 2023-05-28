"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var genicInSilico = _mongoose["default"].Schema({
  transcript: String,
  repeat_type: Number,
  repeat_motif: String,
  copy_no: Number,
  repeat_size: Number,
  forward_primer: String,
  reverse_primer: String,
  PCR_product_size: Number,
  ta_oc: Number
  // createdAt: {
  //     type: Date,
  //     default: new Date()
  // }
}, {
  collection: 'genic-InSilico'
});
var GenicInSilico = _mongoose["default"].model('genic-InSilico', genicInSilico);
var _default = GenicInSilico;
exports["default"] = _default;