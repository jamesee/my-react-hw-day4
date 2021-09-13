import React from "react";

import PropTypes from "prop-types";

export const CartTotal = (props) => {
    const { cartTotal } = props;

    return (
        <div>
            <div className="flex-shrink-0 px-6 py-4 flex justify-end border-t border-gray-200">
                <span>Total
                    <span className="text-2xl px-4"> ${Number(cartTotal).toFixed(2)}</span>
                </span>
            </div>
        </div>
    )
}

CartTotal.propTypes = {
    cartTotal: PropTypes.number.isRequired,
}