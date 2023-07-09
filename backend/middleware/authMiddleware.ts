import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

/**
 * Middleware function to authenticate requests using JWT token.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware to call.
 */
export default async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    // Get the token from the request cookies
    const token = req.cookies.token || req.headers.authorization;
    
    // Check if the token exists
    if (!token)
      return res.status(401).json({ error: "Token not found" });

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET!);

    // Call the next middleware
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
