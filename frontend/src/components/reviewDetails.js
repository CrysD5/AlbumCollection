 import * as CONSTANTS from "./constants";
 import api from "../api/api-actions";
 import reviews from "./reviews";

 export default {
     ReviewDetails
 }

 function ReviewDetails(review) {
     return ` 
    <h1>Review Details</h1>
    <ul>

    <h4>Reviewer Name: ${review.reviewerName}</h4>
    <p></p>

    
    <li> Album: ${review.albumId}</li>
    <ol>
    <li> Album Reviews: ${albumId.reviews.map(review => {
                return `
                    <li>${review.content}</li> 

               `


            }).join('')
        }
        </ol>

    </ul>       
    
   
    <ol>
    </ol>
    `
 }