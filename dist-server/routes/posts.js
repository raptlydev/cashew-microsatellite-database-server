"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _posts = require("../controllers/posts.js");
var _genomicInSilico = require("../controllers/genomicInSilico.js");
var _genicInSilico = require("../controllers/genicInSilico.js");
var _genicExp = require("../controllers/genicExp.js");
var _genomicExp = require("../controllers/genomicExp.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// router.get('/', getPosts); //view
//Genomic
router.post('/getGenomicInSilico', _genomicInSilico.getGenomicInSilico); //view
router.get('/getScaffolds', _genomicInSilico.getScaffolds); //view
router.post('/getGenomicExp', _genomicExp.getGenomicExp); //view
router.post('/downloadGenomicExp', _genomicExp.downloadGenomicExp); //view
router.post('/downloadGenomicInSilico', _genomicInSilico.downloadGenomicInSilico); //view

//Genic
router.post('/getGenicInSilico', _genicInSilico.getGenicInSilico); //view
router.get('/getTranscripts', _genicInSilico.getTranscripts); //view
router.post('/downloadGenicExp', _genicExp.downloadGenicExp); //view
router.post('/downloadGenicInSilico', _genicInSilico.downloadGenicInSilico); //view

router.post('/getGenicExp', _genicExp.getGenicExp); //view
var _default = router;
exports["default"] = _default;