export interface RestaurantReadDto {
    id: string,
    name: string,
    location?: LocationReadDto,
}

export interface LocationReadDto {
    city?: string,
    state?: string,
    address?: string,
    country?: string,
}

export interface RestaurantCreateDto {
    name: string,
    location?: LocationReadDto,
}

export interface LocationCreateDto {
    city?: string,
    state?: string,
    address?: string,
    country?: string,
}