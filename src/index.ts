import bodyParser from "body-parser";
import express, { NextFunction, Response } from "express";
import path from "path";
import "./models";
import Cart from "./models/cart";
import User from "./models/user";
import pageRoutes from "./routes";
import { AuthReuqest } from "./types/request";
import sequelize from "./utils/database";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  "/",
  // requestHandler(
  async (req: AuthReuqest, res: Response, next: NextFunction) => {
    const [user] = await User.findOrCreate({
      where: {
        username: "tampt",
        password: "123456",
      },
    });
    if (user) {
      req.user = user;
    }
    next();
  }
  // )
);

app.use("", pageRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log("sync db success");
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connection success");
    app.listen(4000, () => console.log("server is running on port: ", 4000));
  })
  .catch((e) => {
    console.log(e);
  });
