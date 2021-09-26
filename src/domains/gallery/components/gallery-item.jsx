import {
  ThumbUpIcon,
  ThumbDownIcon
} from "@heroicons/react/solid";
import { Button } from "components/button";
// import PropTypes from "prop-types";
import * as React from "react";
import { useContext } from "react";
import { CollectionsContext } from '../../gallery';


export const GalleryItem = (props) => {

  const { imageId, imageHeight, imageWidth, imageUrl, photographerUrl, photographer } = props;
  const collectionsCtx = useContext(CollectionsContext);
  const itemIsCollection = collectionsCtx.itemIsCollection(imageId);

  const toggleCollectionStatusHandler = () => {
    if (itemIsCollection) {
      collectionsCtx.removeCollection(imageId);
    } else {
      collectionsCtx.addCollection({
        id: imageId,
        height: imageHeight,
        width: imageWidth,
        src: {
          large: imageUrl
        },
        photographer:photographer,
        photographer_url: photographerUrl
      });
    }
    // console.log(collectionsCtx);
  }

  return (
    <>
      <div className="relative flex flex-col items-center">

        <div className="
                        absolute 
                        inset-0 
                        w-full 
                        h-full
                        object-cover 
                        object-center 
                        group 
                        block 
                        rounded-lg 
                        bg-gray-100 
                        focus-within:ring-2 
                        focus-within:ring-offset-2 
                        focus-within:ring-offset-gray-100 
                        focus-within:ring-pink-500 
                        overflow-hidden
                      "
        >
          <img
            src={imageUrl}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75 w-full h-80 overflow-hidden"
          />
        </div>
        <div
          className="px-8 py-10 rounded-lg relative z-10 w-full h-80 bg-indigo-500 opacity-0 hover:opacity-100"
        >

          <div className="flex justify-evenly">
            <div>
              <table className="table-auto leading-relaxed text-white">
                <thead>
                  <tr>
                    <th className="text-right px-3">Photographer:</th>
                    <th className="text-left px-3">{photographer}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-right px-3">ID:</td>
                    <td className="text-left px-3">{imageId}</td>
                  </tr>
                  <tr>
                    <td className="text-right px-3">Height:</td>
                    <td className="text-left px-3">{imageHeight}</td>
                  </tr>
                  <tr>
                    <td className="text-right px-3">Width:</td>
                    <td className="text-left px-3">{imageWidth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <a href={photographerUrl} className="underline text-center leading-relaxed text-white">
              Visit photographer's website
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-3 mt-5 py-1">

            <Button variant="primary" onClick={toggleCollectionStatusHandler}>
              {itemIsCollection? <ThumbDownIcon className="h-4 w-4 mr-1.5" /> : <ThumbUpIcon className="h-4 w-4 mr-1.5" />}
              {itemIsCollection ? 'Remove Likes' : 'Likes'}
            </Button>

          </div>
        </div>

      </div>
    </>
  );
};

  // ListingItem.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   imageUrl: PropTypes.string,
  //   /**
  //    * Required if `onlyOne` is `false`.
  //    */
  //   availableStock: PropTypes.number,
  //   onlyOne: PropTypes.bool,
  // };
