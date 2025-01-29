"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mensajes = mensajes;

function mensajes(status, mensajeUsuario) {
  var mensajeOriginal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var token = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  return {
    //los 3 que estan adentro son atributos
    status: status,
    mensajeUsuario: mensajeUsuario,
    mensajeOriginal: mensajeOriginal,
    token: token
  };
}
//# sourceMappingURL=manejoErrores.dev.js.map
