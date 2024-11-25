const db = require("../lib/connection");

const respuestaRepository = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM tblrespuesta");
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query("SELECT * FROM tblrespuesta WHERE fldrespuesta_id = $1", [id]);
    return result.rows[0];
  },

  create: async (respuestaData) => {
    const {
      pregunta_id,
      muestra_id,
      item_id,
      respuesta_texto,
      respuesta_string,
      respuesta_fecha,
      respuesta_numero
    } = respuestaData;

    const result = await db.query(
      `INSERT INTO tblrespuesta (
          fldpregunta_id,
          fldmuestra_id,
          flditem_id,
          fldrespuesta_texto,
          fldrespuesta_string,
          fldrespuesta_fecha,
          fldrespuesta_numero
      ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
          pregunta_id,
          muestra_id,
          item_id,
          respuesta_texto,
          respuesta_string,
          respuesta_fecha,
          respuesta_numero
      ]
    );
    return result.rows[0];
  },

  update: async (id, respuestaData) => {
    const {
      pregunta_id,
      muestra_id,
      item_id,
      respuesta_texto,
      respuesta_string,
      respuesta_fecha,
      respuesta_numero
    } = respuestaData;

    const result = await db.query(
      `UPDATE tblrespuesta SET
        fldpregunta_id = $1,
        fldmuestra_id = $2,
        flditem_id = $3,
        fldrespuesta_texto = $4,
        fldrespuesta_string = $5,
        fldrespuesta_fecha = $6,
        fldrespuesta_numero = $7
      WHERE fldrespuesta_id = $8 RETURNING *`,
      [
        pregunta_id,
        muestra_id,
        item_id,
        respuesta_texto,
        respuesta_string,
        respuesta_fecha,
        respuesta_numero,
        id
      ]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query("DELETE FROM tblrespuesta WHERE fldrespuesta_id = $1 RETURNING *", [id]);
    return result.rows[0];
  },
};

module.exports = respuestaRepository;
