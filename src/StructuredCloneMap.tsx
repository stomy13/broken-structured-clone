import { v7 } from "uuid";
import { useStore } from "./store";
import { Snackbar } from "./SnackBar";
import { useState } from "react";

export const StructuredCloneMap = () => {
  const simpleMap = useStore((state) => state.simpleMap);
  const simpleMapSet = useStore((state) => state.simpleMapSet);
  const [errMsg, setErrMsg] = useState("");

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
            setErrMsg(String(e));
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
      <Snackbar
        message={errMsg}
        type="error"
        isOpen={errMsg !== ""}
        onClose={() => setErrMsg("")}
      />
    </div>
  );
};
