import { ObjectId } from "bson";
import { RestaurantCreateDto, RestaurantReadDto } from "dtos/restaurantDtos";
import Restaurant from "models/restaurant";

export function restaurantToReadDto (item: Restaurant): RestaurantReadDto {
    return {
        id: item._id.toString(),
        name: item.name,
        location: item.location
            ? {
                address: item.location.address,
                city: item.location.city,
                state: item.location.state,
                country: item.location.country,
            }
            : undefined,
    }
}

export function requestToCreateDto (item: Partial<RestaurantCreateDto>): RestaurantCreateDto {
    if (!item) {
        throw new Error("A request body is required.");
    }
    if (!item.name) {
        throw new Error("The property 'name' is required.");
    }
    if (item.location && !item.location.city) {
        throw new Error("The property 'location.city' is required.");
    }
    return {
        name: item.name,
        location: item.location
            ? {
                address: item.location.address,
                city: item.location.city,
                state: item.location.state,
                country: item.location.country,
            }
            : undefined,
    }
}