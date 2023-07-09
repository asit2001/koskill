import { Request, Response, NextFunction } from "express";

/**
 * Middleware function to handle invalid JSON syntax errors.
 * @param error - The error object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next Middleware to call.
 */
export default function invalidJson(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof SyntaxError && "body" in error) {
    // If the error is a SyntaxError and "body" property exists, it indicates invalid JSON syntax
    res.status(400).json({ message: "Invalid JSON" });
  } else {
    // Call the next Middleware to continue processing the request
    next();
  }
}
