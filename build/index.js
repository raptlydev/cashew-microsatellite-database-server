"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _posts = _interopRequireDefault(require("./routes/posts.js"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const postRoutes = require('../routes/posts.js');
// const serverless = require('serverless-http');
var app = (0, _express["default"])();
_dotenv["default"].config();
app.use(_bodyParser["default"].json({
  limit: "30mb",
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: "30mb",
  extended: true
}));
app.use((0, _cors["default"])());
app.use('/', _posts["default"]);
app.get('*', function (req, res) {
  req.sendFile(_path["default"].resolve(__dirname, 'build', 'index.html'));
});
app.get('/', function (req, res) {
  res.send("Hello to the test projects");
});
// const CONNECTION_URL = "mongodb+srv://raptly:raptly123@cluster0.v9gql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var PORT = process.env.PORT || 9000;

// app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`))
_mongoose["default"].connect(process.env.CONNECTION_URL).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server running on port: ".concat(PORT));
  });
})["catch"](function (err) {
  return console.log(err.message);
});

// module.exports = app;
// module.exports.handler = serverless(app);