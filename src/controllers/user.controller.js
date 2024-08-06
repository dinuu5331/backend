import {asyncHandler} from "../utiles/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    console.log("successfull")
    res.status(200).json({
        message: "registered successfully"
    })
})


export {registerUser}