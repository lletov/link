import { create } from 'zustand';

type TShortenStatus = 'input' | 'pending' | 'resolved' | 'error';

interface StoreState {
  shortenStatus: TShortenStatus;
  rawLink: string;
  setRawLink: (newText: string) => void;
  clearRawLink: () => void;
  setShortenStatus: (newText: TShortenStatus) => void;
}

const appStore = create<StoreState>((set) => ({
  shortenStatus: 'pending',
  rawLink: '',
  setShortenStatus: (newText) => set({ shortenStatus: newText }),
  clearRawLink: () => set({ rawLink: '' }),
  setRawLink: (newText) => set({ rawLink: newText }),
}));

export default appStore;