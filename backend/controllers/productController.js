const pool = require('../db');

exports.getProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка получения товаров' });
  }
};
