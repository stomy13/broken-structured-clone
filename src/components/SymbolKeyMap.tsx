import { useState } from "react";
import { v7 } from "uuid";
import { Snackbar } from "./Snackbar";

const DRAFT_STATE: unique symbol = Symbol.for("immer-state");

export const SymbolKeyMap = () => {
	const [errMsg, setErrMsg] = useState("");

	const handleClick = () => {
		try {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const simpleMap = new Map<string, string>([["1", v7()]]) as Map<any, any>;
			simpleMap.set(DRAFT_STATE, "draft");
			const newSimpleMap = structuredClone(simpleMap);
			newSimpleMap.set(String(newSimpleMap.size + 1), v7());
		} catch (e) {
			console.error(e);
			setErrMsg(`Symbol Key Map ${String(e)}`);
		}
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				Symbol Key Map
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
