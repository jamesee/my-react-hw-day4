```jsx
<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
    <ListingCartItem 
            item={
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
              } 
            // onClick={()=>removeCartItem(cartItem.listing._id, auth)}
            // key={cartItems[0]._id}
            /> 
            
        <ListingCartItem 
            item={
                  {
                    "_id": "613f5003d041af00207593d7",
                    "listing": {
                      "_id": "613f4f3fd041af002075902d",
                      "title": "Cheese",
                      "description": "Vinta.co",
                      "price": 389,
                      "condition": "used_fair",
                      "imageUrl": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
                      "availability": "in-stock",
                      "numOfStock": 5,
                      "createdAt": "2021-09-13T13:16:47.539Z",
                      "updatedAt": "2021-09-13T13:16:47.539Z",
                      "__v": 0
                    },
                    "quantity": 1,
                    "createdAt": "2021-09-13T13:20:03.469Z",
                    "updatedAt": "2021-09-13T13:20:03.469Z"
                  }
              } 
            // onClick={()=>removeCartItem(cartItem.listing._id, auth)}
            // key={cartItems[0]._id}
            />  

        <ListingCartItem 
            item={
                  {
                      "_id": "613f4fefd041af00207593cc",
                      "listing": {
                        "_id": "613f4f3fd041af0020759047",
                        "title": "Cheese",
                        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                        "price": 962,
                        "condition": "new",
                        "imageUrl": "https://images.unsplash.com/photo-1607435097405-db48f377bff6?ixid=MnwyNDY1NjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYyNDYyMDc&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80",
                        "availability": "in-stock",
                        "numOfStock": 2,
                        "createdAt": "2021-09-13T13:16:47.637Z",
                        "updatedAt": "2021-09-13T13:16:47.637Z",
                        "__v": 0
                      },
                      "quantity": 1,
                      "createdAt": "2021-09-13T13:19:43.377Z",
                      "updatedAt": "2021-09-13T13:19:43.377Z"
                    }
              } 
            // onClick={()=>removeCartItem(cartItem.listing._id, auth)}
            // key={cartItems[0]._id}
            />  
</div>
```