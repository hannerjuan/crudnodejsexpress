const db = require("../lib/connection");

const temaRepository = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM tbltema");
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query("SELECT * FROM tbltema WHERE fldtema_id = $1", [id]);
    return result.rows[0];
  },

  create: async ({ fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id }) => {
    const result = await db.query(
      "INSERT INTO tbltema (fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id]
    );
    return result.rows[0];
  },

  update: async (id, { fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id }) => {
    const result = await db.query(
      "UPDATE tbltema SET fldtema_nombre = $1, fldtema_orden = $2, fldpagina_id = $3, tmp_id = $4 WHERE fldtema_id = $5 RETURNING *",
      [fldtema_nombre, fldtema_orden, fldpagina_id, tmp_id, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query("DELETE FROM tbltema WHERE fldtema_id = $1 RETURNING *", [id]);
    return result.rows[0];
  },
};

module.exports = temaRepository;
