import create from 'zustand';

const useStore = create(set => ({
  setHidden: hidden => set({ hidden }),
  hidden: false,
}));

export default useStore;
