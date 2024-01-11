// its a higher order function: a function that takes function as a parameter and returns a function

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
Promise.resolve(requestHandler(req,res, next)).catch((err)=> next(err))
    }
}

export {asyncHandler}