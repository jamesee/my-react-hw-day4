import * as React from "react";

const getGalleryListings = (page, queryTerm, signal) =>
    fetch(`https://api.pexels.com/v1/search?page=${page}&per_page=${process.env.REACT_APP_PER_PAGE}&query=${queryTerm}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "Pexels/JavaScript",
          Authorization: process.env.REACT_APP_API_KEY,
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

    const [pagination, setPagination] = React.useState(()=>{
        let localPage = localStorage.getItem("page");
        // console.log(`page : ${localPage}`)
        return {page: (localPage !== null)? Number(localPage) : Number(1) };
    })

    // console.log(pagination)
    const [queryTerm, setQueryTerm] = React.useState(()=>{
        let localQueryTerm = localStorage.getItem("queryTerm");
        // console.log(`localQueryTerm : ${localQueryTerm}`)
        return (localQueryTerm !== null)? localQueryTerm : "nature";
    })

    const loadGalleryListings = (page,queryTerm,signal) => {
        setIsLoading(true);
        localStorage.setItem('page', Number(pagination.page))
        localStorage.setItem('queryTerm', queryTerm)
        getGalleryListings(page,queryTerm, signal)
            .then((data) => {
                if (data){
                    const {page, per_page, total_results, photos} = data
                    setPagination({page, per_page, total_results})
                    setGalleryListings(photos);
                }
                setIsLoading(false);
            });
    }
 
    React.useEffect(() => {
        const ab = new AbortController();
        loadGalleryListings(pagination.page, queryTerm, ab.signal);
        return () => {
            ab.abort();
          };
        // eslint-disable-next-line
    }, [pagination.page, queryTerm]);

    return {
        galleryListings,
        pagination, 
        setPagination,
        queryTerm, 
        setQueryTerm,
        isLoading
    };
};
