const t_login = require('../models/loginModel');

exports.login = async (req, res) => {
  //const { userName , pwd } = req.body;
  try {
    //console.log("Request Body:", req.body);
    const loginData = await t_login.findOne(req.body);

    console.log("loginData",loginData);

    if (loginData) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

