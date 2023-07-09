import { Request, Response } from "express";
import CRMModel, { crmValidation } from "../model/CRMModel";

/**
 * Retrieves all CRM data.
 * @param req - The request object.
 * @param res - The response object.
 */
export async function getCRM(req: Request, res: Response) {
  try {
    const data = await CRMModel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * Creates a new CRM entry.
 * @param req - The request object containing the CRM data.
 * @param res - The response object.
 */
export async function createCRM(req: Request, res: Response) {
  try {
    // Validate the request body
    const validation = crmValidation(req.body);
    if (validation.error)
      return res.status(400).json({ message: validation.error.message });

    // Create a new CRM entry
    const data = await CRMModel.create(req.body);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * Updates a CRM entry by ID.
 * @param req - The request object containing the CRM data and ID.
 * @param res - The response object.
 */
export async function updateCRM(req: Request, res: Response) {
  try {
    const { id, ...rest } = req.body;
    if (!id) return res.status(400).json({ message: "id is not present" });

    // Update the CRM entry by ID
    const data = await CRMModel.findByIdAndUpdate(
      id,
      {
        ...rest,
      },
      { new: true }
    );

    if (!data) return res.status(400).json({ message: "invalid id" });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * Deletes a CRM entry by ID.
 * @param req - The request object containing the ID.
 * @param res - The response object.
 */
export async function deleteCRM(req: Request, res: Response) {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ message: "id is not present" });

    // Delete the CRM entry by ID
    const data = await CRMModel.deleteOne({ _id: id }, { new: true });

    if (data.deletedCount === 0)
      return res.status(400).json({ message: "invalid id" });

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
