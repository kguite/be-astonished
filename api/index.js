const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images"))); //image folder public

// mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  // multer storage in images folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => { // callback function
    cb(null, "images");
  },
  filename: (req, file, cb) => { // name we provide
    cb(null, req.body.name);
  },
}); 

// Multer upload ERROR HERE SOMEWHERE, FILES NOT UPLOADING?
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded.");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

const port = process.env.PORT || 5000
