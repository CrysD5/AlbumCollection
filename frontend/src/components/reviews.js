 import * as CONSTANTS from "./constants";
 import api from "../api/api-actions";
 import reviewDetails from "./reviewDetails";

 export default {
     displayReviews, 
     setupReviewLinks
 }

 function displayReviews(reviews) {
    return `
    <section id='addReview'>
        <label><strong>Name: </strong></label>
        <input type='text' id='reviewerName' placeholder='Enter the your name.' />
        <button id='btnAddReview'>Add Review</button>
    </section>

   
    <ol>
        ${reviews.map(review => {
            return `
                <li>
                    <h4>
                        <span class="reviewerName">${review.reviewerName}</span>
                        <input type='hidden' value='${review.id}' />
                    </h4>
                </li>
                
            `;
        }).join('')}
    </ol>
    `;
 }
 
 function setupReviewLinks(){
     let reviewLinks = document.querySelectorAll(".reviewrName");
     reviewLinks.forEach(reviewLink => {

         reviewLinks.addEventListener("click", function(evt) {

            let reviewId = this.nextElementSibling.value;
            console.log("Review ID: " + reviewId ); 

            api.getRequest(CONSTANTS.ReviewAPIURL + reviewId, data => {
                console.log(data);
                CONSTANTS.content.innerHTML = reviewDetails.ReviewDetails(data);
            });
         });
     });
 }

