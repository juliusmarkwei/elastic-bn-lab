import { db } from "../config/db.js";

class ProductModel {
	static getAll(callback) {
		db.all("SELECT * FROM products", [], (err, rows) =>
			callback(err, rows)
		);
	}

	static create({ name, price, description, stock }, callback) {
		db.run(
			"INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)",
			[name, price, description, stock],
			function (err) {
				callback(err, {
					id: this.lastID,
					name,
					price,
					description,
					stock,
				});
			}
		);
	}
}

export default ProductModel;
