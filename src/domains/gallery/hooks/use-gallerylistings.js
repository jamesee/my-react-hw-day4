import * as React from "react";
import { useEffect } from "react";

// const options = {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "User-Agent": "Pexels/JavaScript",
//       Authorization: "563492ad6f9170000100000116c183775efb4c00bb2c03ca473bb6d4",
//     },
//   };

const getGalleryListings = (page, queryTerm, signal) =>
    fetch(`https://api.pexels.com/v1/search?page=${page}&per_page=3&query=${queryTerm}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "Pexels/JavaScript",
          Authorization: "563492ad6f9170000100000116c183775efb4c00bb2c03ca473bb6d4",
        },
        signal
      })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => console.log(error));


export const useGalleryListings = () => {
    const [galleryListings, setGalleryListings] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false)
    const [page, setPage] = React.useState(1)
    const [queryTerm, setQueryTerm] = React.useState("sea")

    const loadGalleryListings = (page,queryTerm,signal) => {
        setIsLoading(true);
        getGalleryListings(page,queryTerm, signal)
            .then((data) => {
                if (data){
                    setPage(Number(data.page))
                    setGalleryListings(data.photos);
                }
                setIsLoading(false);
            });
    }
 
    useEffect(() => {
        const ab = new AbortController();
        loadGalleryListings(page, queryTerm, ab.signal);
        return () => {
            ab.abort();
          };
    }, [page, queryTerm]);

    return {
        galleryListings,
        page, 
        setPage,
        queryTerm, 
        setQueryTerm,
        isLoading
    };
};
