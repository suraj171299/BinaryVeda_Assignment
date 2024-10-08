import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import userRoutes from './routes/user.route.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/v1/api/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to BinaryVeda Assignment')
})


app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on PORT: ${PORT}`);
})