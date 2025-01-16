import {create} from 'zustand';

export const useUserStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  loginState: (userData) => set({ isAuthenticated: true, user: userData }),
  logoutState: () => set({ isAuthenticated: false, user: null }),
}));
