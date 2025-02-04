
// const fs= require('fs');

// fs.writeFileSync('myText.txt','I love coding')


// const greet =require('./ownModule')
// console.log(greet('SHAIHANA'));


//1 importing express

const express = require("express")

//2 creating an app in backend using express
const app = express()


//Returns middleware  that only parses json
app.use(express.json())



// 5 getting data
app.get('/',(req,res)=>{
    res.send("Hello world!")
})

let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]
//api call for getting data from server http://localhost:3000/
app.get('/',(req,res)=>{
    res.send("Hello World")
})

//getting all data from the array : http://localhost:3000/api/posts
app.get('/api/posts',(req,res)=>{
    res.status(200).json(posts)
})


//adding data to the array :  http://localhost:3000/api/posts
app.post('/api/posts',(req,res)=>{
    const newPost ={
        userId :req.body.userId,
        id:req.body.id,
        title:req.body.title,
        body:req.body.body
    }
    posts.push(newPost)//adding new data to the array
    res.status(200).json(posts)
})


//update the array of data :http://localhost:3000/api/posts/1
app.put('/api/posts/:id',(req,res)=>{
    const post = posts.find((p)=>p.id === parseInt(req.params.id))
   if(!post){
    res.status(404).send("post not found")
   }
else{
    post. userId =req.body.userId,
    post.id=req.body.id,
    post. title=req.body.title,
    post.body=req.body.body
    res.status(200).json(posts)
}
})

//delete a post from the array :http://localhost:3000/api/posts/1
app.delete('/api/posts/:id',(req,res)=>{
    const pid = parseInt(req.params.id) 
    const post = posts.find((p)=>p.id === pid)
    if(!post){
        res.status(404).send("No post found")
    }
    else{
        posts =posts.filter((P)=>P.id !== pid)
        res.status(200).json(posts)
    }
})


////////////////////
//3 port  creation
const PORT =3000

//4 create listen
app.listen(PORT,()=>{
    console.log("LISTENING on port" + PORT);
    
})