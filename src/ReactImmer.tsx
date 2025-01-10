import { useState } from "react";
import { Snackbar } from "./SnackBar";
import { v7 } from "uuid";
import { produce } from "immer";

export const ReactImmer = () => {
  const [errMsg, setErrMsg] = useState("");
  const [state, setState] = useState({
    simpleMap: new Map<string, string>([["1", v7()]]),
  });
  const { simpleMap } = state;

  return (
    <div>
      <button
        onClick={() => {
          try {
            // This might throw an error in some conditions
            const newSimpleMap = structuredClone(simpleMap);
            newSimpleMap.set(String(newSimpleMap.size + 1), v7());
            setState(
              produce((draft) => {
                draft.simpleMap = newSimpleMap;
              })
            );
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
