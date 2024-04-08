import { create } from "zustand";

export const useSidebar = create((set) => ({
  collapsed: false,
  isOpen: false,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  setCollapsedFalse: () => set({ collapsed: false }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
