import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()



AWS.config.update({
    region:'us-east-1',
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_KEY
})

const db = new AWS.DynamoDB.DocumentClient()


export {
    db
}

