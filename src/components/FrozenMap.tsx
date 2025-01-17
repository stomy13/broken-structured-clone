import { useState } from "react";
import { v7 } from "uuid";
import { logForInvestigation } from "./ImmerOnly";
import { Snackbar } from "./Snackbar";

export const FrozenMap = () => {
	const [errMsg, setErrMsg] = useState("");

	const handleClick = () => {
		try {
			const simpleMap = new Map<string, string>([["1", v7()]]);
			logForInvestigation({ simpleMap });

			Object.freeze(simpleMap);
			logForInvestigation({ simpleMap });

			const newSimpleMap = structuredClone(simpleMap);
			newSimpleMap.set(String(newSimpleMap.size + 1), v7());

			const manualFrozenMap = structuredClone(simpleMap);
			manualFrozenMap.set(String(manualFrozenMap.size + 1), v7());
			const proto = Object.getPrototypeOf(manualFrozenMap);
			proto.add = () => {
				throw new Error("add is not allowed");
			};
			logForInvestigation({ simpleMap: manualFrozenMap });
			structuredClone(manualFrozenMap);
		} catch (e) {
			console.error(e);
			setErrMsg(`Frozen Map ${String(e)}`);
		}
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				Frozen Map
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
