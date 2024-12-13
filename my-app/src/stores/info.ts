import { getUserOcid, getUserUnion } from "../api/userConfig";
import { create } from "zustand";

const useInfoStore = create<any>((set, get) => ({
  info: null,
  ocId: "",
  union: [],
  isLoading: false,
  error: null,
  setOcid: (ocid: string) => set({ ocid }),
  setInfo: (info: any) => set({ info }),
  setUnion: (union: any) => set({ union }),
  fetchOcid: async (param: any) => {
    console.log(param);
    try {
      const data = await getUserOcid(param);
      set({ ocId: data });
    } catch (error) {
      set({ error, isLoading: false });
      alert("해당 닉네임이 없습니다");
      window.location.href = "/";
    }
  },
  fetchUnion: async (param: any) => {
    try {
      set({ isLoading: true });
      const data = await getUserUnion(param);
      set({ union: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  refetchUnion: (param: any) => {
    console.log(param);
    set({ union: [] });
    return get().fetchUnion(param);
  },
}));

export default useInfoStore;
