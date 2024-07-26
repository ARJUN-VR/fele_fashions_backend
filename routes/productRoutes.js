import express from 'express'
import { productControllers } from '../controllers/productController.js'

const routes = express.Router()

const controller = productControllers()

routes.get('/categories', controller.getCategories)
routes.get('/list', controller.listProductsByCategory)
routes.post('/save', controller.saveProducts)



export default routes