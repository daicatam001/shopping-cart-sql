import { NextFunction, Request, Response } from "express";

type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const requestHandler = (handler: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handler(req, res, next);
};
