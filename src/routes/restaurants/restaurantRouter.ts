import { getMongo, MongoCollections } from '../../db/mongo';
import express from 'express';
import { ObjectId } from 'bson';
import Restaurant from 'models/restaurant';
import { requestToCreateDto, restaurantToReadDto } from './restaurantFormatter';
import { RestaurantCreateDto } from 'dtos/restaurantDtos';
const restaurantRouter = express.Router();

restaurantRouter.get('/', async (req, res) => {
    const [client, coll] = await getMongo(MongoCollections.Restaurants);
    const restaurants = await (await coll.find<Restaurant>({})).toArray();
    await client.close();
    res.send(restaurants.map(restaurantToReadDto));
});

restaurantRouter.post('/', async (req, res) => {
    let createDto: RestaurantCreateDto;
    try {
        createDto = requestToCreateDto(req.body);
    } catch(err: any) {
        res.status(400).send(err.message);
        return;
    }
    const [client, coll] = await getMongo(MongoCollections.Restaurants);
    //TODO: add user to restaurant
    const result = await coll.insertOne(createDto);
    const restaurant = await coll.findOne<Restaurant>({
        _id: result.insertedId,
    });
    await client.close();
    res.send(restaurantToReadDto(restaurant));
});

restaurantRouter.get('/:id', async (req, res) => {
    let _id: ObjectId;
    try {
        _id = new ObjectId(req.params.id);
    } catch(err: any) {
        res.status(400).send(err.message);
        return;
    }
    const [client, coll, db] = await getMongo(MongoCollections.Restaurants);
    const restaurant = await coll.findOne<Restaurant>({
        _id,
    });
    await client.close();
    if (restaurant){
        res.send(restaurantToReadDto(restaurant));
    }
    else {
        res.sendStatus(404);
    }
});

export default restaurantRouter;