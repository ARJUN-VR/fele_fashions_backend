import express from 'express'
import productRoutes from './routes/productRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'
import { apiValidator } from './middleware/apiKeyValidator.js'
import dotenv from 'dotenv'


dotenv.config()




const app = express()

const port = 4500
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/product',apiValidator, productRoutes)
app.use(errorHandler)





app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})