import { Request } from "express";
import User from "../models/user";

declare interface AuthReuqest extends Request {
  user?: User;
}