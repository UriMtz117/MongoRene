"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _usuariosRutas = _interopRequireDefault(require("./routes/usuariosRutas.js"));

var _db = require("./db/db.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _db.conectarBD)();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use("/api", _usuariosRutas["default"]);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor en http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.dev.js.map
