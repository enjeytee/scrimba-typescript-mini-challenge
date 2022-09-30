import { Permissions, LoyaltyUser } from "./enums.js";
import { Property } from "./interfaces.js";

export const reviews: (any | { // REMINDER: AVOID USING "ANY" TYPE
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
} | {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
})[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '27-03-2021',
    },
];

export const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
    permission: Permissions
} = {
    firstName: "John",
    lastName: "Trajano",
    isReturning: true,
    age: 46,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
    permission: Permissions.ADMIN
};

export const properties: Property[] = [
    {
        image: "./images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        address: {
            street: "Shack 37",
            city: "Bogota",
            zipcode: 45632,
            country: "Colombia"
        },
        contact: [+1123495082908, "marywinkle@gmail.com"],
        isAvailable: true
    },
    {
        image: "./images/poland-property.jpg",
        title: "Polish Cottage",
        price: 30,
        address: {
            street: "No. 23",
            city: "Gdansk",
            zipcode: "ABC123",
            country: "Poland"
        },
        contact: [+1123495082907, "garydavis@hotmail.com"],
        isAvailable: false
    },
    {
        image: "./images/london-property.jpg",
        title: "London Flat",
        price: 25,
        address: {
            street: "Flat 15",
            city: "London",
            zipcode: 35433,
            country: "United Kingdom"
        },
        contact: [+1123495082906, "andyluger@aol.com"],
        isAvailable: true
    }
];

export const isLoggedIn: boolean = true;

export const currentLocation: [string, string, number] = ["Pampanga, Philippines", "11:30 PM", 26]