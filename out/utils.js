import { LoyaltyUser } from "./enums.js";
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
const propertyContainer = document.querySelector(".properties");
const footerContainer = document.querySelector(".footer");
const reviewContainer = document.querySelector(".reviews");
const mainImageContainer = document.querySelector(".main-image");
const makeMultiple = (reviewCount) => {
    return reviewCount > 1 || !reviewCount ? "s" : "";
};
export const showReviewTotal = (value, name, isLoyaltyUser) => {
    reviewTotalDisplay.innerHTML = `
        ${value.toString()} review${makeMultiple(value)} | last reviewed by ${name} ${isLoyaltyUser === LoyaltyUser.GOLD_USER ? " ⭐" : ""}
    `;
};
export const populateUser = (isreturning, userName) => {
    if (isreturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
};
export const showDetails = (authorityStatus, properties) => {
    if (authorityStatus) {
        properties.map(property => {
            propertyContainer.innerHTML += `
                <div class="card">
                    ${property.title}
                    <img src=${property.image} width="100%"></img>
                    <div>${property.price} / night</div>
                </div>
            `;
        });
    }
};
export const showCurrentLocation = (currentLocation) => {
    currentLocation.map(location => footerContainer.innerHTML += `<span>${location} </span>`);
    footerContainer.innerHTML += "°C";
};
const getTopTwoReviews = (reviews) => {
    return reviews.sort((a, b) => b.stars - a.stars).slice(0, 2);
};
export const addReviews = (reviews) => {
    const topTwoReviews = getTopTwoReviews(reviews);
    topTwoReviews.map(review => {
        reviewContainer.innerHTML += `
            <div class="review-card">${review.stars} stars from ${review.name}</div>
        `;
    });
};
//# sourceMappingURL=utils.js.map