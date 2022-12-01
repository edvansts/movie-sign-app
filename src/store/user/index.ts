import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { User } from "../../types";

interface UserState {
  user?: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: undefined,
    setUser: (user) => set({ user }),
  }))
);
