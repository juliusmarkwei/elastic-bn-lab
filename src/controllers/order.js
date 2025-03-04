import OrderModel from "../models/order.js";
import ProductModel from "../models/product.js";

export const createOrder = (req, res) => {
	const { productId, quantity } = req.body;

	ProductModel.getAll((err, products) => {
		if (err) return res.status(500).json({ error: "Database error" });

		const product = products.find((p) => p.id === productId);
		if (!product)
			return res.status(404).json({ error: "Product not found" });

		const totalPrice = product.price * quantity;
		ProductModel.create(
			{ productId, quantity, totalPrice },
			(err, order) => {
				if (err) return res.status(400).json({ error: "Order failed" });
				res.status(201).json(order);
			}
		);
	});
};

export const getOrders = (req, res) => {
	OrderModel.getAll((err, orders) => {
		if (err) return res.status(500).json({ error: "Database error" });
		res.status(200).json(orders);
	});
};
