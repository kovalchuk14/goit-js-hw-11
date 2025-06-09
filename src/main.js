import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import getImageById from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let form = document.querySelector(".form");

form.addEventListener("submit", submitForm);


function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let value = formData.get('search-text').trim();

    if (value == "") {
        alert("NONONO");
        return;
    }
    showLoader();
    clearGallery();

    getImageById(value)
        .then(response => response.data.hits)
        .then(response => {
            hideLoader();
            if (response.length == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                createGallery(response);
            }
        })
        .catch(error => console.log(error));

}