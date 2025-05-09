import { create } from 'zustand';

type TShortenStatus = 'input' | 'pending' | 'resolved' | 'error';

interface StoreState {
  shortenStatus: TShortenStatus;
  setShortenStatus: (newText: TShortenStatus) => void;
  clearText: () => void;
}

const appStore = create<StoreState>((set) => ({
  shortenStatus: 'input',
  setShortenStatus: (newText) => set({ shortenStatus: newText }),
  clearText: () => set({ shortenStatus: 'input' }),
}));

export default appStore;