import express from 'express';
import mongoose from'mongoose';
import env from 'dotenv';
const app = express();
const PORT = 3000;

app.use(express.json());
env.config({ debug: true });

console.log(process.env.MONGODBURI);

// mongoose.connect(process.env.MONGOURI).then(() => {
//     console.log("connected to mongoDB");
// }).catch((err) => {
//     console.log(err);
// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

export const viteNodeApp = app