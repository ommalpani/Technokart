import mongoose from 'mongoose'


const spec = mongoose.Schema({
    hdd: String,
    ram: String,
    manufacturer: String,
    model: String,
    screen_size: String,
    graphics: String,
    driver_size: String,
    output: String
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    category: String,
    price: {
        type: Number,
    },
    image: String,
    quantity :{type : Number , default : 1},
    specs: spec
})


const user = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    address: String,
    city : String , 
    state : String,
    pincode: String,
    contact: String,

    cart : [productSchema],
    wishlist: [productSchema]
})

export const UserModel = mongoose.model("UserModel", user);
export const ProductModel = mongoose.model('ProductSchema', productSchema);
