import { v7 } from "uuid";
import { useStore } from "./store";

export const StructuredCloneMap = () => {
  const simpleMap = useStore((state) => state.simpleMap);
  const simpleMapSet = useStore((state) => state.simpleMapSet);

  return (
    <div>
      <button
        onClick={() => {
          try {
            // This might throw an error in some conditions
            const newSimpleMap = structuredClone(simpleMap);
            newSimpleMap.set(String(newSimpleMap.size + 1), v7());
            simpleMapSet(newSimpleMap);
          } catch (e) {
            console.error(e);
          }
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
