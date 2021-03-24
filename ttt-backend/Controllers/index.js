const decode = require('../Utills/decode');
const encode = require('../Utills/encode');


exports.postEncode = async( req ,res ) => {
    try {
        const input = req.body.input;
        
        const output = encode(input);

        return res.status(200).json({
            output : output,
            message : "done"
        });
    }catch(err){
        console.log("Server Side Error!!");
        return res.status(500).json({
            message : "Server Side Error"
        });
    }
}


exports.postDecode = async( req ,res ) => {
    try{

    }catch(err){
        console.log("Server Side Error!!");
        return res.status(500).json({
            message : "Server Side Error!!"
        });
    }
}

exports.getHome = async( req , res ) => {

}
