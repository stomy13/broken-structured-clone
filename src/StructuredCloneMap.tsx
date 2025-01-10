// component

import { v7 } from "uuid";
import { useStore } from "./store";

export const StructuredCloneMap = () => {
  const simpleMap = useStore((state) => state.simpleMap);
  const simpleMapSet = useStore((state) => state.simpleMapSet);

  return (
    <div>
      <button
        onClick={() => {
          const newSimpleMap = new Map(simpleMap);
          newSimpleMap.set(String(newSimpleMap.size + 1), v7());
          simpleMapSet(newSimpleMap);
        }}
      >
        + 1
      </button>
      {Array.from(simpleMap).map(([key, value]) => (
        <div key={key}>
          🐻 {key}: {value}
        </div>
      ))}
    </div>
  );
};
