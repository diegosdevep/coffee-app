import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    user: null,
    products: [],
  },
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      const index = state.products.findIndex(
        (p) => p.id === product.id && p.size === product.size
      );
      if (index >= 0) {
        state.products[index].quantity += product.quantity;
      } else {
        let productId = product.id;
        if (state.products.some((p) => p.size !== product.size)) {
          productId = state.products[state.products.length - 1].id + 1;
        }
        state.products.push({ ...product, id: productId });
      }
    },

    removeProduct(state, action) {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    clearOrder(state) {
      state.user = null;
      state.products = [];
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addProduct, removeProduct, clearOrder, setUser, setProducts } =
  orderSlice.actions;

export default orderSlice.reducer;
