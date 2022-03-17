import express from 'express';
import testRouter from './routes/test';
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/test', testRouter);

app.listen(port, () => {
    console.log('started listening.....');
});