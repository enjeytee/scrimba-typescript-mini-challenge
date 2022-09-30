import { showReviewTotal, populateUser, showDetails, showCurrentLocation, addReviews } from "./utils.js";
import { reviews, you, properties, isLoggedIn, currentLocation } from "./constants.js";
import { Review, Property } from "./interfaces.js";
import { LoyaltyUser } from "./enums.js";

const btnReview = document.getElementById("btn-get-reviews") as HTMLButtonElement;
const mainImageContainer = document.querySelector(".main-image") as HTMLDivElement;

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, `${you.firstName} ${you.lastName}`);
showDetails(isLoggedIn, properties);
showCurrentLocation(currentLocation)
btnReview.addEventListener("click", () => {
    addReviews(reviews);
});

class MainProperty {
    reviews: Review[];
    src: string;
    title: string;
    constructor(reviews: Review[], src: string, title: string) {
        this.reviews = reviews;
        this.src = src;
        this.title = title;
    };
};
const mainProperty = new MainProperty(
    [{
        name: "Olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "12-04-2021",
    }], 
    "./images/italian-property.jpg", 
    "Italian House");
mainImageContainer.innerHTML += `
    <p>${mainProperty.title}</p>
    <img src=${mainProperty.src} width="100%"></img>
    <p>${mainProperty.reviews[0].date}</p>
`