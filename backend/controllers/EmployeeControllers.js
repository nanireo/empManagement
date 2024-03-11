//const contractors = require('../models/contractorModel');
const Employees = require('../models/employeeModel');

//get the Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employeeGetedData = await Employees.find();
    res.json(employeeGetedData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//adding new Employees to the Employees collection in DB - http method POST
exports.addEmployee  = async (req, res) => {
    try {
      const EmployeeAddedData = new Employees(req.body);
      await EmployeeAddedData.save();

      res.status(201).json({ success: 'Employees Added Successfully!..', data: EmployeeAddedData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };



  //get Employee by id - http method GET
exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employees.findOne({"_id" : id});

//console.log("after get employees employees controller backend ",employee);
    if (!employee) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



//deleteEmployees
exports.deleteEmployee = async (req, res,) => {
    try {
      await Employees.findByIdAndDelete(req.params.id);
      res.json('Employee Deleted Successfully!.');
    } catch (error) {
      res.status(400).json('Error: ' + error);
    }
  };
  
  
  //update Employee
  exports.updateEmployee = async (req, res) => {
  try {
    const employees = await Employees.findById(req.params.id);
    employees.EID = req.body.EID;
    employees.Name = req.body.Name;
    employees.Email = req.body.Email;
    employees.MobileNo = req.body.MobileNo;
    employees.Designation = req.body.Designation;
    employees.Gender=req.body.Gender;
    employees.Course=req.body.Course
  
  
    await employees.save();
    res.json('employee updated!');
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
  };

