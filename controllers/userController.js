const User = require('../models/User');

exports.signup = async (req, res) => {   
    const { name} = req.body;
    try {    
      user = new User({
        name    
      });
      const result = await user.save();  
      return res.json(result);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }