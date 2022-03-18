import express from 'express';
import restaurantRouter from './routes/restaurants/restaurantRouter';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/restaurants', restaurantRouter);

app.listen(port, () => {
    console.log('started listening.....');
});