import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

type CartStore = {
  cart: number;
  add: () => void;
  remove: () => void;
  removeAll: () => void;
};

type Store = {
  count: number;
  total : number;
  inc: () => void;
  setCount : (newValue : number) => void
  setTotal : (newTotal : number) => void
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
  setToken: (newToken: any) => set({ token: newToken }), // Method to set a new token
}));

export const useAmountStore = create<Store>()((set) => ({
  count: 0,
  total : 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  setCount: (newValue) => set({count : newValue}),
  setTotal : (newTotal) => set({total : newTotal})
}));

if (process.env.NODE_ENV === "development") {
  // mountStoreDevtool("Store", useCartStore);
  // mountStoreDevtool("category", useCategoryStore);
  mountStoreDevtool("Token", useTokenStore);
}
