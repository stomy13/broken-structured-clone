import "./App.css";
import { FrozenMap } from "./FrozenMap";
import { ImmerOnly } from "./ImmerOnly";
import { ReactImmer } from "./ReactImmer";
import { StructuredCloneMap } from "./StructuredCloneMap";
import { SymbolKeyMap } from "./SymbolKeyMap";

function App() {
	return (
		<>
			<StructuredCloneMap />
			<ReactImmer />
			<ImmerOnly />
			<FrozenMap />
			<SymbolKeyMap />
		</>
	);
}

export default App;
