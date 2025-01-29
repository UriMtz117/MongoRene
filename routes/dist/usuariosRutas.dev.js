"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuariosBD = require("../db/usuariosBD.js");

var _usuarioModelo = _interopRequireDefault(require("../models/usuarioModelo.js"));

var _manejoErrores = require("../libs/manejoErrores.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // Registro de usuario

router.post("/registro", function _callee(req, res) {
  var respuesta;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _usuariosBD.register)(req.body));

        case 2:
          respuesta = _context.sent;

          if (respuesta.status === 200) {
            res.cookie('token', respuesta.token).status(respuesta.status).json(respuesta);
          } else {
            res.status(respuesta.status).json(respuesta);
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Inicio de sesión

router.post("/login", function _callee2(req, res) {
  var respuesta;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _usuariosBD.login)(req.body));

        case 2:
          respuesta = _context2.sent;
          res.status(respuesta.status).json(respuesta);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Obtener todos los usuarios

router.get("/usuarios", function _callee3(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].find());

        case 3:
          usuarios = _context3.sent;
          res.status(usuarios.length ? 200 : 404).json(usuarios.length ? usuarios : (0, _manejoErrores.mensajes)(404, "No hay usuarios disponibles"));
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json((0, _manejoErrores.mensajes)(500, "Error al obtener usuarios", _context3.t0));

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Obtener usuario por ID

router.get("/usuarios/:id", function _callee4(req, res) {
  var usuario;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].findById(req.params.id));

        case 3:
          usuario = _context4.sent;

          if (usuario) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json((0, _manejoErrores.mensajes)(404, "Usuario no encontrado")));

        case 6:
          res.status(200).json(usuario);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json((0, _manejoErrores.mensajes)(500, "Error al obtener el usuario", _context4.t0));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Borrar usuario por ID

router["delete"]("/usuarios/:id", function _callee5(req, res) {
  var usuario;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].findByIdAndDelete(req.params.id));

        case 3:
          usuario = _context5.sent;

          if (usuario) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(404).json((0, _manejoErrores.mensajes)(404, "Usuario no encontrado")));

        case 6:
          res.status(200).json((0, _manejoErrores.mensajes)(200, "Usuario borrado correctamente"));
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json((0, _manejoErrores.mensajes)(500, "Error al borrar el usuario", _context5.t0));

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Actualizar usuario por ID

router.put("/usuarios/:id", function _callee6(req, res) {
  var usuario;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_usuarioModelo["default"].findByIdAndUpdate(req.params.id, req.body, {
            "new": true,
            runValidators: true
          }));

        case 3:
          usuario = _context6.sent;

          if (usuario) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return", res.status(404).json((0, _manejoErrores.mensajes)(404, "Usuario no encontrado")));

        case 6:
          res.status(200).json((0, _manejoErrores.mensajes)(200, "Usuario actualizado correctamente", usuario));
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json((0, _manejoErrores.mensajes)(500, "Error al actualizar el usuario", _context6.t0));

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=usuariosRutas.dev.js.map
