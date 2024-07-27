import { db } from "../database/config.js"


export const fetchCategory = async(categoryId) => {

    const params = {
        TableName: 'category', 
        Key: {
            categoryId: Number(categoryId) 
        }
    };

    try {

        const categoryData = await db.get(params).promise()
        return categoryData

    } catch (error) {
        console.log(error)
    }
}


export const fetchProducts = async(categoryId) => {
    
    const params = {
        TableName:'product',
        FilterExpression: 'categoryId = :categoryId',
        ExpressionAttributeValues: {
            ':categoryId': categoryId
        }

    }
    try {
       return await db.scan(params).promise()
        
    } catch (error) {

        console.log(error)
        
    }
}