import * as React from "react";
import { useEffect } from "react";

const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Pexels/JavaScript",
      Authorization: "563492ad6f9170000100000116c183775efb4c00bb2c03ca473bb6d4",
    },
  };

const getGalleryListings = (page, queryTerm) =>
    fetch(`https://api.pexels.com/v1/search?page=${page}&per_page=3&query=${queryTerm}`, options)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => console.log(error));

// const postCartListings = (listingId, auth) =>
//     fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
//         method: "POST",
//         body: JSON.stringify({
//             quantity: 1,
//             listingId,
//         }),
//         headers: {
//             accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${auth.accessToken}`,
//         },
//     }).then((res) => {
//         if (res.ok) {
//             return res.json();
//         }
//         throw new Error(res.statusText);
//     }).catch((err) => {
//         console.log(err);
//         if (err === "Unauthorized") {
//             auth.logout();
//         }
//     });;

// const deleteCartListings = (listingId, auth) =>
//     fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items/${listingId}`, {
//         method: "DELETE",
//         headers: {
//             accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${auth.accessToken}`,
//         },
//     }).then((res) => {
//         if (res.ok) {
//             return res.json();
//         }
//         throw new Error(res.statusText);
//     }).catch((err) => {
//         console.log(err);
//         if (err === "Unauthorized") {
//             auth.logout();
//         }
//     });;

export const useGalleryListings = () => {
    const [galleryListings, setGalleryListings] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false)
    const [page, setPage] = React.useState(1)
    const [queryTerm, setQueryTerm] = React.useState("sea")

    const loadGalleryListings = (page,queryTerm) => {
        setIsLoading(true);
        getGalleryListings(page,queryTerm)
            .then((data) => {
                if (data){
                    setPage(Number(data.page))
                    setGalleryListings(data.photos);
                }
                setIsLoading(false);
            });
    }
 
    useEffect(() => {
        loadGalleryListings(page, queryTerm);
    }, [page, queryTerm]);



    return {
        galleryListings,
        page, 
        setPage,
        queryTerm, 
        setQueryTerm,
        // addCartItem,
        // removeCartItem,
        // cartTotal,
        isLoading
    };
};
