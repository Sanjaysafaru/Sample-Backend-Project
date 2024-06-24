const { app } = require("./app.js");

const connectDB = require("./db/index.js");

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running at port :3000");
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
