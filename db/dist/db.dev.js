"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conectarBD = conectarBD;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _manejoErrores = require("../libs/manejoErrores.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function conectarBD() {
  var respuesta;
  return regeneratorRuntime.async(function conectarBD$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect("mongodb://localhost:27017/appMongo"));

        case 3:
          respuesta = _context.sent;
          return _context.abrupt("return", (0, _manejoErrores.mensajes)(200, "Conexion a la BD ok"));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", (0, _manejoErrores.mensajes)(400, "Error al conectarse a la BD", _context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
//# sourceMappingURL=db.dev.js.map
