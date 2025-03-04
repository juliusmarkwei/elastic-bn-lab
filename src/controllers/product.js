import Product from "../models/product.js";

export const getProducts = (req, res) => {
	Product.getAll((err, products) => {
		if (err) return res.status(500).json({ error: "Database error" });
		res.status(200).json(products);
	});
};

export const createProduct = (req, res) => {
	const { name, price, description, stock } = req.body;
	Product.create({ name, price, description, stock }, (err, product) => {
		if (err)
			return res.status(400).json({ error: "Product creation failed" });
		res.status(201).json(product);
	});
};
