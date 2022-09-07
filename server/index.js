import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dontenv from "dotenv";
import postRoutes from "./routes/posts.js"

const app =express();
dontenv.config();

app.use(bodyParser.json({limit:"30mb",extented :true}));
app.use(bodyParser.urlencoded({limit:"30mb",extented :true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        author: "Oğuzhan Ağır",
        message: "Blog Projesi Server",
    });
});


app.use("/posts", postRoutes)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser : true,
    useUnifiedTopology :true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running port: ${PORT}`);
    })
})
.catch(error=>{
    console.log(error.message);
});
