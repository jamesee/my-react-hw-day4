import * as React from "react";
import { useEffect } from "react";
import { useAuth } from "domains/auth";

const getCartListings = (auth) =>
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            accept: "application/json"
        }
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.statusText);
    }).catch((err) => {
        console.log(err);
        if (err === "Unauthorized") {
            auth.logout();
        }
    });

const postCartListings = (listingId, auth) =>
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        method: "POST",
        body: JSON.stringify({
            quantity: 1,
            listingId,
        }),
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
        },
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.statusText);
    }).catch((err) => {
        console.log(err);
        if (err === "Unauthorized") {
            auth.logout();
        }
    });;

const deleteCartListings = (listingId, auth) =>
    fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items/${listingId}`, {
        method: "DELETE",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
        },
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.statusText);
    }).catch((err) => {
        console.log(err);
        if (err === "Unauthorized") {
            auth.logout();
        }
    });;

export const useCartListings = () => {
    const [cartListings, setCartListings] = React.useState([]);
    const [cartTotal, setCartTotal] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false)
    const auth = useAuth();

    const calculateTotal = (data) => {
        let sumList = [];
        console.log("[DEBUG] calculateTotal()");

        if (data.length) {
            data.forEach((item) => {
                sumList.push((Number(item.listing.price) * Number(item.quantity)))
            })
            console.log(sumList);
        }

        if (sumList.length) {
            let total = sumList.reduce((prev, next) => prev + next, 0);
            console.log(`[DEBUG] total: ${total}`)
            return Number(total);
        }
    }

    const loadCartListings = (auth) => {
        setIsLoading(true);
        getCartListings(auth)
            .then((data) => {
                setCartListings(data);
                let total = calculateTotal(data);
                if (total) {
                    setCartTotal(total);
                }
                setIsLoading(false);
            });
    }
 

    const addCartItem = (listingId, auth) => {
        setIsLoading(true);
        postCartListings(listingId, auth)
            .then(() => loadCartListings(auth));
    }

    const removeCartItem = (listingId, auth) => {
        setIsLoading(true);
        deleteCartListings(listingId, auth)
            .then(() => {
                loadCartListings(auth);
            });
    }

    useEffect(() => {
        console.log("[DEBUG] useEffect @ use-cartlisting.js: loadCartLisings()");
        (auth.status === "authenticated") && loadCartListings(auth);
    }, [auth]);

    //   useEffect(() => {
    //       console.log("[DEBUG] useEffect @ use-cartlisting.js: calcualteTotal()");
    //       (auth.status === "authenticated") && calculateTotal(setCartTotal);
    //       return () => {
    //         setCartTotal();
    //       };
    //   }, [auth, cartListings]);

    return {
        cartListings,
        loadCartListings,
        addCartItem,
        removeCartItem,
        cartTotal,
        isLoading
    };
};
