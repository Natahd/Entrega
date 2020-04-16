const ServicioPg = require("../services/postgres");

/**
 * Validar la información de la url
 * @param {*} url Json de la url
 */
let validarUrl = url => {
  if (!url) {
    throw {
      ok: false,
      mensaje: "La información de la url es obligatoria."
    };
  }

  if (!url.id) {
    throw { ok: false, mensaje: "El documento de la url es obligatorio." };
  }
};

/**
 * Guardar en base de datos la url
 * @param {*} url
 */
let guardarUrl = async url => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.url(
                 id, nombre, descripcion)
                VALUES (
                    '${url.id}',
                    '${url.nombre}',
                    '${url.descripcion}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };

 /**
 * Consultar urls
 * @param {*} filtros
 */
  let consultarUrl = async () => {
    let _servicio = new ServicioPg();
    let sql = `SELECT * FROM url WHERE id='${id}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };

  let modificarUrl = async (url, id) => {
    if (url.id != id) {
      throw {
        ok: false,
        mensaje: "El documento de la url no correspende al enviado.",
      };
    }
    let _servicio = new ServicioPg();
    let sql = `UPDATE public.url
    SET id='${url.id}',  nombre='${url.nombre}', 
    descripcion='${url.descripcion}'
    WHERE id='${url.id}';`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };

  let eliminarUrl = async (id) => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM url WHERE id='${id}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };
  
  module.exports = { validarUrl,
     guardarUrl,
      consultarUrl,
      modificarUrl,
     eliminarUrl };
  
    