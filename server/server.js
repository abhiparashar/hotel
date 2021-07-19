const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const authRoute = require("./routes/auth")
// const {readdirSync} = require("fs")
dotenv.config()

//db connection
mongoose
  .connect(
    process.env.DATABASE,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    }
  )
  .then(console.log("DATABASE CONNECTED....")).catch(err=>console.log(err));

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use("/api",authRoute)
// readdirSync("./routes").map(r=>app.use("/api",require(`./routes/${r}`)))

const port = process.env.PORT || 8000
//port connection
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
