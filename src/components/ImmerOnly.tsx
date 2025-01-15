import { produce } from "immer";
import { useState } from "react";
import { v7 } from "uuid";
import { Snackbar } from "./Snackbar";

export const ImmerOnly = () => {
	const [errMsg, setErrMsg] = useState("");

	const handleClick = () => {
		try {
			const state = {
				simpleMap: new Map<string, string>([["1", v7()]]),
			};
			const newSimpleMap = structuredClone(state.simpleMap);
			newSimpleMap.set(String(newSimpleMap.size + 1), v7());
			const immerState = produce(state, (draft) => {
				draft.simpleMap = newSimpleMap;
			});

			const { simpleMap: immerSimpleMap } = immerState;
			// console.log(immerSimpleMap);

			// This throw an error
			const newSimpleMap2 = structuredClone(immerSimpleMap);
			newSimpleMap2.set(String(newSimpleMap.size + 1), v7());
		} catch (e) {
			console.error(e);
			setErrMsg(String(e));
			setErrMsg(`ImmerOnly ${String(e)}`);
		}
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				Immer Only
			</button>
			<Snackbar
				message={errMsg}
				type="error"
				isOpen={errMsg !== ""}
				onClose={() => setErrMsg("")}
			/>
		</div>
	);
};
