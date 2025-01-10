import { v7 } from "uuid";
import { create } from "zustand";

type SimpleMap = Map<string, string>;

type State = {
  simpleMap: SimpleMap;
};

type Action = {
  simpleMapSet: (newSimpleMap: SimpleMap) => void;
};

export const useStore = create<State & Action>()((set) => ({
  simpleMap: new Map<string, string>([["1", v7()]]),
  simpleMapSet: (newSimpleMap: SimpleMap) => set({ simpleMap: newSimpleMap }),
}));
