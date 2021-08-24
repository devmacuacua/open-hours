const OpenHour = require('../models/OpenHour');

exports.create = async (req,res)=>{
        const {day, startTime, endTime } = new OpenHour(req.body);       
        try {    

            openHour = new OpenHour({
                day, 
                startTime, 
                endTime, 
                user: req.params.userId    
            });
            const result = await openHour.save();  
            return res.json(result);
      
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
          }
 };

exports.read = async(req,res)=>{
    try {
        const openHours =  await OpenHour.findOne({  user: req.params.userId    });
        return res.json(openHours)

    } catch(err){
        console.log(err);
        //res.status(500).send('An Error Ocurred');
    }; 
}

