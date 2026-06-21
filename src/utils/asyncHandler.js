
// wrapper function with try catch block to handle errors in async functions

const asyncHandler = (func) => async (req,res,next) => {
    try{

        await func(req,res,next);

    }catch(err){
        res.status(err.code || 500).json({
            success: false,
            message: err.message || "Server Error"
        }) 
    }
}

export { asyncHandler }