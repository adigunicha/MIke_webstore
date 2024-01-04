import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
  initialState: {
    cart:[
    ],
    countvalue:0
},
  reducers:{
    Addtocart:(item,action) =>{
       item.cart.push(action.payload)
    },
    Deletecart:(items,action)=>{
      items.cart= items.cart.filter(items=>items.id !== action.payload.id)
      
    },
    Incrementcount:(items)=>{
       items.countvalue += 1
    },
    Decreasecount:(items)=>{
      items.countvalue -= 1
    }

  }

}
)
export const { Addtocart,Deletecart,Incrementcount,Decreasecount } = cartSlice.actions

export default cartSlice.reducer