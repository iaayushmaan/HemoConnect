const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config(); //in the root

//MongoDB connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json()); //to handle json response in our application
app.use(cors());
app.use(morgan("dev")); //Which url hit and response on developer console

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
//Test route
app.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to BLOOD BANK",
  }); //status tells the staus of a route 200 success
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Listening On Port ${process.env.PORT}`.bgBlue.white);
});
