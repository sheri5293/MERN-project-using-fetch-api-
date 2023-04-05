const mongoose = require("mongoose"); // AFter node update 18.10 then use this local host//
mongoose
  .connect("mongodb://127.0.0.1:27017/tableregister", {
    useUnifiedTopology: true,
  })
  .then(() => {
    // promise return true or false

    console.log("connection is setup");
  })
  .catch((e) => {
    console.log("connection is not setup");
  });

module.exports = mongoose;
