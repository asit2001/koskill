import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel, { userValidation } from "../model/userModel";

/**
 * Creates a new user account.
 * @param req - The request object containing the user data.
 * @param res - The response object.
 */
export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body;
  try {
    const validate = userValidation({ name, email, password });
    if (validate.error)
      return res.status(400).json({ message: validate.error.message });

    // Check if email already exists
    let user = await userModel.findOne({ email });
    if (user) return res.status(409).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.HASH_ROUND)
    );

    // Create a new user
    await userModel.create({
      email,
      name,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Logs in a user.
 * @param req - The request object containing the login credentials.
 * @param res - The response object.
 */
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Missing email or password fields" });

    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    // Check if the password is valid
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid email or password" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);

    // Set the token as a cookie
    res
      .cookie("token", token, {
      sameSite:"none",
      secure:true,
      maxAge:60 * 60 * 1000,
      });
      res.json({ name:user.name,token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Logs out a user by clearing the token cookie.
 * @param req - The request object.
 * @param res - The response object.
 */
export async function logOut(req: Request, res: Response) {
  try {
    // Clear the token cookie
    res.clearCookie("token").json({ message: "User successfully logged out" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
