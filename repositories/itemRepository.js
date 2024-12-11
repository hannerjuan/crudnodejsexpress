const db = require("../lib/connection");

const itemRepository = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM tblitem");
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query('SELECT * FROM tblitem WHERE flditem_id = $1', [id]);
    return result.rows[0];
  },

  create: async ({ item_nombre, item_orden, item_codigo, pregunta_id, tmp_id }) => {
    const result = await db.query(
      "INSERT INTO tblitem (flditem_nombre, flditem_codigo, flditem_orden, fldpregunta_id, tmp_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [item_nombre, item_orden, item_codigo, pregunta_id, tmp_id]
    );
    return result.rows[0];
  },

  update: async (id, { item_nombre, item_orden, item_codigo, pregunta_id, tmp_id }) => {
    const result = await db.query(
        `UPDATE tblitem 
        SET flditem_nombre = $1, flditem_codigo = $2, flditem_orden = $3, fldpregunta_id = $4, tmp_id = $5
        WHERE flditem_id = $6 RETURNING *`
      [item_nombre, item_orden, item_codigo, pregunta_id, tmp_id, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM tblitem WHERE flditem_id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = itemRepository;
