import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useGalleryListings } from "domains/gallery";
import { CommentForm } from "domains/gallery";
import { CommentItem } from "domains/gallery";



export const MoviesDetail = () => {
    const { id } = useParams();
    const { isLoading, movie, loadMovieById, commentsItems, userId, loadCommentsById, deleteComment, postComment } = useGalleryListings();

    const token = localStorage.getItem("auth");


    // console.log(`userId : ${userId}`)


    useEffect(() => {
        const ab = new AbortController();
        loadMovieById(id, ab.signal);
        return () => {
            ab.abort();
        };
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        const ab = new AbortController();
        loadCommentsById(id, ab.signal)
        return () => {
            ab.abort();
        };
        // eslint-disable-next-line
    }, []);

    // console.log(`id: ${id}`)
    // console.log(movie)

    const addItem = (data) => {
        if (token) {
            const ab = new AbortController();
            postComment(data, token, ab.signal)
                .then(() => {
                    loadCommentsById(id, ab.signal);
                })
        }
    }

    const deleteItem = (commentId) => {
        if (token) {
            const ab = new AbortController();
            deleteComment(commentId, token)
                .then(() => {
                    loadCommentsById(id, ab.signal)
                })
        }
    }


    return (
        <>
            {
                movie && !isLoading &&
                <div className="
                    grid grid-cols-6 gap-x-1 gap-y-8
                    md:grid-cols-2
                    xl:grid-cols-6 xl:gap-x-4
                    m-2
                  ">
                    <div class=" col-span-2 w-full h-full rounded bg-white border-gray-200 shadow-md overflow-hidden">

                        <div className=" w-full">
                            <img src={movie.posterUrl} alt={movie.title} />
                        </div>
                    </div>
                    <div className="col-span-4">

                        <h3 className="text-center font-bold text-4xl p-8">{movie.title}</h3>
                        <p className="p-10 m-2 text-gray-700 text-xl">{movie.overview}</p>



                        <div class="max-w-6xl mx-auto px-3 py-1 space-y-3">
                            <div class="flex  md:flex-row gap-3">

                                <div className="w-1/2 flex-none">

                                    <CommentForm
                                        addItem={addItem}
                                        movieId={id}
                                    />
                                </div>

                                <div className="w-1/2 flex-none ">

                                    <ul className="space-y-3" id="career-list">
                                        {
                                            commentsItems &&
                                            commentsItems.map((comment, index) => (
                                                
                                                    <CommentItem
                                                        loginUserId={userId}
                                                        id={comment._id}
                                                        index={index}
                                                        comment={comment}
                                                        onDelete={deleteItem}
                                                        key={comment._id}
                                                    />
                    
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>

    )

}

