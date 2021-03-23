const mongoose = require("mongoose");

const db_path = "mongodb://localhost:27017/inventario";
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//conectamos a mongo
mongoose.connect(db_path, config, (error) => {
  if (!error) {
    console.log("Successful connection");
  } else {
    console.log("Error connecting to database");
  }
});
