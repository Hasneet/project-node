import express from 'express';
const userRoutes = express.Router();

userRoutes.post('/users/create', (req, res) => {
    // CREATE A  NEW USER
    const {
        firstname,
        lastname,
        mobile,
        email,
        password
    } = req.body;
    const user = {
        id: database.users.length + 1,
        firstname,
        lastname,
        mobile,
        email,
        password
    };
    console.log(database.users);
    database.users.push(user);
    console.log(database.users);
    return res.send('USER ADDED SUCCESSFULLY');
});

export default userRoutes;