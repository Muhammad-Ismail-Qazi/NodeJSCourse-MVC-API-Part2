const userModel = require('../models/user_model');

async function getData(req, res) {
    try {
        const users = await userModel.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getById(req, res) {
    const id = req.params.id;
    const singleData = await userModel.findById(id);   
    console.log(singleData);
    res.status(200).json({status:'success',data:singleData});
};

async  function createUser(req, res) {
    const body = req.body;
    const user = await userModel.create(body);
    res.status(201).json({stats:'success',data:user});
 
 }

 async function updateUserById(req, res) {
    const id =req.params.id;
    const result = await userModel.findByIdAndUpdate(id,{ jobTitle:userModel.jobTitle});
    res.status(200).json(result);

}

async function deleteUserById(req, res) {
    const user = await userModel.findByIdAndDelete(req.params.id,);
    return res.json({
        status: 'success', message: 'User deleted', data: user

    });
}

module.exports = {
    getData,
    getById,
    createUser,
    updateUserById,
    deleteUserById
}