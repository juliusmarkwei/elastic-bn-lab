import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.json({ message: "Express + Elastic Beanstalk Deployment" });
});

app.listen(PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
