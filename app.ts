import express, {NextFunction, Request, Response} from 'express';
import postRouter from './src/router/post.js'

const app = express()
const port = 3000
app.use(express.json());


app.use('/', postRouter);


app.use((req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(404).send({message: 'Not Found'});
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    res.sendStatus(500);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})