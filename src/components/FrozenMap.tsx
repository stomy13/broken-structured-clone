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
			// freeze 後も　 Map に設定される
			simpleMap.set(String(simpleMap.size + 1), v7());
			logForInvestigation({ simpleMap });
			structuredClone(simpleMap);

			// freeze したオブジェクトにメソッドを追加するとその時点でエラーになる
			// TypeError: Attempting to define property on object that is not extensible. —
			// simpleMap.set = () => {
			// 	throw new Error("set is not allowed");
			// };

			const manualFrozenMap = structuredClone(simpleMap);
			manualFrozenMap.set(String(manualFrozenMap.size + 1), v7());
			// proto に追加してもエラーにならない
			const proto = Object.getPrototypeOf(manualFrozenMap);
			proto.add = () => {
				throw new Error("add is not allowed");
			};
			// オブジェクトにメソッドを追加すると structuredClone でエラーになる
			manualFrozenMap.set = () => {
				throw new Error("set is not allowed");
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
