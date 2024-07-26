export const productControllers = () =>{

    const getCategories = async(req, res, next) => {
        try {

            return res.status(400).json({message:'getcat works'})
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    const listProductsByCategory = (req, res, next) => {
        try {
            return 'hello'
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    const saveProducts = (req, res, next) => {
        try {

            return 'hello'
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    return {
        getCategories,
        listProductsByCategory,
        saveProducts
    }

}