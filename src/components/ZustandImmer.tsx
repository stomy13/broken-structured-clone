import { useState } from "react";
import { v7 } from "uuid";
import { Snackbar } from "./Snackbar";
import { useStore } from "./store";

export const ZustandImmer = () => {
	const simpleMap = useStore((state) => state.simpleMap);
	const simpleMapSet = useStore((state) => state.simpleMapSet);
	const [errMsg, setErrMsg] = useState("");

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					try {
						// This might throw an error in some conditions
						const newSimpleMap = structuredClone(simpleMap);
						newSimpleMap.set(String(newSimpleMap.size + 1), v7());
						simpleMapSet(newSimpleMap);
					} catch (e) {
						console.error(e);
						setErrMsg(`ZustandImmer ${String(e)}`);
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
