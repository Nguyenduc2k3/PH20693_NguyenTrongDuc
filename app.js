import express from "express";
import routerProduct from "./src/routes/product.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", routerProduct);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});