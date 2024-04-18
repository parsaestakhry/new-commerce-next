import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

type CartStore = {
  cart: number;
  add: () => void;
  remove: () => void;
  removeAll: () => void;
};



export const useCartStore = create<CartStore>((set) => ({
  cart: 0,
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}));

export const useCategoryStore = create((set) => ({
  categories: [],
  fetch: async () => {
    const response = await fetch("http://127.0.0.1:8000/get-categories/");
    set({ categories: await response.json() });
  },
}));


export const useTokenStore = create((set) => ({
  token: null, // Initial token value is null
  setToken: (newToken : any) => set({ token: newToken }), // Method to set a new token
}));




if (process.env.NODE_ENV === "development") {
  // mountStoreDevtool("Store", useCartStore);
  // mountStoreDevtool("category", useCategoryStore);
  mountStoreDevtool("Token" , useTokenStore)
}
