const User = require("../models/userSchema")
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try {
        const { name, email, phone, password, image, age } = req.body;
        // console.log(req.body);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: ['Email already exists'] });
        }

        const existingPhoneNumber = await User.findOne({ phone });
        if (existingPhoneNumber) {
            return res.status(400).json({ message: ['Phone Number already exists'] });
        }

        
            const hashPassword = await bcrypt.hash(password,10)
            // password = hashPassword


        const registerUser = new User({
            name, email, phone, password:hashPassword, image, age
        });

        try {

            await registerUser.save();

            return res.status(200).json({
                message: ['Registered successfully'],
                userData: registerUser,
                token: await registerUser.generateToken(),
                userID: registerUser._id.toString()
            });
        } catch (error) {
            return res.status(500).json({
                message: ['Error occurred while registering user'],
                error: error.message
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: ['Unexpected error occurred'], error: error.message });
    }
};



const login = async (req, res) => {
    try {
        const {email , password}= req.body
        // //console.log(req.body)
        // //console.log("email"+ email)
        // //console.log(password)

        const userExist = await User.findOne({ email })
        // //console.log("user" + userExist)

        if (!userExist) {
            res.status(404).json({ message: ["Invalid password or email "] })
            return ; 
        }

        //directly password match krwa liya 
        const isMatch = await bcrypt.compare(password,userExist.password )


        if (isMatch) {
            res.status(200).json({
                message: ['login successful'],
                // data: user,
                token: await userExist.generateToken(),
                userID: userExist._id.toString()
            });

        }
        else {
            res.status(404).json({ message: ["Invalid password or email "] })

        }

    } catch (error) {
        console.log(error)
        // res.status(404).send(error)
        // // res.status(404).json({ message: "Server prblm" })


    }
}

const getUser = async (req, res) => {
    try {
                // console.log(req.user)

        const userData = req.user;
        // console.log(userData);

        return res.status(200).json({ userData })
        // return res.status(200).json({message:"hi user"})


    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({}) ; 
        return res.status(200).json({message:"All users found" , 
            allusers : allUsers
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {register,getAllUsers,login,getUser}