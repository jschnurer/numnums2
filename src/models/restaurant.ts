import { ObjectId } from "bson";

export default interface Restaurant {
    _id: ObjectId,
    name: string,
    location?: Location,
}

export interface Location {
    city: string,
    state?: string,
    address?: string,
    country?: string,
}