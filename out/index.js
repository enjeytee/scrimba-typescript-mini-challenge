import { showReviewTotal, populateUser, showDetails, showCurrentLocation, addReviews } from "./utils.js";
import { reviews, you, properties, isLoggedIn, currentLocation, mainProperty } from "./constants.js";
const btnReview = document.getElementById("btn-get-reviews");
const mainImageContainer = document.querySelector(".main-image");
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, `${you.firstName} ${you.lastName}`);
showDetails(isLoggedIn, properties);
showCurrentLocation(currentLocation);
btnReview.addEventListener("click", () => {
    addReviews(reviews);
});
mainImageContainer.innerHTML += `
    <p>${mainProperty.title}</p>
    <img src=${mainProperty.src} width="100%"></img>
    <p>Available by: ${mainProperty.reviews[0].date}</p>
`;
//# sourceMappingURL=index.js.map