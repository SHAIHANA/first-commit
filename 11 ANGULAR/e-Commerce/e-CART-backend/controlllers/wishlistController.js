const wishlists = require('../models/wishlistSchema')

//Add wishlist LOGIC
exports.addTowishlist = async (req, res) => {
    //data varunna format -request bodynn varunath
    const { id, title, price, image } = req.body
    //req payload for userId
    const userId = req.payload

    try {
        //Check each product already in the wishlist
        const wishlistproduct = await wishlists.findOne({ id, userId })

        if (wishlistproduct) {
            res.status(402).json("Product already in wishlist")
        }
        else {
            const newProduct = new wishlists({ id, title, price, image, userId })
            await newProduct.save()
            res.status(200).json("Product added successfully...")
        }
        //then,last routes set akuka
    }

    catch (err) {
        res.status(403).json("Erro" + err)
    }
}



//Get and display wishlist LOGIC

//Oru particular userinte products aanu kituka athin id vnm
//id kk vndi payload vnm--req.payload
//userId name=wishlist
//modelname=wishlists
exports.getwishlist = async (req, res) => {
    const userId = req.payload
    try {
        const wishlist = await wishlists.find({ userId })
        res.status(200).json(wishlist)
    }
    catch (err) {
        res.status(403).json("Error" + err)
    }

}


//Delete wishlist LOGIC
exports.deleteWishlist = async (req, res) => {
    const userId = req.payload
    //id edukunath requist inte parameterinn an/path parameterinn so req id varunath object format ayath kond athoine destructure cheyth  req.params  enn edkum.
    const { id } = req.params;
    try {
        const deleteItem = await wishlists.deleteOne({ id })
        //angane oru product delete aytund enkil  bakki ulla id yile  ellathinem frnt endil get cheyikanam
        if (deleteItem) {
            const wishlistItem = await wishlists.find({ userId })
            res.status(200).json(wishlistItem)
        }
    }
    catch (err) {
        res.status(403).json("Error" + err)
    }
}
