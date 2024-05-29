const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/route");

const app = express();
const PORT = 3000; 

app.use(cors()); 
app.use(express.json());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("Namaste Weather");
});

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`);
});
