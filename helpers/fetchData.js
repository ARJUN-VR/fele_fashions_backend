import { db } from "../database/config.js"

export const fetchCategory = async(categoryId) => {
    console.log('inside helper:', categoryId)
    const params = {
       
        Key:{
            "categoryId":categoryId,
            
        },
        TableName:'category'
    
    }
    try {

        const cats = await db.get(params).promise()
        console.log('datas',cats)
        return cats


        
    } catch (error) {
        console.log(error)
    }
}


export const fetchProducts = async(categoryId) => {
    const params = {
        Key:{
            categoryId:categoryId
        },
        TableName:'product'

    }
    try {
       return await db.query(params).promise()
        
    } catch (error) {

        console.log(error)
        
    }
}