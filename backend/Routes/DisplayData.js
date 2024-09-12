import express from "express";
const router = express.Router();

router.post("/Fooditems", [], async (req, res) => {
    try{
        // console.log(global.food_items);
        res.send([global.food_items,global.food_category])

    }catch{

    }
});

export default router;
