import { useAuth } from "domains/auth";
import * as React from "react";

const getListings = (page, signal) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?limit=6&page=${page}`, {
    signal,
  }).then((res) => res.json());

export const useListings = () => {
  const [listings, setListings] = React.useState(undefined);
  const [page, setPage] = React.useState(1);
  const auth = useAuth();


  const loadListings = (pageNum, signal) =>
    getListings(pageNum, signal).then((data) => setListings(data));

  React.useEffect(() => {
    const ab = new AbortController();
    console.log("[DEBUG] useEffect @ use-listing.js: loadListings()");
    (auth.status === "authenticated") && loadListings(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page, auth.status]);

  return {
    listings,
    page,
    setPage,
    loadListings,
  };
};
