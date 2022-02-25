import ytpl from 'ytpl';

declare global {
  interface Window {
    ytpl: typeof ytpl;
  }
}
export {};
