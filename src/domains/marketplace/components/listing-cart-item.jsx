import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

// const sampleCartItem = [
//     {
//       "_id": "613e9371cc12a00020653f76",
//       "listing": {
//         "_id": "613e8b19cc12a00020653b60",
//         "title": "Chicken",
//         "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
//         "price": 272,
//         "condition": "used_good",
//         "imageUrl": "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
//         "availability": "single-item",
//         "createdAt": "2021-09-12T23:19:53.900Z",
//         "updatedAt": "2021-09-12T23:19:53.900Z",
//         "__v": 0
//       },
//       "quantity": 3,
//       "createdAt": "2021-09-12T23:55:29.127Z",
//       "updatedAt": "2021-09-13T00:20:37.652Z"
//     }
// ]



export const ListingCartItem = (props) => {
    const { item, onClick } = props
    const { quantity, listing } = item;
    const { imageUrl, title, price } = listing;

    return (
        <li className="flex px-4 sm:px-6 py-4">
            <img className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
            <div className="flex-1 flex justify-between items-center ml-3">
                <div>
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">${price} x {quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                    <div>${(Number(price) * Number(quantity)).toFixed(2)}</div>
                    <button className="
                        text-red-400
                        p-1
                        rounded-full
                        hover:bg-gray-50
                        focus:outline-none
                        focus:bg-gray-50
                        focus:ring
                        focus:ring-pink-500
                        focus:ring-opacity-30
                        transition
                        duration-150
                        ease-in-out
                      "
                        onClick={onClick}
                    >
                        <TrashIcon className="w-6 h-6" />
                    </button>

                </div>
            </div>

        </li>
    )
}


ListingCartItem.propTypes = {
    /** Item is an object */
    item: PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            /** listing is an object */
            listing: PropTypes.shape({
                        title: PropTypes.string.isRequired,
                        price: PropTypes.number.isRequired,
                        imageUrl: PropTypes.string.isRequired
            }).isRequired
    }).isRequired,
    /** to pass in a delete function */
    onClick: PropTypes.func.isRequired
  }


