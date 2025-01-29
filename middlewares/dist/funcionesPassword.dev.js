"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encriptarPassword = encriptarPassword;
exports.validarPassword = validarPassword;
exports.usuarioAutorizado = usuarioAutorizado;
exports.adminAutorizado = adminAutorizado;

var _crypto = _interopRequireDefault(require("crypto"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function encriptarPassword(password) {
  var salt = _crypto["default"].randomBytes(32).toString("hex");

  var hash = _crypto["default"].scryptSync(password, salt, 10, 64, "sha512").toString("hex");

  return {
    salt: salt,
    hash: hash
  };
}

function validarPassword(password, salt, hash) {
  var hashEvaluar = _crypto["default"].scryptSync(password, salt, 10, 64, "sha512").toString("hex");

  return hashEvaluar == hash;
}

function usuarioAutorizado() {}

function adminAutorizado() {}
//# sourceMappingURL=funcionesPassword.dev.js.map
