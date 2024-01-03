import { Request, Response } from "express";

export const getHome = async (req: Request, res: Response) => {
    res.send({ status: 'success', message: 'Welcome to the home page'});
}