import { create } from "zustand";

export const useChat = create((set) => ({
  selectedContact: null,
  handleSelectedContact: (contact) => set({ selectedContact: contact }),
}));
