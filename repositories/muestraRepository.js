const db = require("../lib/connection");

const muestraRepository = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM tblmuestra");
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query("SELECT * FROM tblmuestra WHERE fldmuestra_id = $1", [id]);
    return result.rows[0];
  },

  create: async ({ muestra_fecha, muestra_estado, encuesta_id, muestra_usuario, usuario_id }) => {
    const result = await db.query(
      "INSERT INTO tblmuestra (fldmuestra_fecha, fldmuestra_estado, fldencuesta_id, fldmuestra_usuario, fldusuario_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [muestra_fecha, muestra_estado, encuesta_id, muestra_usuario, usuario_id]
    );
    return result.rows[0];
  },

  update: async (id, { muestra_fecha, muestra_estado, encuesta_id, muestra_usuario, usuario_id }) => {
    const result = await db.query(
      "UPDATE tblmuestra SET fldmuestra_fecha = $1, fldmuestra_estado = $2, fldencuesta_id = $3, fldmuestra_usuario=$4, fldusuario_id=$5  WHERE fldmuestra_id = $6 RETURNING *",
      [muestra_fecha, muestra_estado, encuesta_id, muestra_usuario, usuario_id, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query("DELETE FROM tblmuestra WHERE fldmuestra_id = $1 RETURNING *", [id]);
    return result.rows[0];
  },
};

module.exports = muestraRepository;
