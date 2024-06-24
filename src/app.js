const exress = require("express");
const userRouter = require("./routes/user.route.js");
const app = exress();

app.use(exress.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   console.log("Hi from middleware");
//   next();
// });
app.use("/api/users", userRouter);

module.exports = { app };
