import { Request, Response, NextFunction } from "express";
import anaylzeCode from "../service/code.service";

const analyzeCodeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input = req.body.code;
  const results = anaylzeCode(input);
  return res.end(JSON.stringify(results));
};

export default analyzeCodeHandler;
