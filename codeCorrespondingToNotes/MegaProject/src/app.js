import express from "express";
const app = express();

//router imports
app.use(express.json());
import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

// app.use((err, req, res, next) => {
// 	const statusCode = err.statusCode;
// 	const message = err.message;

// 	res.status(statusCode).json({
// 		message,
// 	});
// });

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	const errors = err.errors || [];

	res.status(statusCode).json({
		success: false,
		message,
		errors,
	});
});

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/register", authRouter);

export default app;
