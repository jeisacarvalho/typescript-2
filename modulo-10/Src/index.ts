import express, {express, Request, Response} from 'express'; 
import helnet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Olá, Developers! Bem-vindos(as) ao Typescript! </h1>');
});

app.listen(port, () => console.log(`Server running on port ${port}`));