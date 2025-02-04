const carts=require('../models/cartSchema')

//Add to CART
exports.addtoCart=async(req,res)=>{
    const{id,title,price,image,quantity}=req.body
    const userId=req.payload


    try {
        //Check if the product already in the cart
        const cartProduct = await carts.findOne({ id, userId })

        if (cartProduct) {
            cartProduct.quantity+=1
            cartProduct.grantTotal=cartProduct.quantity*cartProduct.price
            await cartProduct.save()
            res.status(200).json("Product Updated...")
        }
        else {
            const newProduct = new carts
            ({ id, title, price, image,quantity, userId })
            newProduct.grantTotal=newProduct.quantity*newProduct.price
            await newProduct.save()
            res.status(200).json("product added succeessfully")
        }
        //then,last routes set akuka
    }

    catch (err) {
        res.status(403).json("Error" + err)
    }
}


//getCART
exports.getCart = async (req, res) => {
    const userId = req.payload
    try {
        const cart = await carts.find({ userId })
        res.status(200).json(cart)
    }
    catch (err) {
        res.status(403).json("Error" + err)
    }

}


//delete CART

exports.deleteCart = async (req, res) => {
    const userId = req.payload
    //id edukunath requist inte parameterinn an/path parameterinn so req id varunath object format ayath kond athoine destructure cheyth  req.params  enn edkum.
    const { id } = req.params;
    try {
        const deleteItem = await carts.deleteOne({ id })
        //angane oru product delete aytund enkil  bakki ulla id yile  ellathinem frnt endil get cheyikanam
        if (deleteItem) {
            const cartItem = await carts.find({ userId })
            res.status(200).json(cartItem)
        }
    }
    catch (err) {
        res.status(403).json("Error" + err)
    }
}