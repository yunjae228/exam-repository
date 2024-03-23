import {Request, Response, NextFunction} from 'express';

export async function post(req: Request,
                           res: Response,
                           next: NextFunction) {
    try {
        const postName = req.body.postName

        res.status(200).json({ post: postName})
    } catch (error) {
        console.log(error)
        res.status(404).json({message: 'resource Not Found'})
    }
}