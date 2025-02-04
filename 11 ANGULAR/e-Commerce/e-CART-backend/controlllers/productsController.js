const products = require('../models/productSchema')
const router = require('../Router/router')

//1-get all products
exports.getallProducts = async (req, res) => {
    try {
        const allproducts = await products.find( )
        res.status(200).json(allproducts)
        
    }
    catch (error) {
        res.status(401).json(error)
    }
}


//2-view particular products by id
 exports.getProductsById=async(req,res)=>{

    try{
        const {id}=req.params
        const viewproduct = await products.findOne({id})
        res.status(200).json(viewproduct)
    }
    catch(error){
res.status(401).json(error)
    }
 }


