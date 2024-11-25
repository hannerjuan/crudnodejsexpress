const db = require("../lib/connection");

const paginaRepository = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM tblpagina");
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query("SELECT * FROM tblpagina WHERE fldpagina_id = $1", [id]);
    return result.rows[0];
  },

  create: async ({ pagina, pagina_orden, encuesta_id, tmp_id }) => {
    const result = await db.query(
      "INSERT INTO tblpagina (fldpagina_nombre, fldpagina_orden, fldencuesta_id, tmp_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [pagina, pagina_orden, encuesta_id, tmp_id]
    );
    return result.rows[0];
  },

  update: async (id, { pagina, pagina_orden, encuesta_id, tmp_id }) => {
    const result = await db.query(
      "UPDATE tblpagina SET fldpagina_nombre = $1, fldpagina_orden = $2, fldencuesta_id = $3, tmp_id = $4 WHERE fldpagina_id = $5 RETURNING *",
      [pagina, pagina_orden, encuesta_id, tmp_id, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query("DELETE FROM tblpagina WHERE fldpagina_id = $1 RETURNING *", [id]);
    return result.rows[0];
  },
};

module.exports = paginaRepository;