

// const fs= require('fs');

// fs.writeFileSync('myText.txt','I love coding')


// const greet =require('./ownModules')
// console.log(greet('Shana'));




//1 importing express
const  express =require("express")

//2create an app in backend using express 
const app =express()

//Returns middleware  that only parses json
app.use(express.json())


//5 getting data

let products=[
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
     
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      
    },
    
  ]
  
// GET  //api call for getting data from server http://localhost:3000/api/products
  app.get('/',(req,res)=>{
    res.send("Hello world")
})

//getting all data from the array : http://localhost:3000/api/posts
app.get('/api/products',(req,res)=>{
    res.status(200).json(products)
})

// //POST-pushing//adding data to the array :  http://localhost:3000/api/posts
app.post('/api/products',(req,res)=>{
    const newProduct ={
       
        id:req.body.id,
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        image:req.body.image
    }
    products.push(newProduct)//adding new data to the array
    res.status(200).json(products)
})


// // //update the array of data :http://localhost:3000/api/products/1
app.put('/api/prodcuts/:id',(req,res)=>{
    const post = products.find((p)=>p.id === parseInt(req.params.id))
   if(!post){
    res.status(404).send("products not found")
   }
else{
    post. id =req.body.id,
    post. title=req.body.title,
    post.price=req.body.price,
    post.description=req.body.description,
    post.category=req.body.category,
    post.image=req.body.image
    
    res.status(200).json(products)
}
})

//delete a product from the array :http://localhost:3000/api/product/1
app.delete('/api/products/:id',(req,res)=>{
    const pid = parseInt(req.params.id) 
    const post = products.find((p)=>p.id === pid)
    if(!post){
        res.status(404).send("No product found")
    }
    else{
        products =products.filter((P)=>P.id !== pid)
        res.status(200).json(products)
    }
})




//////////////////////

//3 port creation
const PORT =3000

//4 create listen
app.listen(PORT,()=>{
    console.log("Listening On Port" + PORT);
    
})