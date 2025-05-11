import { create } from 'zustand';

type TShortenStatus = 'input' | 'pending' | 'resolved' | 'error';

interface StoreState {
  shortenStatus: TShortenStatus;
  rawLink: string;
  shortLink: string | null;
  setRawLink: (newText: string) => void;
  setShortLink: (newText: null | string) => void;
  clearRawLink: () => void;
  setShortenStatus: (newText: TShortenStatus) => void;
}

const appStore = create<StoreState>((set) => ({
  shortenStatus: 'input',
  shortLink: null,
  rawLink: '',
  setShortenStatus: (newText) => set({ shortenStatus: newText }),
  clearRawLink: () => set({ rawLink: '' }),
  setRawLink: (newText) => set({ rawLink: newText }),
  setShortLink: (newText) => set({ shortLink: newText }),
}));

export default appStore;