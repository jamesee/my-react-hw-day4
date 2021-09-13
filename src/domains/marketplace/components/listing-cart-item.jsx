import React from "react";
import { TrashIcon, ShoppingBagIcon } from "@heroicons/react/outline";
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

export const CartEmpty = () => {
    return (
        <div className="px-4 sm:px-6 pb-12">
            <div className="pt-6 pb-5">
                <div id="no-cart-item-message">
                    <div className="p-4 text-center">
                        <ShoppingBagIcon className="inline-block w-12 h-12 text-gray-300" />
                        <p className="text-center text-gray-500">There is no item in your shopping cart</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export const CartTotal = (props) => {
    const { cartTotal } = props;
    return (

        <div>
            <div className="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
                <span>Total
                    <span className="text-2xl px-4"> ${cartTotal}</span>
                </span>
            </div>


        </div>
    )
}

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
                    <div>${Number(price) * Number(quantity)}</div>
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

CartTotal.propTypes = {
    cartTotal: PropTypes.number.isRequired
}

ListingCartItem.propTypes = {
    item: PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            listing: PropTypes.shape({
                        title: PropTypes.string.isRequired,
                        price: PropTypes.number.isRequired,
                        imageUrl: PropTypes.string.isRequired
            }).isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
  }
