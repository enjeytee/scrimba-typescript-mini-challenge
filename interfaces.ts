import { LoyaltyUser } from "./enums.js";
import { Price, Country } from "./types.js";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
};

export interface Property {
    image: string;
    title: string;
    price: Price // YOU CAN ALSO USE "45 | 30 | 25"
    address: {
        street: string;
        city: string;
        zipcode: number | string;
        country: Country // YOU CAN ALSO USE "Colombia" | "Poland" | "United Kingdom"
    };
    contact: [number, string];
    isAvailable: boolean 
}
// (any | {
//     name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string;
//     description: string;
// } | {
//     name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string;
// })[]