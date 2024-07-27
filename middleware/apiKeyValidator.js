
//middleware to validate api request
export const apiValidator = async(req, res, next) => {
    try {

        const apiKey = req.headers['x-api-key']

        if(!apiKey) return res.status(403).json({message:'unauthorized'})

        next()


        
    } catch (error) {

        console.log(error)
        
    }
}