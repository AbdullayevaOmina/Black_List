import { create } from "zustand";

interface DarkMoodStore {
  isDark: boolean;
  changeMood: () => Promise<void>;
}

const useDarkMoodStore = create<DarkMoodStore>((set) => ({
  isDark: true,
  changeMood: async () => {
    // Implement the logic to change the mood
    set((state) => ({ isDark: !state.isDark }));
    return Promise.resolve();
  },
}));

export default useDarkMoodStore;
