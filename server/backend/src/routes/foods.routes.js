import express from "express";
import { getFood, postFood } from "../controllers/foods.controller.js";

const foodRouter = express.Router();

foodRouter.get("/:foodName", getFood);

foodRouter.post("/", postFood);



export default foodRouter;