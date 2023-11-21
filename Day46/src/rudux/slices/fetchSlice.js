import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
  total:0
};
export const fetchSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productItem = state.cartList?.find(
        (product) => product._id === action.payload._id
      );
      if (productItem) {
        productItem.amount += 1;
        productItem.quantity -= 1;
      } else {
        const newCart = { ...action.payload, amount: 1 };
        state.cartList.push(newCart);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartList));
    },
    isloading: (state, action) => {
      state.loading = action.payload;
    },
    checkOut:(state, action) => {
      state.cartList = []
      localStorage.removeItem("cart");
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchTodos.pending, (state) => {
  //       state.status = "pending";
  //     });
  //     builder.addCase(fetchTodos.fulfilled, (state,action) => {
  //       state.shopList = action.payload;
  //       state.status = "succes";
  //     });
  //     builder.addCase(fetchTodos.rejected, (state) => {
  //       state.status = "err";
  //     });
  // //
  //   },
});

// export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const data = await response.json();
//   return data;
// });
