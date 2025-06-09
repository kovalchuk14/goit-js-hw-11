import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import getImagesByQuery from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let form = document.querySelector(".form");

form.addEventListener("submit", submitForm);


function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let value = formData.get('search-text').trim();

    if (value == "") {
        iziToast.error({
            title: 'Error',
            message: 'request can`t be empty'
        });
        return;
    }
    showLoader();
    clearGallery();

    getImagesByQuery(value)
        .then(response => {
            if (response.length == 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                createGallery(response);
            }
        })
        .catch(error =>
            iziToast.error({
                title: 'Error',
                message: `${error}`,
            })
        )
        .finally(() => {
            hideLoader();
        });

}