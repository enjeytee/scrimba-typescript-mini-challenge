import { Permissions, LoyaltyUser } from "./enums.js";
import { MainProperty } from "./classes.js";
export const reviews = [
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
export const you = {
    firstName: "John",
    lastName: "Trajano",
    isReturning: true,
    age: 46,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
    permission: Permissions.ADMIN
};
export const properties = [
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
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        address: {
            street: 'Room 4',
            city: 'Malia',
            zipcode: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
export const mainProperty = new MainProperty([{
        name: "Olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "12-04-2021",
    }], "./images/italian-property.jpg", "Italian House");
export const isLoggedIn = true;
export const currentLocation = ["Pampanga, Philippines", "11:30 PM", 26];
//# sourceMappingURL=constants.js.map