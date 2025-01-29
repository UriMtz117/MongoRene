"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearToken = crearToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

var _manejoErrores = require("./manejoErrores.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function crearToken(dato) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].sign(dato, process.env.SECRET_TOKEN, {
      expiresIn: "1d"
    }, function (err, token) {
      if (err) {
        reject((0, _manejoErrores.mensajes)(400, "Error al generar el token"));
      }

      resolve(token);
    });
  });
}
//# sourceMappingURL=jwt.dev.js.map
