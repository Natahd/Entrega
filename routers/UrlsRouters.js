const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/Simulador");

/**
 * Obtener todas las url
 */
router.get("/url", (req, res) => {
  _controlador
    .consultarUrl()
    .then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "Simulador consultadas" });
    })
    .catch(error => {
      res.send(error);
    });
});

/**
 * Guarda una persona
 */
router.post("/url", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_url = req.body;

    // Valida la información, si hay un error se envia al catch
    _controlador.validarUrl(info_url);

    // Guardar la url en la base de datos
    _controlador
      .guardarUrl(info_url)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Url guardada", info: info_url });
      })
      .catch(error => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);
  }
});

/**
 * Guarda url
 */
router.post("/url", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_url = req.body;

    // Valida la información, si hay un error se envia al catch
    _controlador.validarUrl(info_url);

    // Guardar la url en la base de datos
    _controlador
      .guardarUrl(info_url)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Url guardada", info: info_url });
      })
      .catch(error => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);

  }
});

/**
 * Modificar url
 */
router.put("/url/:id", (req, res) => {
  // Capturar el parámetro de la ruta
  let id = req.params.id;

  let url = req.body;
  _controlador
    .modificarUrl(url, id)
    .then((respuestaDB) => {
      res.send({ ok: true, mensaje: "url modificada", info: respuestaDB });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Eliminar url
 */
router.delete("/url/:id", (req, res) => {
  let id = req.params.id;
  _controlador
    .eliminarUrl(id)
    .then((respuestaDB) => {
      res.send({ ok: true, info: {}, mensaje: "Url elimina" });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
