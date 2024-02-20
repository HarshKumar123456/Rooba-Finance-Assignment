import User from "../models/users.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password");
        return res.status(200).json({
            success: true,
            message: "Successfully got the users.",
            users,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting user.",
            error: error,
        });
    }
};


const createUser = async (req, res) => {
    const { name, email, country, age, password } = req.body;
    const newUser = {
        name: name,
        email: email,
        country: country,
        age: age,
        password: password,
    };


    try {
        const createdUser = await new User(newUser).save();

        return res.status(201).json({
            success: true,
            message: "Created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating user.",
            error: error,
        });
    }
};
const updateUser = async (req, res) => {
    const { name, password, email, age, country } = req.body;
    const newUser = {
        name: name,
        email: email,
        country: country,
        age: age,
        password: password,
    };

    try {
        const updatedDetails = await User.findOneAndUpdate({ _id: req.params.id }, { ...newUser });
        const { name, email, country, age } = updatedDetails;
        return res.status(200).json({
            success: true,
            message: "Updated successfully",
            name, email, country, age,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in updating user.",
            error: error,
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const deletedDetails = await User.findOneAndDelete({ _id: req.params.id });
        const { name, email, country, age } = deletedDetails;

        return res.status(200).json({
            success: true,
            message: "Deleted successfully",
            name, email, country, age,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in updating user.",
            error: error,
        });
    }
};


export { getUsers, createUser, updateUser, deleteUser };