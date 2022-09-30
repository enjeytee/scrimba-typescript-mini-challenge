import { LoyaltyUser } from "./enums.js";
import { Review } from "./interfaces.js";
import { Property } from "./interfaces.js";

const returningUserDisplay = document.querySelector("#returning-user") as HTMLSpanElement;
const userNameDisplay = document.querySelector("#user") as HTMLSpanElement;
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLHeadingElement;
const propertyContainer = document.querySelector(".properties") as HTMLDivElement;
const footerContainer = document.querySelector(".footer") as HTMLDivElement;
const reviewContainer = document.querySelector(".reviews") as HTMLDivElement;

const makeMultiple = (reviewCount: number) : string  => {
    return reviewCount > 1 || !reviewCount ? "s" : ""
};
export const showReviewTotal = (value: number, name: string, isLoyaltyUser: LoyaltyUser) => {
    reviewTotalDisplay.innerHTML = `
        ${value.toString()} review${makeMultiple(value)} | last reviewed by ${name} ${isLoyaltyUser === LoyaltyUser.GOLD_USER ? " ⭐" : ""}
    `;
};
export const populateUser = (isreturning: boolean, userName: string) => {
    if (isreturning) {
        returningUserDisplay.innerHTML = "back"
    }
    userNameDisplay.innerHTML = userName;
};
export const showDetails = (authorityStatus: boolean | Permissions, properties: Property[]) => {
    if (authorityStatus) {
        properties.map(property => {
            propertyContainer.innerHTML += `
                <div class="card">
                    ${property.title}
                    <img src=${property.image}></img>
                    <div>${property.price} / night</div>
                </div>
            `
        });
    }
};
export const showCurrentLocation = (currentLocation: [string, string, number]) => {
    currentLocation.map(location => footerContainer.innerHTML += `<span>${location} </span>`)
    footerContainer.innerHTML += "°C"
};

const getTopTwoReviews = (reviews: Review[]) => {
    return reviews.sort((a, b) => b.stars - a.stars).slice(0, 2);
};

export const addReviews = (reviews: Review[]) : void => {
    const topTwoReviews = getTopTwoReviews(reviews);
    topTwoReviews.map(review => {
        reviewContainer.innerHTML += `
            <div class="review-card">${review.stars} stars from ${review.name}</div>
        `
    })
};



