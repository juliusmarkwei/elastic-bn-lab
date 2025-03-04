import { db } from "../config/db.js";

class OrderModel {
	static getAll(callback) {
		db.all("SELECT * FROM orders", [], (err, rows) => callback(err, rows));
	}

	static create({ productId, quantity, totalPrice }, callback) {
		db.run(
			"INSERT INTO orders (product_id, quantity, total_price) VALUES (?, ?, ?)",
			[productId, quantity, totalPrice],
			function (err) {
				callback(err, {
					id: this.lastID,
					productId,
					quantity,
					totalPrice,
				});
			}
		);
	}
}

export default OrderModel;
