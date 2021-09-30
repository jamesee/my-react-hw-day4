import * as React from "react";
import {useAuth} from "../../auth";


const commentData = [
    {
      "_id": "615588db1aa5950020b453c0",
      "rating": 5,
      "content": "Test comment3",
      "movie": "61547ee9465aaf0020be8cae",
      "userId": "615588811aa5950020b4523b",
      "userName": "James Ee",
      "createdAt": "2021-09-30T09:52:27.766Z",
      "updatedAt": "2021-09-30T09:52:27.766Z",
      "__v": 0
    },
    {
      "_id": "615588d61aa5950020b453be",
      "rating": 5,
      "content": "Test comment3",
      "movie": "61547ee9465aaf0020be8cae",
      "userId": "615588811aa5950020b4523b",
      "userName": "James Ee",
      "createdAt": "2021-09-30T09:52:22.032Z",
      "updatedAt": "2021-09-30T09:52:22.032Z",
      "__v": 0
    },
    {
      "_id": "615588cf1aa5950020b453bb",
      "rating": 5,
      "content": "Test comment2",
      "movie": "61547ee9465aaf0020be8cae",
      "userId": "615588811aa5950020b4523b",
      "userName": "James Ee",
      "createdAt": "2021-09-30T09:52:15.479Z",
      "updatedAt": "2021-09-30T09:52:15.479Z",
      "__v": 0
    },
    {
      "_id": "615588c41aa5950020b453b9",
      "rating": 5,
      "content": "Test comment1",
      "movie": "61547ee9465aaf0020be8cae",
      "userId": "615588811aa5950020b4523b",
      "userName": "James Ee",
      "createdAt": "2021-09-30T09:52:04.827Z",
      "updatedAt": "2021-09-30T09:52:04.827Z",
      "__v": 0
    }
]

const getGalleryListings = (page, signal) =>
    fetch(`https://ecomm-service.herokuapp.com/movie/?limit=6&page=${page}`, {
        signal
      })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => console.log(error));


const getMovieById = (id,signal) =>
    fetch(`https://ecomm-service.herokuapp.com/movie/movie/${id}`, {
        signal
      })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => console.log(error));

const getCommentsById = (movieId,signal) =>
    fetch(`https://ecomm-service.herokuapp.com/movie/movie/${movieId}/comment`, {
        signal
      })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => console.log(error));

const getWhoAmI = (token, signal) =>
    fetch(`https://ecomm-service.herokuapp.com/whoami`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

const postComment = (data, token, signal) =>
    fetch(`https://ecomm-service.herokuapp.com/movie/comment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        signal
      })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => console.log(error));

const deleteComment = (id, token) =>
    fetch(`https://ecomm-service.herokuapp.com/movie/comment/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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
    const [movie, setMovie] = React.useState(null);
    const [commentsItems, setCommentsItems] = React.useState(commentData);
    const [userId, setUserId] = React.useState(null);

    const auth = useAuth();


    const [page, setPage] = React.useState(()=>{
        let localPage = localStorage.getItem("page");
        return  (localPage !== null)? parseInt(localPage) : parseInt(1);
    })


    const loadGalleryListings = (page,signal) => {
        setIsLoading(true);
        localStorage.setItem('page', parseInt(page))
        getGalleryListings(page, signal)
            .then((data) => {
                if (data){
                    setGalleryListings(data);
                }
                setIsLoading(false);
            });
    }

    const loadMovieById = (id, signal) => {
        setIsLoading(true);
        getMovieById(id, signal)
            .then((data) => {
                if (data) {
                    setMovie(data);
                }
                setIsLoading(false);
            });
    }

    const loadCommentsById = (id, signal) => {
        setIsLoading(true);
        getCommentsById(id, signal)
            .then((data) => {
                if (data) {
                    setCommentsItems(data);
                }
                setIsLoading(false);
            });
    }
 
    React.useEffect(() => {
        const ab = new AbortController();
        const token = localStorage.getItem('auth')
        token && getWhoAmI(token, ab.signal).then(data => setUserId(data.userId));
        return () => {
            ab.abort();
          };
    }, []);

    React.useEffect(() => {
        const ab = new AbortController();
        if (auth.status !== "authenticated") {
            return
        }
        loadGalleryListings(page, ab.signal);
        return () => {
            ab.abort();
          };
        // eslint-disable-next-line 
    }, [page]);

    return {
        galleryListings,
        page, 
        setPage,
        isLoading,
        setIsLoading,
        loadMovieById,
        movie,
        setMovie,
        commentsItems,
        setCommentsItems,
        loadCommentsById,
        deleteComment,
        postComment,
        userId
    };
};
