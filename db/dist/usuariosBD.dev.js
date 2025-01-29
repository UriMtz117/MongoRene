"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = void 0;

var _usuarioModelo = _interopRequireDefault(require("../models/usuarioModelo.js"));

var _manejoErrores = require("../libs/manejoErrores.js");

var _jwt = require("../libs/jwt.js");

var _funcionesPassword = require("../middlewares/funcionesPassword.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function register(_ref) {
  var username, email, password, usuarioExistente, emailExitente, _encriptarPassword, salt, hash, data, respuesta, token;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = _ref.username, email = _ref.email, password = _ref.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].findOne({
            username: username
          }));

        case 4:
          usuarioExistente = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].findOne({
            email: email
          }));

        case 7:
          emailExitente = _context.sent;

          if (!(usuarioExistente || emailExitente)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", (0, _manejoErrores.mensajes)(400, "Usuario duplicado"));

        case 10:
          _encriptarPassword = (0, _funcionesPassword.encriptarPassword)(password), salt = _encriptarPassword.salt, hash = _encriptarPassword.hash;
          data = new _usuarioModelo["default"]({
            username: username,
            email: email,
            password: hash,
            salt: salt
          });
          _context.next = 14;
          return regeneratorRuntime.awrap(data.save());

        case 14:
          respuesta = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap((0, _jwt.crearToken)({
            id: respuesta._id
          }));

        case 17:
          token = _context.sent;
          return _context.abrupt("return", (0, _manejoErrores.mensajes)(200, "Registro agregado correctamente", "", token));

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", (0, _manejoErrores.mensajes)(400, "Error al registrar al usuario"));

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 21]]);
}

var login = function login(_ref2) {
  var username, password, usuarioCorrecto, passwordCorrecto;
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = _ref2.username, password = _ref2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].findOne({
            username: username
          }));

        case 4:
          usuarioCorrecto = _context2.sent;

          if (usuarioCorrecto) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", (0, _manejoErrores.mensajes)(400, "datos incorrectos"));

        case 7:
          passwordCorrecto = (0, _funcionesPassword.validarPassword)(password, usuarioCorrecto.salt, usuarioCorrecto.password);

          if (passwordCorrecto) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", (0, _manejoErrores.mensajes)(400, "datos incorrectos"));

        case 10:
          return _context2.abrupt("return", (0, _manejoErrores.mensajes)(200, "ingreso correcto"));

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", (0, _manejoErrores.mensajes)(400, "datos incorrectos"));

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

exports.login = login;
//# sourceMappingURL=usuariosBD.dev.js.map
