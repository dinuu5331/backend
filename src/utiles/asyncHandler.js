// const asyncHandler = (fn) => (req, res, next) =>{
//     try{
//         await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message || 'Internal Server Error'
//     })
// }
// }

// export {asyncHandler}


const asyncHandler = (requestHandler) =>{
    (req,res,next)=>{
        Promise.resolve
    }
}

export {asyncHandler}