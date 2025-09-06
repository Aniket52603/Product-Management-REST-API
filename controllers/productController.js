const product =require('../models/productModel');

const getAllProduct  = async (req,res) =>{
    try{
        const allproduct = await product.find();
        if(!product || allproduct.length==0){
            return res.status(404).json({
                message : "No product found"
            })
        }
        res.status(200).json({
            products: allproduct
            
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message :err.message

        })
    }
}


const newProduct = async(req,res)=>{
   try{ const {name,price,description,category} = req.body;
    const newProduct = new product({name,price,description,category});
    await newProduct.save();
    res.status(200).json({
        product:newProduct
    })
}catch(err){
        res.status(500).json({
            success:false,
            message :err.message

        })
    }
}

const updateProduct = async(req,res)=>{
    try{
    const {id} = req.params;
    const  {name,price,description,category} = req.body;
    const updatedProduct = await product.findByIdAndUpdate(id,{name,price,description,category},{new:true});

    res.status(200).json({
        product :updatedProduct
    })

    }catch(err){
        res.status(500).json({
            success:false,
            message :err.message

        })
    }
}

const deleteProduct = async(req,res)=>{
    try{
    const {id} = req.params;
    const  {name,price,description,category} = req.body;
    const deletedProduct = await product.findByIdAndDelete(id,{name,price,description,category});

    res.status(200).json({
        success:true,
        product : deletedProduct
    })

    }catch(err){
        res.status(500).json({
            success:false,
            message :err.message

        })
    }
}

module.exports ={getAllProduct , newProduct,updateProduct ,deleteProduct};