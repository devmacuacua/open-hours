const OpenHour = require('../models/OpenHour');

exports.create = (req,res)=>{
  
        const newOpneHour = new OpenHour(req.body);       
         newOpneHour.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }        
        res.json({data})
    });
 };



exports.read = async(req,res)=>{
    try {
        const openHours =  await OpenHour.findOne({userId:req.params.userId});
        return res.json(openHours)
    } catch(err){
        console.log(err);
        //res.status(500).send('An Error Ocurred');
    }; 
}


exports.list = async (req,res)=>{
    try {
        const openHours = await OpenHour.find();
       return res.json(openHours)
    } catch(err){
        console.log(err);
        //res.status(500).send('An Error Ocurred');
    }; 
}
