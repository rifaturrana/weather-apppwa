const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: __dirname + "/.env" });
app.use(cors());

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/history", require("./api/route"));

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log("APP is Running on PORT " + PORT);
  mongoose.connect(
    "process.env.MONGO_URL",
    { useNewUrlParser: true },
    () => {
      console.log("Database Connected");
    }
  );
});
