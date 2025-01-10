import { v7 } from "uuid";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type SimpleMap = Map<string, string>;

type State = {
  simpleMap: SimpleMap;
};

type Action = {
  simpleMapSet: (newSimpleMap: SimpleMap) => void;
};

export const useStore = create<State & Action>()(
  immer((set) => ({
    simpleMap: new Map<string, string>([["1", v7()]]),
    simpleMapSet: (newSimpleMap: SimpleMap) =>
      set((state) => {
        state.simpleMap = newSimpleMap;
      }),
  }))
);
