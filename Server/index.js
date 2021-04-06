import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { ProductModel , UserModel } from './models/index.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit : "100mb" , extended : true}));
app.use(bodyParser.urlencoded({ limit : "100mb" , extended : true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.set('useFindAndModify' , false);

app.get('/' , (req , res) => {
    res.send("hello to technokart!!!")
})



app.post('/product' , async (req , res) => {
    const product = req.body;
    const new_product = new ProductModel(product);
    try{
        await new_product.save();
    }
    catch(err)
    {
    }
})

app.get('/product' , async (req , res) => {

    try{
        const all_products = await ProductModel.find();
        res.status(200).send(all_products);
    }
    catch(err)
    {
        res.status(401).send(err);
    }
})



app.post('/register' , async (req, res)=>{
    const user = {...req.body , address : '' , pincode : '' , contact : ''};
    try{
        const retrived_user = await UserModel.find({username : user.username})
        if(retrived_user.length == 0){
            const new_user = new UserModel(user);
            new_user.save();
            res.status(202).send("user_created")
        }
        else{
            res.status(201).send("user_present")
        }
    }
    catch(err){
        res.status(404).json(err);
    }
})


app.post('/login', async (req,res)=>{
    const user = req.body;
    try{
        const logged_user = await UserModel.find({ username : user.username , password : user.password})
        if(logged_user.length == 0){
            res.status(202).json("invalid_credentials")
        }
        else{
            res.status(202).json(logged_user);
        }
    }
    catch(err){
        res.status(404).json(err);
    }
})


app.post('/update', async (req,res) => {
    const user = req.body;
    const id = user._id;

    try{
        const {data} = await UserModel.findByIdAndUpdate(id ,  {
            email : user.email,
            address : user.address,
            city : user.city,
            state : user.state,
            pincode : user.pincode,
            contact : user.contact,
            cart : user.cart , 
            wishlist : user.wishlist
        })
        res.status(200).send(data);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
})


mongoose.connect(process.env.CONNECTION_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then( ()=>{
    app.listen(PORT , ()=> {console.log(`Server running on port : ${PORT}`)});
}).catch( error  => { console.log(error)})
