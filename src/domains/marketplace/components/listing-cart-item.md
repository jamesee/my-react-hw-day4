```jsx
const cartItems =[
  {
    "_id": "613f34f12a4e610020f07b8e",
    "listing": {
      "_id": "613ed2e82a4e610020f06afe",
      "title": "Bike",
      "description": "Minimal pen ;)",
      "price": 428,
      "condition": "used_like-new",
      "imageUrl": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
      "availability": "single-item",
      "createdAt": "2021-09-13T04:26:16.464Z",
      "updatedAt": "2021-09-13T04:26:16.464Z",
      "__v": 0
    },
    "quantity": 2,
    "createdAt": "2021-09-13T11:24:33.969Z",
    "updatedAt": "2021-09-13T11:24:36.555Z"
  },
  {
    "_id": "613f3aa42a4e610020f07bf5",
    "listing": {
      "_id": "613ed2e82a4e610020f06b5d",
      "title": "Tuna",
      "description": "NIKE FREE",
      "price": 999,
      "condition": "used_fair",
      "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
      "availability": "in-stock",
      "numOfStock": 2,
      "createdAt": "2021-09-13T04:26:16.597Z",
      "updatedAt": "2021-09-13T04:26:16.597Z",
      "__v": 0
    },
    "quantity": 1,
    "createdAt": "2021-09-13T11:48:52.636Z",
    "updatedAt": "2021-09-13T11:48:52.636Z"
  }
]
<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
    <ListingCartItem 
            item={cartItems[0]} 
            // onClick={()=>removeCartItem(cartItem.listing._id, auth)}
            key={cartItems[0]._id}
            />

    <ListingCartItem 
            item={cartItems[1]} 
            // onClick={()=>removeCartItem(cartItem.listing._id, auth)}
            key={cartItems[1]._id}
            />       
</div>
```