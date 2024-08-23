import { create } from "zustand";

interface DarkMoodStore {
  isDark: boolean;
  changeMood: () => Promise<any>;
}

const useDarkMoodStore = create<DarkMoodStore>((set, get) => ({
  isDark: true,
  changeMood: () => {},
}));

export default useDarkMoodStore;
