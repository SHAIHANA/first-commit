const express=require('express')
const productsController =require('../controlllers/productsController')
const userController =require('../controlllers/userController')
const wishlistController=require('../controlllers/wishlistController')
const cartController=require('../controlllers/cartController')
const router =express.Router()
const jwtMiddleware =require('../middlewares/jwtMiddleware')



//get all products
router.get('/allproducts',productsController.getallProducts)

//register
 router.post('/register',userController.registerAPI)
//login
 router.post('/login',userController.loginAPI)

 //view products
 router.get('/view/:id',productsController.getProductsById)

 //add to wishlist
router.post('/wishlist',jwtMiddleware,wishlistController.addTowishlist)
//get wishlist
router.get('/wishlist',jwtMiddleware,wishlistController.getwishlist)
//delete wishlist
router.delete('/wishlist/:id',jwtMiddleware,wishlistController.deleteWishlist)

//add to  cart
router.post('/cart',jwtMiddleware,cartController.addtoCart)
//get cart
router.get('/cart',jwtMiddleware,cartController.getCart)
//delete cart
router.delete('/cart/:id',jwtMiddleware,cartController.deleteCart)
//Increment CART item
router.get('/cart/:id',jwtMiddleware,cartController.IncrementCart )
module.exports=router