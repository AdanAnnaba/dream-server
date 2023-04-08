const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/test.route");
const db = require("./Utils/dbConnect");
const viewCount = require("./midleware/middleware");
const app = express();
// const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(viewCount);

db();
app.use("/user", userRoute);

// app.listen(port, () => {
//   console.log("Server is running");
// });
