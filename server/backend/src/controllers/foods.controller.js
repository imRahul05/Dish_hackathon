import FoodModel from "../models/foods.model.js";
import userModel from "../models/user.model.js";
import validateAdmin from "../utils/validateAdmin.utils.js";

const getFood = async (req, res, next) => {
    try {
        const {foodName} = req.params;
        const data = await FoodModel.findOne({dishName: foodName});
        if(!data) {
            const error = new Error("Food not found");
            error.message = "Food not found";
            error.statusCode = 404; // Not Found
            throw error;
        }
        res.status(200).json({message:"Food found successfully.", data});

    } catch (error) {
        next(error);
    }
}




const postFood = async (req, res, next) => {
    try {
        const {email} = req.body;
     //   await validateAdmin(email); // checking if it is admin or not;
        const {dishName, items} = req.body;
        console.log(dishName, items);
        
        await FoodModel.insertMany({dishName, items});
        
        return res.status(200).json({message:"Food added successfully."});
    } catch (error) {
        next(error);
    }
}


export {getFood, postFood};