const user = require('../../models/user');
exports.createUser = function (req, res, next) {
    const {name,email,password, age, role, joiningDate, balance, id} =req.body;
    let __user = new user(
        {
            name,
            age,
            email,
            password,
            role,
            joiningDate,
            balance,
            id
        }
    );

    __user
    .save()
    .then(() =>res.status(200).json({"msg": "user created succesfully"}) )
};