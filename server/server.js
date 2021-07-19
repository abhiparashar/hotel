const express = require("express");
const app = express();
const mongoose = require("mongoose")

//db connection
mongoose
  .connect(
    "mongodb+srv://abhishek:abhi1711@cluster0.eajas.mongodb.net/hotel-booking?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    }
  )
  .then(console.log("connected")
  .catch((err) => console.log(err)));

app.get("/", (req, res) => {
  res.send("abhishek parashar");
});

app.listen(8000, () => {
  console.log("server is listening at port 8000");
});
