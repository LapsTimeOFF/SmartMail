import { api } from "./preload/preload";
export {};
declare global {
  interface Window {
    electronAPI: typeof api;
  }
}
