import { VoteTypes } from "./review";

export default interface Food {
    _id: string,
    name: string,
    restaurants: ShortRestaurant[],
}

export interface ShortRestaurant {
    _id: string,
    name: string,
}

export interface ShortReview {
    _id: string,
    userId: string,
    vote: VoteTypes,
}