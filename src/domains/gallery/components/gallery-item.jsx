import {
  PencilIcon,
  TrashIcon,
  ThumbUpIcon
} from "@heroicons/react/solid";
import { Button } from "components/button";
// import PropTypes from "prop-types";
import * as React from "react";

const EditButton = () => (
  <Button
    variant="primary"
    onClick={() => alert("Edit btn clicked, populate the form!")}
  >
    <PencilIcon className="h-4 w-4 mr-1.5" />
    EDIT
  </Button>
);

const DeleteButton = ({ text, onClick }) => (
  <Button variant="outline" onClick={onClick}>
    <TrashIcon className="w-4 h-4 mr-1.5" />
    {text}
  </Button>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
    {children}
  </span>
);

export const GalleryItem = (props) => {
  const [isDeleting, setIsDeleting] = React.useState(false);


  return (
    <>
      <div className="relative flex flex-col">

        <div
          // className="absolute inset-0 w-full h-full object-cover object-center"
          className="absolute inset-0 w-full h-full object-cover object-center group block w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden"
        >
          <img
            src={props.imageUrl}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75 h-80 w-full"
          />
        </div>
        <div
          // className="h-full w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden bg-indigo-500 opacity-0 hover:opacity-90"
          className="px-8 py-10 rounded-lg relative z-10 w-full bg-indigo-500 opacity-0 hover:opacity-100"
        >
          <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-bold text-white hover:text-indigo-100 mb-3">Shooting Stars</h1>
          <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <span className="text-white">Photographer:</span> <span className="title-font text-lg font-bold text-white hover:text-indigo-100 mb-3">  {props.photographer}</span>
          <div className="flex flex-col md:flex-row justify-center gap-3 mt-4 py-1">
          {props.onAddToCart ? (
            <Button variant="primary" onClick={props.onAddToCart}>
              <ThumbUpIcon className="h-4 w-4 mr-1.5" /> LIKES
            </Button>
          ) : (
            <>
              <EditButton />
              <DeleteButton
                text={isDeleting ? "DELETING..." : "DELETE"}
                onClick={() => setIsDeleting(!isDeleting)}
              />
            </>
          )}
        </div>
        </div>

        </div>

  
      {/* 
        <div className="flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
          <div className="mt-1 flex-1">
            <div className="flex justify-between items-center gap-3">
              <div>
                RM <span className="text-2xl font-bold">{props.price}</span>
              </div>
              {props.onlyOne ? (
                <Badge>Only One</Badge>
              ) : (
                <div className="text-sm text-gray-500">
                  {props.availableStock} piece available
                </div>
              )}
            </div>
            <p className="block text-sm font-medium text-gray-900 truncate pointer-events-none">
              {props.title}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {props.description}
            </p>
          </div> 

          <div className="flex flex-col md:flex-row gap-3 py-3">
            {props.onAddToCart ? (
              <Button variant="primary" onClick={props.onAddToCart}>
                <ShoppingCartIcon className="h-4 w-4 mr-1.5" /> ADD TO CART
              </Button>
            ) : (
              <>
                <EditButton />
                <DeleteButton
                  text={isDeleting ? "DELETING..." : "DELETE"}
                  onClick={() => setIsDeleting(!isDeleting)}
                />
              </>
            )}
          </div> 

        </div>*/}
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
