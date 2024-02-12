const express = require("express");
const moongoose = require("mongoose");
const userRoute = require("./route/userRoute");
const app = express();
async function connectToDatabase() {
  try {
    await moongoose.connect("mongodb://127.0.0.1:27017/customer_care");
    console.log("connected to database");
  } catch (error) {
    console.log(`connection failed ${error.message}`);
  }
}
connectToDatabase()
app.use("/", userRoute.user_route);
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`server started at PORT:${PORT}`);
});
