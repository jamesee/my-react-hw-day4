import * as React from "react";
import { useEffect } from "react";
import { useAuth } from "domains/auth";

const getCartListings = (token) =>
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json"
        }
    }).then((res) => res.json());

const postCartListings = (listingId, token) => 
    fetch("https://ecomm-service.herokuapp.com/marketplace/cart/items", {
        method: "POST",
        body: JSON.stringify({
        quantity: 1,
        listingId,
        }),
        headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (res.ok) {
        return res.json();
        }
        throw new Error(res.statusText);
    });

const deleteCartListings = (listingId, token) => 
    fetch(`https://ecomm-service.herokuapp.com/marketplace/cart/items/${listingId}`, {
        method: "DELETE",
        headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (res.ok) {
        return res.json();
        }
        throw new Error(res.statusText);
    });

export const useCartListings = () => {
  const [cartListings, setCartListings] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const auth = useAuth();


  const calculateTotal = (setCartTotal) => {

    let sumList =[];
    console.log("[DEBUG] calculateTotal()");
    cartListings.forEach((item) => {
        sumList.push( (Number(item.listing.price) * Number(item.quantity)))
    })
    console.log(sumList);

    if (sumList.length){
        let total = sumList.reduce((prev, next) => prev + next, 0);
        console.log(`[DEBUG] total: ${total}`)
        setCartTotal(Number(total))
    }

  }

  const loadCartListings = (token) =>
    getCartListings(token)
        .then((data) => setCartListings(data));

  const addCartItem = (listingId, token) => {
    postCartListings(listingId, token)
    .then(()=>loadCartListings(token));
  }

  const removeCartItem = (listingId, token) =>{
    deleteCartListings(listingId, token)
        .then(()=>{
            loadCartListings(token);
        });
  }

  useEffect(() => {
      console.log("[DEBUG] useEffect @ use-cartlisting.js: loadCartLisings()");
      (auth.status === "authenticated") && loadCartListings(auth.accessToken);
  }, [auth.status]);

  useEffect(() => {
      console.log("[DEBUG] useEffect @ use-cartlisting.js: calcualteTotal()");
      (auth.status === "authenticated") && calculateTotal(setCartTotal);
      return () => {
        setCartTotal();
      };
  }, [auth.status, cartListings]);

  return {
    cartListings,
    loadCartListings,
    addCartItem,
    removeCartItem,
    cartTotal
  };
};
