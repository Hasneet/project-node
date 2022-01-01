import express from 'express';
import userRoutes from './routes/user.js';
const server = express();
server.use(express.json());

global.database = {
    users: []
};

server.use('/', userRoutes);


server.listen(3000, () => {
    console.log(`Server running on port 3000`);
});