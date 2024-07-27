import { db } from "../database/config.js"
import { fetchCategory } from "../helpers/fetchData.js"
import { customAlphabet } from 'nanoid';

export const productControllers = () =>{

    //route :/api/product/categories
    //desc  : get all categories
    //access: private
    const getCategories = async(req, res, next) => {

        const params = {
            TableName:'category'
        }
        try {

            const items = await db.scan(params).promise()

            return res.status(200).json({message:'categories fetched successfully',items})

        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    //route :/api/product/list
    //desc  : get all products by category
    //access: private
    const listProductsByCategory =async(req, res, next) => {
        try {
            const categoryId = req.query.categoryId

            const data = await fetchCategory(categoryId)
            return res.status(200).json({message:'sucecss',data})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    //route :/api/product/save
    //desc  : save products
    //access: private
    const saveProducts = async(req, res, next) => {
        try {
            const {productName, price, productImage, brand, categoryId} = req.body;
  
            const nanoid = customAlphabet('1234567890', 10);

            const id = Number(nanoid())

            const params = {
               
                Item: {
                    id:id,
                    productName:  productName ,
                    price:  price ,
                    productImage:  productImage ,
                    brand:  brand ,
                    categoryId: categoryId 
                },
                TableName: 'product'
            };



           await db.put(params).promise()

           return res.status(200).json({message:'Product saved successfully'})

            
            
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