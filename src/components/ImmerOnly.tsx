import { produce } from "immer";
import { useState } from "react";
import { v7 } from "uuid";
import { Snackbar } from "./Snackbar";

export const logForInvestigation = ({
	simpleMap,
}: {
	simpleMap: Map<string, string>;
}) => {
	console.info("simpleMap", simpleMap);
	console.info(
		"Object.getOwnPropertySymbols(simpleMap)",
		Object.getOwnPropertySymbols(simpleMap),
	);
	// produce 適用後の Map のオブジェクトプロパティに add, delete, set, clear のミューテーションメソッドが追加されている。
	console.info(
		"Object.getOwnPropertyDescriptors(simpleMap)",
		Object.getOwnPropertyDescriptors(simpleMap),
	);
	console.info("Object.keys(simpleMap)", Object.keys(simpleMap));
	console.info("Object.values(simpleMap)", Object.values(simpleMap));
	console.info("Object.entries(simpleMap)", Object.entries(simpleMap));
	console.info("simpleMap instanceof Map", simpleMap instanceof Map);
};

export const ImmerOnly = () => {
	const [errMsg, setErrMsg] = useState("");

	const handleClick = () => {
		try {
			const state = {
				simpleMap: new Map<string, string>([["1", v7()]]),
			};
			console.info("state", state);
			logForInvestigation(state);

			const newSimpleMap = structuredClone(state.simpleMap);
			newSimpleMap.set(String(newSimpleMap.size + 1), v7());
			const immerState = produce(state, (draft) => {
				draft.simpleMap = newSimpleMap;
			});
			console.info("immerState", immerState);
			logForInvestigation(immerState);

			const { simpleMap: immerSimpleMap } = immerState;
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
				🍎🍎🍎🍎🍎 Immer Only 🍎🍎🍎🍎🍎
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
