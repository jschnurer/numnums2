import { getMongo, MongoCollections } from '../db/mongo';
import express from 'express';
const testRouter = express.Router();

testRouter.get('/', (req, res) => {
    res.send('this is a test');
});

testRouter.get('/cats', async (req, res) => {
    const searchTerm = req.query.searchTerm;
    console.log(searchTerm);
    const [client, coll, db] = await getMongo(MongoCollections.Reviews);
    const cat = await coll.findOne({
        cat: searchTerm
    });
    await client.close();
    res.send(cat);
});

testRouter.get('/cats/:cat', async (req, res) => {
    const searchTerm = req.params.cat;
    console.log(searchTerm);
    const [client, coll, db] = await getMongo(MongoCollections.Reviews);
    const cat = await coll.findOne({
        cat: searchTerm
    });
    await client.close();
    if (cat){
        res.send(cat);
    }
    else {
        res.sendStatus(404);
    }
});

export default testRouter;