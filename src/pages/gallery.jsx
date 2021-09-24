import { useGalleryListings} from "domains/gallery";
import * as React from "react";
import { Button } from "components/button";
import { GalleryItem, ImageSearch } from "domains/gallery";



export const Gallery = () => {
  const { page, setPage, setQueryTerm, galleryListings } = useGalleryListings();
  
  const onAddToCart = () =>{}

  return (

      <main className="bg-gray-50 lg:flex">

        <div className="flex-1">
          <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">

            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                Gallery
              </h1>
            </div>

            {/*  =============== Prev & Next buttons ============  */}
            <div className="flex justify-between">
              <Button
                type="button"
                className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 px-10 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      m-2
                    "
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </Button>

              {/* TODO: Search input here */}
              <ImageSearch searchText={(text) => {if (text) setQueryTerm(text)}} />

              <Button
                type="button"
                className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 px-10 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      m-2
                    "
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>
            {/*  =============== product ul start ============  */}
            <div className="
                          grid
                          md:grid-cols-2
                          gap-x-4 gap-y-8
                          xl:grid-cols-3 xl:gap-x-6
              ">
              {/*  =============== product li start ============  */}
              {galleryListings &&
                galleryListings.map((item) => (
                  <GalleryItem
                    imageUrl={item.src.medium}
                    photographer={item.photographer}
                    onAddToCart={onAddToCart}
                    key={item.id}
                  />
                ))

              }
              {/* =============== product li end ============  */}
            </div>
            {/*  =============== product ul end ============ */}
          </div>
        </div>



      </main>

  );
};
