"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var genomicInSilico = _mongoose["default"].Schema({
  scaffold: String,
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
  collection: 'genomic-InSilico'
});
var GenomicInSilico = _mongoose["default"].model('genomic-InSilico', genomicInSilico);
var _default = GenomicInSilico;
exports["default"] = _default;