import { LoginForm, useAuth, LogoutButton } from "domains/auth";
import { ListingItem, useListings, ListingCartItem, useCartListings, CartTotal, CartEmpty } from "domains/marketplace";
import * as React from "react";
import { Button } from "components/button";



export const MarketplacePublic = () => {
  const { page, setPage, listings } = useListings();
  const auth = useAuth();
  const {cartListings, addCartItem, removeCartItem, cartTotal} = useCartListings();

  return (
    <React.Fragment>
      {
        auth.status === "anonymous" &&
        <main className="bg-gray-50 p-6 sm:p-12 min-h-screen">
          <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <LoginForm />
          </div>
        </main>
      }
      {
        auth.status === "authenticated" &&
        <main className="bg-gray-50 lg:flex">

          <div className="flex-1">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
              <div className="text-right">
                <LogoutButton />
              </div>
              <div className="sm:flex sm:flex-col sm:align-center">
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                  Marketplace
                </h1>
              </div>

              {/*  =============== Prev & Next buttons ============  */}
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="
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
                <Button
                  type="button"
                  className="
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
                {listings &&
                  listings.map((item) => (
                    <ListingItem
                      imageUrl={item.imageUrl}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      availableStock={item.numOfStock}
                      onlyOne={item.availability === "single-item"}
                      onAddToCart={() => addCartItem(item._id, auth.accessToken)}
                      key={item._id}
                    />
                  ))}
                {/* =============== product li end ============  */}
              </div>
              {/*  =============== product ul end ============ */}
            </div>
          </div>

          {/*  =============== Shopping Cart start ============  */}
          <div className="
                flex-initial
                bg-white
                w-full
                lg:max-w-md
                border-b border-gray-100
          ">
            <div className="flex flex-col h-full">

              {/* start of shopping cart header */}
              <div className="py-6 px-4 bg-pink-700 sm:px-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-white">Your shopping cart</h2>
                </div>
                <div className="mt-1">
                  <p className="text-sm text-pink-300">
                    Listing added into your shopping cart
                  </p>
                </div>
              </div>
              {/*  end of shopping cart header  */}
              {
                cartListings && 
                cartListings.map((cartItem) => (
                  <ListingCartItem 
                  item={cartItem} 
                  onClick={()=>removeCartItem(cartItem.listing._id, auth.accessToken)}
                  key={cartItem._id}
                   />
                ))
                }
                {
                  cartListings  && cartTotal  &&
                    <CartTotal cartTotal={cartTotal} />
                } 
                {
                  (!cartTotal) && <CartEmpty />
                }
            </div>
          </div> 
          {/*  =============== Shopping Cart end ============  */}

        </main>
      }
    </React.Fragment>

  );
};
