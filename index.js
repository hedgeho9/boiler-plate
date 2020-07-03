const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hedgeho9:gpals09@cluster0-wmfz4.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("시발왜안돼"));

app.get("/", (req, res) => res.send("sayoko!"));

app.listen(port, () => console.log(`Example app listening on prot ${port}`));
