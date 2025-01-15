import "./App.css";
import { FrozenMap } from "./FrozenMap";
import { ImmerOnly } from "./ImmerOnly";
import { ReactImmer } from "./ReactImmer";
import { StructuredCloneMap } from "./StructuredCloneMap";

function App() {
	return (
		<>
			<StructuredCloneMap />
			<ReactImmer />
			<ImmerOnly />
			<FrozenMap />
		</>
	);
}

export default App;
