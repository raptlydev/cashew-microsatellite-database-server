"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var genomicExp = _mongoose["default"].Schema({
  marker: String,
  repeat_type: Number,
  repeat_motif: String,
  copy_no: Number,
  repeat_size: Number,
  forward_primer: String,
  reverse_primer: String,
  annealing_temperature_ta_oc: Number,
  allele_size_range_bp: String,
  PIC: Number,
  reference: String
  // createdAt: {
  //     type: Date,
  //     default: new Date()
  // }
}, {
  collection: 'genomic-exp'
});
var GenomicExp = _mongoose["default"].model('genomic-exp', genomicExp);
var _default = GenomicExp;
exports["default"] = _default;