const pool = require('../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function getUserIdFromToken(req) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch {
    return null;
  }
}

exports.getCart = async (req, res) => {
  const userId = getUserIdFromToken(req);
  if (!userId) return res.status(401).json({ error: 'Неавторизовано' });

  try {
    const result = await pool.query(
      'SELECT p.* FROM cart_items c JOIN products p ON c.product_id = p.id WHERE c.user_id = $1',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка получения корзины' });
  }
};

exports.addToCart = async (req, res) => {
  const userId = getUserIdFromToken(req);
  const { productId } = req.body;
  if (!userId) return res.status(401).json({ error: 'Неавторизовано' });

  try {
    await pool.query(
      'INSERT INTO cart_items (user_id, product_id) VALUES ($1, $2)',
      [userId, productId]
    );
    res.json({ message: 'Товар добавлен в корзину' });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка добавления в корзину' });
  }
};
